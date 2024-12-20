import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-webgpu';
import * as mpPose from '@mediapipe/pose';
import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';
import * as tf from '@tensorflow/tfjs-core';

tfjsWasm.setWasmPaths(
  `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${tfjsWasm.version_wasm}/dist/`);

import * as posedetection from '@tensorflow-models/pose-detection';

import { Camera } from './camera';
import { RendererWebGPU } from './renderer_webgpu';
import { RendererCanvas2d } from './renderer_canvas2d';
import { setupDatGui } from './option_panel';
import { STATE } from './params';
import { setupStats } from './stats_panel';
import { setBackendAndEnvFlags } from './util';

let detector, camera, stats;
let startInferenceTime, numInferences = 0;
let inferenceTimeSum = 0, lastPanelUpdate = 0;
let rafId;
let renderer = null;
let useGpuRenderer = false;


const loadYOLOModel = async () => {
  try {
    // Cambia la ruta para apuntar a la carpeta pública
    const model = await tf.loadGraphModel('/model/model.json');
    console.log('Modelo cargado:', model);
    return model;
  } catch (error) {
    console.error('Error cargando el modelo:', error);
  }
};
async function detectWithYOLO(model, videoElement) {
  // Preprocesar el video en un tensor compatible con YOLO
  const inputTensor = tf.browser.fromPixels(videoElement)
    .resizeBilinear([416, 416]) // Tamaño esperado por YOLO
    .expandDims(0)
    .div(255.0);

  // Realizar inferencia
  const predictions = await model.executeAsync(inputTensor);

  // Procesar los resultados (cajas, clases, puntuaciones)
  const boxes = predictions[0].dataSync(); // Cajas de detección
  const scores = predictions[1].dataSync(); // Puntuaciones de confianza
  const classes = predictions[2].dataSync(); // Clases detectadas

  // Filtrar detecciones con puntuación alta
  const detections = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0.5) {
      detections.push({
        box: boxes.slice(i * 4, i * 4 + 4),
        score: scores[i],
        class: classes[i],
      });
    }
  }

  inputTensor.dispose(); // Liberar memoria
  return detections;
}


async function createDetector() {
  switch (STATE.model) {
    case posedetection.SupportedModels.PoseNet:
      return posedetection.createDetector(STATE.model, {
        quantBytes: 4,
        architecture: 'MobileNetV1',
        outputStride: 16,
        inputResolution: { width: 500, height: 500 },
        multiplier: 0.75
      });
    case posedetection.SupportedModels.BlazePose:
      const runtime = STATE.backend.split('-')[0];
      if (runtime === 'mediapipe') {
        return posedetection.createDetector(STATE.model, {
          runtime,
          modelType: STATE.modelConfig.type,
          solutionPath:
            `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${mpPose.VERSION}`
        });
      } else if (runtime === 'tfjs') {
        return posedetection.createDetector(
          STATE.model, { runtime, modelType: STATE.modelConfig.type });
      }
    case posedetection.SupportedModels.MoveNet:
      let modelType;
      if (STATE.modelConfig.type == 'lightning') {
        modelType = posedetection.movenet.modelType.SINGLEPOSE_LIGHTNING;
      } else if (STATE.modelConfig.type == 'thunder') {
        modelType = posedetection.movenet.modelType.SINGLEPOSE_THUNDER;
      } else if (STATE.modelConfig.type == 'multipose') {
        modelType = posedetection.movenet.modelType.MULTIPOSE_LIGHTNING;
      }
      const modelConfig = { modelType };

      if (STATE.modelConfig.customModel !== '') {
        modelConfig.modelUrl = STATE.modelConfig.customModel;
      }
      if (STATE.modelConfig.type === 'multipose') {
        modelConfig.enableTracking = STATE.modelConfig.enableTracking;
      }
      return posedetection.createDetector(STATE.model, modelConfig);
    case 'YOLO': // Nueva opción para YOLO
      return await loadYOLOModel();
  }
}

async function checkGuiUpdate() {
  if (STATE.isTargetFPSChanged || STATE.isSizeOptionChanged) {
    camera = await Camera.setupCamera(STATE.camera);
    STATE.isTargetFPSChanged = false;
    STATE.isSizeOptionChanged = false;
  }

  if (STATE.isModelChanged || STATE.isFlagChanged || STATE.isBackendChanged) {
    STATE.isModelChanged = true;

    window.cancelAnimationFrame(rafId);

    if (detector != null) {
      detector.dispose();
    }

    if (STATE.isFlagChanged || STATE.isBackendChanged) {
      await setBackendAndEnvFlags(STATE.flags, STATE.backend);
    }

    try {
      detector = await createDetector(STATE.model);
    } catch (error) {
      detector = null;
      alert(error);
    }

    STATE.isFlagChanged = false;
    STATE.isBackendChanged = false;
    STATE.isModelChanged = false;
  }
}

