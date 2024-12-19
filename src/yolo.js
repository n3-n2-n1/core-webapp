import * as tf from '@tensorflow/tfjs';

let model;

export async function loadModel() {
  if (!model) {
    model = await tf.loadGraphModel('/path/to/yolo_model/model.json');
    console.log('Modelo YOLO cargado');
  }
  return model;
}

export async function detectObjects(videoElement) {
  const model = await loadModel();

  // Obtener un tensor de entrada desde el video
  const inputTensor = tf.browser.fromPixels(videoElement).resizeBilinear([416, 416]).expandDims(0).div(255.0);

  // Realizar la inferencia
  const predictions = await model.executeAsync(inputTensor);

  // Procesar las predicciones (depende del formato de salida del modelo)
  const boxes = predictions[0].dataSync();
  const scores = predictions[1].dataSync();
  const classes = predictions[2].dataSync();

  inputTensor.dispose(); // Liberar memoria

  // Filtrar resultados con una puntuación alta
  const detectedObjects = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0.5) { // Confianza mínima
      detectedObjects.push({
        box: boxes.slice(i * 4, i * 4 + 4),
        score: scores[i],
        class: classes[i],
      });
    }
  }
  return detectedObjects;
}