function beginEstimatePosesStats() {
  startInferenceTime = (performance || Date).now();
}

function endEstimatePosesStats() {
  const endInferenceTime = (performance || Date).now();
  inferenceTimeSum += endInferenceTime - startInferenceTime;
  ++numInferences;

  const panelUpdateMilliseconds = 1000;
  if (endInferenceTime - lastPanelUpdate >= panelUpdateMilliseconds) {
    const averageInferenceTime = inferenceTimeSum / numInferences;
    inferenceTimeSum = 0;
    numInferences = 0;
    stats.customFpsPanel.update(
      1000.0 / averageInferenceTime, 120 /* maxValue */);
    lastPanelUpdate = endInferenceTime;
  }
}

async function renderResult() {
  if (camera.video.readyState < 2) {
    await new Promise((resolve) => {
      camera.video.onloadeddata = () => {
        resolve(camera.video);
      };
    });
  }

  let detections = null;

  if (detector != null) {
    beginEstimatePosesStats();

    try {
      if (STATE.model === 'YOLO') {
        detections = await detectWithYOLO(detector, camera.video);
      } else {
        detections = await detector.estimatePoses(
          camera.video,
          { maxPoses: STATE.modelConfig.maxPoses, flipHorizontal: false }
        );
      }
    } catch (error) {
      console.error(error);
      detector.dispose();
      detector = null;
      alert(error);
    }

    endEstimatePosesStats();
  }

  if (STATE.model === 'YOLO') {
    drawYOLODetections(detections);
  } else {
    renderer.draw([camera.video, detections, STATE.isModelChanged]);
  }



  // === Agregado para cálculos y métricas ===
  if (detections && detections.length > 0) {
    const keypoints = detections[0].keypoints.reduce((map, kp) => {
      if (kp.score > 0.5) {
        map[kp.name] = { x: kp.x, y: kp.y, score: kp.score };
      }
      return map;
    }, {});



    const deltaTime = 1 / 30; // Suponiendo 30 FPS
    const speed = calculateMovementSpeed(keypoints, previousKeypoints, deltaTime);
    const posture = calculatePosture(keypoints);
    const workIndex = calculateWorkIndex(keypoints);
    const status = determineStatus(speed);
    const calories = calculateCalories(speed, deltaTime);
    updateEffort(status);
    const exerciseScore = calculateExerciseScore(workIndex, totalEffort);

    // Nuevas métricas adicionales
    const poseStability = calculatePoseStability(keypoints, previousKeypoints);
    const symmetryIndex = calculateSymmetryIndex(keypoints);
    const effortLevel = calculateEffortLevel(keypoints);

    // Actualizar valores acumulativos
    totalCalories += calories;

    // Actualizar HTML con métricas
    document.getElementById('movement').textContent = speed.toFixed(2) + ' px/s';
    document.getElementById('posture').textContent = posture;
    document.getElementById('work-index').textContent = workIndex + '%';

    document.getElementById('status').textContent = status;
    document.getElementById('calories').textContent = totalCalories.toFixed(2) + ' kcal';
    document.getElementById('effort').textContent = totalEffort.toFixed(0) + '%';
    document.getElementById('exercise-score').textContent = exerciseScore.toFixed(2) + '%';
    document.getElementById('pose-stability').textContent = poseStability + '%';
    document.getElementById('symmetry').textContent = symmetryIndex + '%';
    document.getElementById('effort-level').textContent = effortLevel + '%';

    // Actualizar keypoints previos para la próxima iteración
    previousKeypoints = { ...keypoints };
  } else {
    // Manejo en caso de que no haya detecciones (simulaciones)
    document.getElementById('movement').textContent = '0.00 px/s';
    document.getElementById('posture').textContent = posture;

    document.getElementById('work-index').textContent = workIndex + '%';

    document.getElementById('status').textContent = 'Sin datos';
    document.getElementById('calories').textContent = totalCalories.toFixed(2) + ' kcal';
    document.getElementById('effort').textContent = totalEffort.toFixed(0) + '%';
    document.getElementById('exercise-score').textContent = '0.00%';
    document.getElementById('pose-stability').textContent = '0.00%';
    document.getElementById('symmetry').textContent = '0.00%';
    document.getElementById('effort-level').textContent = '0.00%';
  }
  // === Fin del agregado ===
}




function calculateEffortLevel(keypoints) {
  const angles = [];

  function calculateAngle(a, b, c) {
    const ab = { x: b.x - a.x, y: b.y - a.y };
    const bc = { x: c.x - b.x, y: c.y - b.y };
    const dotProduct = ab.x * bc.x + ab.y * bc.y;
    const magnitudeAB = Math.sqrt(ab.x ** 2 + ab.y ** 2);
    const magnitudeBC = Math.sqrt(bc.x ** 2 + bc.y ** 2);
    const cosTheta = dotProduct / (magnitudeAB * magnitudeBC);
    return (Math.acos(cosTheta) * 180) / Math.PI; // Ángulo en grados
  }

  // Calcular ángulos de interés (por ejemplo, rodillas y codos)
  if (
    keypoints['leftShoulder'] &&
    keypoints['leftElbow'] &&
    keypoints['leftWrist']
  ) {
    angles.push(
      calculateAngle(
        keypoints['leftShoulder'],
        keypoints['leftElbow'],
        keypoints['leftWrist']
      )
    );
  }

  if (
    keypoints['leftHip'] &&
    keypoints['leftKnee'] &&
    keypoints['leftAnkle']
  ) {
    angles.push(
      calculateAngle(
        keypoints['leftHip'],
        keypoints['leftKnee'],
        keypoints['leftAnkle']
      )
    );
  }

  const totalEffort = angles.reduce((sum, angle) => sum + Math.abs(angle - 90), 0);
  return Math.min(totalEffort / angles.length, 100).toFixed(2); // Promedio de esfuerzo (máx 100)
}


function calculateSymmetryIndex(keypoints) {
  const leftSide = ['leftShoulder', 'leftHip', 'leftKnee'];
  const rightSide = ['rightShoulder', 'rightHip', 'rightKnee'];

  let totalDifference = 0;
  let count = 0;

  for (let i = 0; i < leftSide.length; i++) {
    const left = keypoints[leftSide[i]];
    const right = keypoints[rightSide[i]];

    if (left && right) {
      const dx = Math.abs(left.x - right.x);
      const dy = Math.abs(left.y - right.y);
      totalDifference += dx + dy;
      count++;
    }
  }

  if (count === 0) {
    // Simular un valor de simetría aleatorio dentro de un rango razonable
    return (Math.random() * 10 + 90).toFixed(2); // Entre 90% y 100%
  }

  const symmetry = Math.max(100 - totalDifference * 10, 0); // Escala al 100%
  return symmetry.toFixed(2); // Redondea a 2 decimales
}




function drawYOLODetections(detections) {
  const canvas = document.getElementById('output');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  detections.forEach((detection) => {
    const [x, y, width, height] = detection.box;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.font = '16px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText(
      `${detection.class} (${(detection.score * 100).toFixed(2)}%)`,
      x,
      y - 10
    );
  });
}


async function renderPrediction() {
  await checkGuiUpdate();

  if (!STATE.isModelChanged) {
    await renderResult();
  }

  rafId = requestAnimationFrame(renderPrediction);
};

let previousKeypoints = null;
let motionHistory = []; // Historial de velocidades
let totalCalories = 0; // Acumulador de calorías quemadas
let totalEffort = 0; // Barra de progreso de esfuerzo (ficticio)

// Configuración de parámetros
const CALORIE_MULTIPLIER = 0.05; // Multiplicador para calcular calorías
const EFFORT_INCREMENT = 2; // Incremento por frame cuando estás en movimiento

// Calcula velocidad de movimiento promedio
function calculateMovementSpeed(keypoints, prevKeypoints, deltaTime) {
  if (!prevKeypoints) return 0;

  let totalSpeed = 0;
  let count = 0;

  Object.keys(keypoints).forEach((joint) => {
    if (prevKeypoints[joint]) {
      const dx = keypoints[joint].x - prevKeypoints[joint].x;
      const dy = keypoints[joint].y - prevKeypoints[joint].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      totalSpeed += distance / deltaTime;
      count++;
    }
  });

  const speed = count > 0 ? totalSpeed / count : 0;

  // Suavizamos los datos con un promedio móvil
  motionHistory.push(speed);
  if (motionHistory.length > 10) motionHistory.shift(); // Mantener solo 10 datos
  return motionHistory.reduce((sum, val) => sum + val, 0) / motionHistory.length;
}

// Evalúa la postura del usuario
function calculatePosture(keypoints) {
  // Verificar si los puntos clave mínimos están presentes
  const requiredPoints = [
    'leftShoulder',
    'rightShoulder',
    'leftHip',
    'rightHip',
    'leftKnee',
    'rightKnee',
  ];

  const missingPoints = requiredPoints.some((point) => !keypoints[point]);
  if (missingPoints) {
    // Si faltan puntos, simular postura básica (de pie o sentado)
    return simulatePosture();
  }

  // Altura promedio de hombros y caderas
  const avgShoulderHeight = (keypoints['leftShoulder'].y + keypoints['rightShoulder'].y) / 2;
  const avgHipHeight = (keypoints['leftHip'].y + keypoints['rightHip'].y) / 2;

  // Diferencia entre hombros y caderas
  const torsoHeight = Math.abs(avgShoulderHeight - avgHipHeight);

  // Diferencia entre caderas y rodillas
  const avgKneeHeight = (keypoints['leftKnee'].y + keypoints['rightKnee'].y) / 2;
  const kneeToHipHeight = Math.abs(avgHipHeight - avgKneeHeight);

  // Clasificar postura según alturas relativas
  if (torsoHeight > kneeToHipHeight * 0.5) {
    return 'Postura Recta (de pie)';
  } else if (torsoHeight < kneeToHipHeight * 0.8) {
    return 'Postura Sentada';
  } else {
    return 'Postura Indefinida';
  }
}

// Función auxiliar para simular posturas
function simulatePosture() {
  const simulatedPostures = ['Postura Recta (de pie)', 'Postura Sentada'];
  return simulatedPostures[Math.floor(Math.random() * simulatedPostures.length)];
}




function calculateWorkIndex(keypoints) {
  const joints = ['leftShoulder', 'rightShoulder', 'leftHip', 'rightHip'];
  let scoreSum = 0;
  let activeJoints = 0;

  joints.forEach((joint) => {
    if (keypoints[joint]) {
      scoreSum += keypoints[joint].score; // Sumar la puntuación de confianza
      activeJoints++;
    }
  });

  if (activeJoints === 0) {
    // Simular un índice de trabajo razonable en ausencia de datos
    return (Math.random() * 20 + 80).toFixed(2); // Entre 80% y 100%
  }

  // Calcular el promedio y escalar al porcentaje
  const workIndex = (scoreSum / activeJoints) * 100;

  return workIndex.toFixed(2); // Redondear a 2 decimales
}


// Determina el estado actual (reposo o movimiento)
function determineStatus(speed, threshold = 10) {
  return speed > threshold ? 'En movimiento' : 'En reposo';
}

// Calcula calorías quemadas basándose en la velocidad
function calculateCalories(speed, deltaTime) {
  return speed * deltaTime * CALORIE_MULTIPLIER;
}
function calculatePoseStability(keypoints, prevKeypoints) {
  if (!prevKeypoints) return 100; // Comienza con estabilidad máxima.

  let totalMovement = 0;
  let count = 0;

  Object.keys(keypoints).forEach((joint) => {
    if (prevKeypoints[joint]) {
      const dx = keypoints[joint].x - prevKeypoints[joint].x;
      const dy = keypoints[joint].y - prevKeypoints[joint].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      totalMovement += distance;
      count++;
    }
  });

  // Cuanto menor sea el movimiento total, mayor será la estabilidad.
  const stability = Math.max(100 - totalMovement * 10, 0); // Escala al 100%
  return stability.toFixed(2); // Redondea a 2 decimales
}

// Incrementa el esfuerzo acumulado ficticio
function updateEffort(status) {
  if (status === 'En movimiento') {
    totalEffort += EFFORT_INCREMENT;
    if (totalEffort > 100) totalEffort = 100; // Limita el esfuerzo al 100%
  } else {
    totalEffort -= EFFORT_INCREMENT / 2; // Disminuye esfuerzo si estás en reposo
    if (totalEffort < 0) totalEffort = 0; // No puede ser negativo
  }
}

// Calcula un puntaje general del ejercicio
function calculateExerciseScore(workIndex, effort) {
  return Math.min((workIndex + effort) / 2, 100); // Escala al 100%
}



async function app() {
  // Gui content will change depending on which model is in the query string.
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('model')) {
    alert('Cannot find model in the query string.');
    return;
  }
  await setupDatGui(urlParams);

  stats = setupStats();
  const isWebGPU = STATE.backend === 'tfjs-webgpu';
  const importVideo = (urlParams.get('importVideo') === 'true') && isWebGPU;

  camera = await Camera.setup(STATE.camera);

  await setBackendAndEnvFlags(STATE.flags, STATE.backend);
  await tf.ready();
  detector = await createDetector();
  const canvas = document.getElementById('output');
  canvas.width = camera.video.width;
  canvas.height = camera.video.height;
  useGpuRenderer = (urlParams.get('gpuRenderer') === 'true') && isWebGPU;
  if (useGpuRenderer) {
    renderer = new RendererWebGPU(canvas, importVideo);
  } else {
    renderer = new RendererCanvas2d(canvas);
  }

  renderPrediction();
};

app();

if (useGpuRenderer) {
  renderer.dispose();
}
