// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@tensorflow-models/pose-detection/constants.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS = exports.COCO_CONNECTED_KEYPOINTS_PAIRS = exports.COCO_KEYPOINTS_BY_SIDE = exports.BLAZEPOSE_KEYPOINTS_BY_SIDE = exports.BLAZEPOSE_KEYPOINTS = exports.COCO_KEYPOINTS = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// Don't change the order. The order needs to be consistent with the model
// keypoint result list.
exports.COCO_KEYPOINTS = [
    'nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear', 'left_shoulder',
    'right_shoulder', 'left_elbow', 'right_elbow', 'left_wrist', 'right_wrist',
    'left_hip', 'right_hip', 'left_knee', 'right_knee', 'left_ankle',
    'right_ankle'
];
// Don't change the order. The order needs to be consistent with the model
// keypoint result list.
exports.BLAZEPOSE_KEYPOINTS = [
    'nose',
    'left_eye_inner',
    'left_eye',
    'left_eye_outer',
    'right_eye_inner',
    'right_eye',
    'right_eye_outer',
    'left_ear',
    'right_ear',
    'mouth_left',
    'mouth_right',
    'left_shoulder',
    'right_shoulder',
    'left_elbow',
    'right_elbow',
    'left_wrist',
    'right_wrist',
    'left_pinky',
    'right_pinky',
    'left_index',
    'right_index',
    'left_thumb',
    'right_thumb',
    'left_hip',
    'right_hip',
    'left_knee',
    'right_knee',
    'left_ankle',
    'right_ankle',
    'left_heel',
    'right_heel',
    'left_foot_index',
    'right_foot_index'
];
exports.BLAZEPOSE_KEYPOINTS_BY_SIDE = {
    left: [1, 2, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    right: [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
    middle: [0]
};
exports.COCO_KEYPOINTS_BY_SIDE = {
    left: [1, 3, 5, 7, 9, 11, 13, 15],
    right: [2, 4, 6, 8, 10, 12, 14, 16],
    middle: [0]
};
exports.COCO_CONNECTED_KEYPOINTS_PAIRS = [
    [0, 1], [0, 2], [1, 3], [2, 4], [5, 6], [5, 7], [5, 11], [6, 8], [6, 12],
    [7, 9], [8, 10], [11, 12], [11, 13], [12, 14], [13, 15], [14, 16]
];
exports.BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS = [
    [0, 1], [0, 4], [1, 2], [2, 3], [3, 7], [4, 5],
    [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [11, 23],
    [12, 14], [14, 16], [12, 24], [13, 15], [15, 17], [16, 18],
    [16, 20], [15, 17], [15, 19], [15, 21], [16, 22], [17, 19],
    [18, 20], [23, 25], [23, 24], [24, 26], [25, 27], [26, 28],
    [27, 29], [28, 30], [27, 31], [28, 32], [29, 31], [30, 32]
];

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/mask_util.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertMaskValue = exports.toTensorLossy = exports.toImageDataLossy = exports.toHTMLCanvasElementLossy = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
function toNumber(value) {
    return value instanceof SVGAnimatedLength ? value.baseVal.value : value;
}
/**
 * Converts input image to an HTMLCanvasElement. Note that converting
 * back from the output of this function to imageData or a Tensor will be lossy
 * due to premultiplied alpha color values. For more details please reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData#data_loss_due_to_browser_optimization
 * @param image Input image.
 *
 * @returns Converted HTMLCanvasElement.
 */
function toHTMLCanvasElementLossy(image) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    if (!(image instanceof tf.Tensor)) return [3 /*break*/, 2];
                    return [4 /*yield*/, tf.browser.toPixels(image, canvas)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    canvas.width = toNumber(image.width);
                    canvas.height = toNumber(image.height);
                    ctx = canvas.getContext('2d');
                    if (image instanceof ImageData) {
                        ctx.putImageData(image, 0, 0);
                    }
                    else {
                        ctx.drawImage(image, 0, 0);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/, canvas];
            }
        });
    });
}
exports.toHTMLCanvasElementLossy = toHTMLCanvasElementLossy;
/**
 * Converts input image to ImageData. Note that converting
 * from a CanvasImageSource will be lossy due to premultiplied alpha color
 * values. For more details please reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData#data_loss_due_to_browser_optimization
 * @param image Input image.
 *
 * @returns Converted ImageData.
 */
function toImageDataLossy(image) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, height, width, _b, canvas, ctx;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(image instanceof tf.Tensor)) return [3 /*break*/, 2];
                    _a = image.shape.slice(0, 2), height = _a[0], width = _a[1];
                    _b = ImageData.bind;
                    return [4 /*yield*/, tf.browser.toPixels(image)];
                case 1: return [2 /*return*/, new (_b.apply(ImageData, [void 0, _c.sent(), width, height]))()];
                case 2:
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    canvas.width = toNumber(image.width);
                    canvas.height = toNumber(image.height);
                    ctx.drawImage(image, 0, 0);
                    return [2 /*return*/, ctx.getImageData(0, 0, canvas.width, canvas.height)];
            }
        });
    });
}
exports.toImageDataLossy = toImageDataLossy;
/**
 * Converts input image to Tensor. Note that converting
 * from a CanvasImageSource will be lossy due to premultiplied alpha color
 * values. For more details please reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData#data_loss_due_to_browser_optimization
 * @param image Input image.
 *
 * @returns Converted Tensor.
 */
function toTensorLossy(image) {
    return __awaiter(this, void 0, void 0, function () {
        var pixelsInput, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(image instanceof SVGImageElement || image instanceof OffscreenCanvas)) return [3 /*break*/, 2];
                    return [4 /*yield*/, toHTMLCanvasElementLossy(image)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = image;
                    _b.label = 3;
                case 3:
                    pixelsInput = _a;
                    return [2 /*return*/, tf.browser.fromPixels(pixelsInput, 4)];
            }
        });
    });
}
exports.toTensorLossy = toTensorLossy;
function assertMaskValue(maskValue) {
    if (maskValue < 0 || maskValue >= 256) {
        throw new Error("Mask value must be in range [0, 255] but got ".concat(maskValue));
    }
    if (!Number.isInteger(maskValue)) {
        throw new Error("Mask value must be an integer but got ".concat(maskValue));
    }
}
exports.assertMaskValue = assertMaskValue;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/constants.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG = exports.DEFAULT_BLAZEPOSE_MODEL_CONFIG = void 0;
exports.DEFAULT_BLAZEPOSE_MODEL_CONFIG = {
    runtime: 'mediapipe',
    enableSmoothing: true,
    enableSegmentation: false,
    smoothSegmentation: true,
    modelType: 'full'
};
exports.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG = {
    maxPoses: 1,
    flipHorizontal: false
};

},{}],"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/detector_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEstimationConfig = exports.validateModelConfig = void 0;
var constants_1 = require("./constants");
function validateModelConfig(modelConfig) {
    if (modelConfig == null) {
        return __assign({}, constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG);
    }
    var config = __assign({}, modelConfig);
    config.runtime = 'mediapipe';
    if (config.enableSegmentation == null) {
        config.enableSegmentation =
            constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.enableSegmentation;
    }
    if (config.enableSmoothing == null) {
        config.enableSmoothing = constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.enableSmoothing;
    }
    if (config.smoothSegmentation == null) {
        config.smoothSegmentation =
            constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.smoothSegmentation;
    }
    if (config.modelType == null) {
        config.modelType = constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.modelType;
    }
    return config;
}
exports.validateModelConfig = validateModelConfig;
function validateEstimationConfig(estimationConfig) {
    if (estimationConfig == null) {
        return __assign({}, constants_1.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG);
    }
    var config = __assign({}, estimationConfig);
    if (config.maxPoses == null) {
        config.maxPoses = 1;
    }
    if (config.maxPoses <= 0) {
        throw new Error("Invalid maxPoses ".concat(config.maxPoses, ". Should be > 0."));
    }
    if (config.maxPoses > 1) {
        throw new Error('Multi-pose detection is not implemented yet. Please set maxPoses ' +
            'to 1.');
    }
    if (config.flipHorizontal == null) {
        config.flipHorizontal = constants_1.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG.flipHorizontal;
    }
    return config;
}
exports.validateEstimationConfig = validateEstimationConfig;

},{"./constants":"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/constants.js"}],"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/detector.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var pose = require("@mediapipe/pose");
var tf = require("@tensorflow/tfjs-core");
var constants_1 = require("../constants");
var mask_util_1 = require("../shared/calculators/mask_util");
var detector_utils_1 = require("./detector_utils");
var BlazePoseMediaPipeMask = /** @class */ (function () {
    function BlazePoseMediaPipeMask(mask) {
        this.mask = mask;
    }
    BlazePoseMediaPipeMask.prototype.toCanvasImageSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mask];
            });
        });
    };
    BlazePoseMediaPipeMask.prototype.toImageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, mask_util_1.toImageDataLossy)(this.mask)];
            });
        });
    };
    BlazePoseMediaPipeMask.prototype.toTensor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, mask_util_1.toTensorLossy)(this.mask)];
            });
        });
    };
    BlazePoseMediaPipeMask.prototype.getUnderlyingType = function () {
        return 'canvasimagesource';
    };
    return BlazePoseMediaPipeMask;
}());
function maskValueToLabel(maskValue) {
    (0, mask_util_1.assertMaskValue)(maskValue);
    return 'person';
}
/**
 * MediaPipe detector class.
 */
var BlazePoseMediaPipeDetector = /** @class */ (function () {
    // Should not be called outside.
    function BlazePoseMediaPipeDetector(config) {
        var _this = this;
        // This will be filled out by asynchronous calls to onResults. They will be
        // stable after `await send` is called on the pose solution.
        this.width = 0;
        this.height = 0;
        this.selfieMode = false;
        this.poseSolution = new pose.Pose({
            locateFile: function (path, base) {
                if (config.solutionPath) {
                    var solutionPath = config.solutionPath.replace(/\/+$/, '');
                    return "".concat(solutionPath, "/").concat(path);
                }
                return "".concat(base, "/").concat(path);
            }
        });
        var modelComplexity;
        switch (config.modelType) {
            case 'lite':
                modelComplexity = 0;
                break;
            case 'heavy':
                modelComplexity = 2;
                break;
            case 'full':
            default:
                modelComplexity = 1;
                break;
        }
        this.poseSolution.setOptions({
            modelComplexity: modelComplexity,
            smoothLandmarks: config.enableSmoothing,
            enableSegmentation: config.enableSegmentation,
            smoothSegmentation: config.smoothSegmentation,
            selfieMode: this.selfieMode,
        });
        this.poseSolution.onResults(function (results) {
            _this.height = results.image.height;
            _this.width = results.image.width;
            if (results.poseLandmarks == null) {
                _this.poses = [];
            }
            else {
                var pose_1 = _this.translateOutput(results.poseLandmarks, results.poseWorldLandmarks);
                if (results.segmentationMask) {
                    pose_1.segmentation = {
                        maskValueToLabel: maskValueToLabel,
                        mask: new BlazePoseMediaPipeMask(results.segmentationMask)
                    };
                }
                _this.poses = [pose_1];
            }
        });
    }
    BlazePoseMediaPipeDetector.prototype.translateOutput = function (pose, pose3D) {
        var _this = this;
        var output = {
            keypoints: pose.map(function (landmark, i) { return ({
                x: landmark.x * _this.width,
                y: landmark.y * _this.height,
                z: landmark.z,
                score: landmark.visibility,
                name: constants_1.BLAZEPOSE_KEYPOINTS[i]
            }); })
        };
        if (pose3D != null) {
            output.keypoints3D = pose3D.map(function (landmark, i) { return ({
                x: landmark.x,
                y: landmark.y,
                z: landmark.z,
                score: landmark.visibility,
                name: constants_1.BLAZEPOSE_KEYPOINTS[i]
            }); });
        }
        return output;
    };
    /**
     * Estimates poses for an image or video frame.
     *
     * It returns a single pose or multiple poses based on the maxPose parameter
     * from the `config`.
     *
     * @param image
     * ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement The input
     * image to feed through the network.
     *
     * @param config Optional.
     *       maxPoses: Optional. Max number of poses to estimate.
     *       When maxPoses = 1, a single pose is detected, it is usually much
     *       more efficient than maxPoses > 1. When maxPoses > 1, multiple poses
     *       are detected.
     *
     *       flipHorizontal: Optional. Default to false. When image data comes
     *       from camera, the result has to flip horizontally.
     *
     *       enableSmoothing: Optional. Default to true. Smooth pose landmarks
     *       coordinates and visibility scores to reduce jitter.
     *
     * @param timestamp Optional. In milliseconds. This is useful when image is
     *     a tensor, which doesn't have timestamp info. Or to override timestamp
     *     in a video.
     *
     * @return An array of `Pose`s.
     */
    BlazePoseMediaPipeDetector.prototype.estimatePoses = function (image, estimationConfig, timestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (estimationConfig && estimationConfig.flipHorizontal &&
                            (estimationConfig.flipHorizontal !== this.selfieMode)) {
                            this.selfieMode = estimationConfig.flipHorizontal;
                            this.poseSolution.setOptions({
                                selfieMode: this.selfieMode,
                            });
                        }
                        if (!(image instanceof tf.Tensor)) return [3 /*break*/, 2];
                        _b = ImageData.bind;
                        return [4 /*yield*/, tf.browser.toPixels(image)];
                    case 1:
                        _a = new (_b.apply(ImageData, [void 0, _c.sent(), image.shape[1], image.shape[0]]))();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = image;
                        _c.label = 3;
                    case 3:
                        // Cast to GL TexImageSource types.
                        image = _a;
                        return [4 /*yield*/, this.poseSolution.send({ image: image }, timestamp)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, this.poses];
                }
            });
        });
    };
    BlazePoseMediaPipeDetector.prototype.dispose = function () {
        this.poseSolution.close();
    };
    BlazePoseMediaPipeDetector.prototype.reset = function () {
        this.poseSolution.reset();
    };
    BlazePoseMediaPipeDetector.prototype.initialize = function () {
        return this.poseSolution.initialize();
    };
    return BlazePoseMediaPipeDetector;
}());
/**
 * Loads the MediaPipe solution.
 *
 * @param modelConfig ModelConfig object that contains parameters for
 * the BlazePose loading process. Please find more details of each parameters
 * in the documentation of the `BlazePoseMediaPipeModelConfig` interface.
 */
function load(modelConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var config, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = (0, detector_utils_1.validateModelConfig)(modelConfig);
                    result = new BlazePoseMediaPipeDetector(config);
                    return [4 /*yield*/, result.initialize()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.load = load;

},{"@mediapipe/pose":"node_modules/@mediapipe/pose/pose.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../shared/calculators/mask_util":"node_modules/@tensorflow-models/pose-detection/shared/calculators/mask_util.js","./detector_utils":"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/detector_utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/flags.js":[function(require,module,exports) {
"use strict";

var _tfjsCore = require("@tensorflow/tfjs-core");

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ENV = (0, _tfjsCore.env)();
/** Whether to keep intermediate tensors. */

ENV.registerFlag('KEEP_INTERMEDIATE_TENSORS', () => false, debugValue => {
  if (debugValue) {
    console.warn('Keep intermediate tensors is ON. This will print the values of all ' + 'intermediate tensors during model inference. Not all models ' + 'support this mode. For details, check e2e/benchmarks/ ' + 'model_config.js. This significantly impacts performance.');
  }
});
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow/tfjs-converter/dist/data/compiled_api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaverDef = exports.DataType = void 0;

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */

/** DataType enum. */
var DataType;
exports.DataType = DataType;

(function (DataType) {
  // Not a legal value for DataType.  Used to indicate a DataType field
  // has not been set.
  DataType[DataType["DT_INVALID"] = 0] = "DT_INVALID"; // Data types that all computation devices are expected to be
  // capable to support.

  DataType[DataType["DT_FLOAT"] = 1] = "DT_FLOAT";
  DataType[DataType["DT_DOUBLE"] = 2] = "DT_DOUBLE";
  DataType[DataType["DT_INT32"] = 3] = "DT_INT32";
  DataType[DataType["DT_UINT8"] = 4] = "DT_UINT8";
  DataType[DataType["DT_INT16"] = 5] = "DT_INT16";
  DataType[DataType["DT_INT8"] = 6] = "DT_INT8";
  DataType[DataType["DT_STRING"] = 7] = "DT_STRING";
  DataType[DataType["DT_COMPLEX64"] = 8] = "DT_COMPLEX64";
  DataType[DataType["DT_INT64"] = 9] = "DT_INT64";
  DataType[DataType["DT_BOOL"] = 10] = "DT_BOOL";
  DataType[DataType["DT_QINT8"] = 11] = "DT_QINT8";
  DataType[DataType["DT_QUINT8"] = 12] = "DT_QUINT8";
  DataType[DataType["DT_QINT32"] = 13] = "DT_QINT32";
  DataType[DataType["DT_BFLOAT16"] = 14] = "DT_BFLOAT16";
  DataType[DataType["DT_QINT16"] = 15] = "DT_QINT16";
  DataType[DataType["DT_QUINT16"] = 16] = "DT_QUINT16";
  DataType[DataType["DT_UINT16"] = 17] = "DT_UINT16";
  DataType[DataType["DT_COMPLEX128"] = 18] = "DT_COMPLEX128";
  DataType[DataType["DT_HALF"] = 19] = "DT_HALF";
  DataType[DataType["DT_RESOURCE"] = 20] = "DT_RESOURCE";
  DataType[DataType["DT_VARIANT"] = 21] = "DT_VARIANT";
  DataType[DataType["DT_UINT32"] = 22] = "DT_UINT32";
  DataType[DataType["DT_UINT64"] = 23] = "DT_UINT64"; // Do not use!  These are only for parameters.  Every enum above
  // should have a corresponding value below (verified by types_test).

  DataType[DataType["DT_FLOAT_REF"] = 101] = "DT_FLOAT_REF";
  DataType[DataType["DT_DOUBLE_REF"] = 102] = "DT_DOUBLE_REF";
  DataType[DataType["DT_INT32_REF"] = 103] = "DT_INT32_REF";
  DataType[DataType["DT_UINT8_REF"] = 104] = "DT_UINT8_REF";
  DataType[DataType["DT_INT16_REF"] = 105] = "DT_INT16_REF";
  DataType[DataType["DT_INT8_REF"] = 106] = "DT_INT8_REF";
  DataType[DataType["DT_STRING_REF"] = 107] = "DT_STRING_REF";
  DataType[DataType["DT_COMPLEX64_REF"] = 108] = "DT_COMPLEX64_REF";
  DataType[DataType["DT_INT64_REF"] = 109] = "DT_INT64_REF";
  DataType[DataType["DT_BOOL_REF"] = 110] = "DT_BOOL_REF";
  DataType[DataType["DT_QINT8_REF"] = 111] = "DT_QINT8_REF";
  DataType[DataType["DT_QUINT8_REF"] = 112] = "DT_QUINT8_REF";
  DataType[DataType["DT_QINT32_REF"] = 113] = "DT_QINT32_REF";
  DataType[DataType["DT_BFLOAT16_REF"] = 114] = "DT_BFLOAT16_REF";
  DataType[DataType["DT_QINT16_REF"] = 115] = "DT_QINT16_REF";
  DataType[DataType["DT_QUINT16_REF"] = 116] = "DT_QUINT16_REF";
  DataType[DataType["DT_UINT16_REF"] = 117] = "DT_UINT16_REF";
  DataType[DataType["DT_COMPLEX128_REF"] = 118] = "DT_COMPLEX128_REF";
  DataType[DataType["DT_HALF_REF"] = 119] = "DT_HALF_REF";
  DataType[DataType["DT_RESOURCE_REF"] = 120] = "DT_RESOURCE_REF";
  DataType[DataType["DT_VARIANT_REF"] = 121] = "DT_VARIANT_REF";
  DataType[DataType["DT_UINT32_REF"] = 122] = "DT_UINT32_REF";
  DataType[DataType["DT_UINT64_REF"] = 123] = "DT_UINT64_REF";
})(DataType || (exports.DataType = DataType = {}));

var SaverDef;
exports.SaverDef = SaverDef;

(function (SaverDef) {
  /** CheckpointFormatVersion enum. */
  let CheckpointFormatVersion;

  (function (CheckpointFormatVersion) {
    CheckpointFormatVersion[CheckpointFormatVersion["LEGACY"] = 0] = "LEGACY";
    CheckpointFormatVersion[CheckpointFormatVersion["V1"] = 1] = "V1";
    CheckpointFormatVersion[CheckpointFormatVersion["V2"] = 2] = "V2";
  })(CheckpointFormatVersion = SaverDef.CheckpointFormatVersion || (SaverDef.CheckpointFormatVersion = {}));
})(SaverDef || (exports.SaverDef = SaverDef = {}));
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerOp = registerOp;
exports.getRegisteredOp = getRegisteredOp;
exports.deregisterOp = deregisterOp;

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const CUSTOM_OPS = {};
/**
 * Register an Op for graph model executor. This allows you to register
 * TensorFlow custom op or override existing op.
 *
 * Here is an example of registering a new MatMul Op.
 * ```js
 * const customMatmul = (node) =>
 *    tf.matMul(
 *        node.inputs[0], node.inputs[1],
 *        node.attrs['transpose_a'], node.attrs['transpose_b']);
 *
 * tf.registerOp('MatMul', customMatmul);
 * ```
 * The inputs and attrs of the node object are based on the TensorFlow op
 * registry.
 *
 * @param name The Tensorflow Op name.
 * @param opFunc An op function which is called with the current graph node
 * during execution and needs to return a tensor or a list of tensors. The node
 * has the following attributes:
 *    - attr: A map from attribute name to its value
 *    - inputs: A list of input tensors
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */

function registerOp(name, opFunc) {
  const opMapper = {
    tfOpName: name,
    category: 'custom',
    inputs: [],
    attrs: [],
    customExecutor: opFunc
  };
  CUSTOM_OPS[name] = opMapper;
}
/**
 * Retrieve the OpMapper object for the registered op.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */


function getRegisteredOp(name) {
  return CUSTOM_OPS[name];
}
/**
 * Deregister the Op for graph model executor.
 *
 * @param name The Tensorflow Op name.
 *
 * @doc {heading: 'Models', subheading: 'Op Registry'}
 */


function deregisterOp(name) {
  delete CUSTOM_OPS[name];
}
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParamValue = getParamValue;
exports.getTensor = getTensor;
exports.getTensorsForCurrentContext = getTensorsForCurrentContext;
exports.getNodeNameAndIndex = getNodeNameAndIndex;
exports.parseNodeName = parseNodeName;
exports.split = split;
exports.getPadding = getPadding;
exports.cloneTensor = cloneTensor;

var _tfjsCore = require("@tensorflow/tfjs-core");

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function getParamValue(paramName, node, tensorMap, context, resourceManager) {
  const inputParam = node.inputParams[paramName];

  if (inputParam && inputParam.inputIndexStart !== undefined) {
    const start = inputParam.inputIndexStart;
    const end = inputParam.inputIndexEnd === 0 ? undefined : inputParam.inputIndexEnd === undefined ? start + 1 : inputParam.inputIndexEnd;
    const shiftedStart = start < 0 ? node.inputNames.length + start : start;

    if (inputParam.type === 'tensor') {
      return getTensor(node.inputNames[shiftedStart], tensorMap, context, resourceManager);
    }

    if (inputParam.type === 'tensors') {
      // TODO(mattSoulanille): This filters out NoOp nodes during execution, but
      // these should really never be in the execution graph in the first place.
      // They're necessary for ordering the graph, but should not be visible
      // during execution. Perhaps have different sets of children, one for
      // control dependencies and another for real dependencies.
      const inputs = node.inputs.slice(start, end);
      const inputNames = node.inputNames.slice(start, end).filter((_name, index) => {
        var _a;

        return ((_a = inputs[index]) === null || _a === void 0 ? void 0 : _a.op) !== 'NoOp';
      });
      return inputNames.map(name => getTensor(name, tensorMap, context, resourceManager));
    }

    const tensor = getTensor(node.inputNames[shiftedStart], tensorMap, context, resourceManager);
    const data = tensor.dataSync();
    return inputParam.type === 'number' ? data[0] : _tfjsCore.util.toNestedArray(tensor.shape, data);
  }

  const attrParam = node.attrParams[paramName];
  return attrParam && attrParam.value;
}
/**
 * Retrieve the tensor from tensorsMap based on input name.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */


function getTensor(name, tensorsMap, context, resourceManager) {
  const [nodeName, index] = parseNodeName(name, context);

  if (resourceManager != null) {
    const tensor = resourceManager.getHashTableHandleByName(nodeName);

    if (tensor != null) {
      return tensor;
    }
  }

  const contextId = context.currentContextIds.find(contextId => {
    return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
  });
  return contextId !== undefined ? tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] : undefined;
}
/**
 * Retrieve the tensors based on input name for current context.
 * @param name Node input name
 * @param tensorsMap Tensors map keyed by the node
 */


function getTensorsForCurrentContext(name, tensorsMap, context) {
  return tensorsMap[getNodeNameWithContextId(name, context.currentContextId)];
}
/**
 * Returns the node name, outputName and index from the Node input name.
 * @param inputName The input name of the node, in format of
 * node_name:output_index, i.e. MatMul:0, if the output_index is not set, it is
 * default to 0.
 * If the input name contains output name i.e. StringSplit:indices:0, it will
 * return ['StringSplit', 0, 'indices'].
 */


function getNodeNameAndIndex(inputName, context) {
  const [nodeName, index, outputName] = parseNodeName(inputName, context);
  return [getNodeNameWithContextId(nodeName, context && context.currentContextId), index, outputName];
}

function getNodeNameWithContextId(name, contextId) {
  return !!contextId ? `${name}-${contextId}` : name;
}

function parseNodeName(name, context) {
  if (name === '') {
    return ['', 0, undefined];
  }

  const isCacheEnabled = context != null && context.parseNodeNameCache != null;

  if (isCacheEnabled) {
    const cachedResult = context.parseNodeNameCache.get(name);

    if (cachedResult != null) {
      return cachedResult;
    }
  }

  const parts = name.split(':');
  let result;

  if (parts.length === 1) {
    result = [name, 0, undefined];
  } else {
    const nodeName = parts[0];
    const outputName = parts.length === 3 ? parts[1] : undefined;
    const index = Number(parts[parts.length - 1]);
    result = [nodeName, index, outputName];
  }

  if (isCacheEnabled) {
    context.parseNodeNameCache.set(name, result);
  }

  return result;
}

function split(arr, size) {
  const res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
}

function getPadding(node, tensorMap, context) {
  let pad = getParamValue('pad', node, tensorMap, context);

  if (pad === 'explicit') {
    // This is 1d array, we need to convert it to 2d array
    pad = getParamValue('explicitPaddings', node, tensorMap, context);
    const explicitPadding = [[0, 0], [0, 0], [0, 0], [0, 0]];

    for (let i = 0; i < 4; i++) {
      explicitPadding[i][0] = pad[i * 2];
      explicitPadding[i][1] = pad[i * 2 + 1];
    }

    return explicitPadding;
  }

  return pad;
}
/**
 *  Reuse the tensor if it is marked as keep, otherwise clone the tensor to
 *  avoid disposal. This is important for TensorArray and TensorList ops, since
 *  internally they use a tensor as the id for TensorArray and TensorList, and
 * to simplify lookup, they also use Tensor.id as the key to the internal map.
 * These id tensors have been marked as kept in the backend, we need avoid clone
 * them in order to create new Tensor.id.
 * @param tensor
 */


function cloneTensor(tensor) {
  return tensor.kept ? tensor : (0, _tfjsCore.clone)(tensor);
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Add',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AddV2',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AddN',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'BiasAdd',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sub',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'RealDiv',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Div',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'DivNoNan',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FloorDiv',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Mul',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Maximum',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Minimum',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Pow',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SquaredDifference',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Mod',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FloorMod',
  'category': 'arithmetic',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Abs',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Acos',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Asin',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atan2',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'y',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Ceil',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ClipByValue',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'clipValueMin',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'clipValueMax',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Complex',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'real',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'imag',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ComplexAbs',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Cos',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Cosh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Elu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Exp',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Floor',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Log',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Imag',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'outputType',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Neg',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Real',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'outputType',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Prelu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'alpha',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Relu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Relu6',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Selu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sigmoid',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sin',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sinh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sqrt',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Rsqrt',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Square',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tanh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Sign',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Round',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Expm1',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Log1p',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Reciprocal',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Softplus',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Asinh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Acosh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Atanh',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Erf',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LeakyRelu',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'alpha',
    'name': 'alpha',
    'type': 'number',
    'defaultValue': 0.2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IsNan',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IsFinite',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IsInf',
  'category': 'basic_math',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/control.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'EmptyTensorList',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 1,
    'name': 'maxNumElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LoopCond',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'pred',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Switch',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'pred',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Merge',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Enter',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'frame_name',
    'name': 'frameName',
    'type': 'string'
  }, {
    'tfName': 'is_constant',
    'name': 'isConstant',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Exit',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'NextIteration',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'size',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'dynamic_size',
    'name': 'dynamicSize',
    'type': 'bool'
  }, {
    'tfName': 'clear_after_read',
    'name': 'clearAfterRead',
    'type': 'bool'
  }, {
    'tfName': 'identical_element_shapes',
    'name': 'identicalElementShapes',
    'type': 'bool'
  }, {
    'tfName': 'tensor_array_name',
    'name': 'name',
    'type': 'string'
  }]
}, {
  'tfOpName': 'TensorArrayWriteV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayReadV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArrayGatherV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }]
}, {
  'tfOpName': 'TensorArrayScatterV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorArrayConcatV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'element_shape_except0',
    'name': 'elementShapeExcept0',
    'type': 'shape',
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorArraySplitV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'lengths',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'flowIn',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorArraySizeV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'flowIn',
    'type': 'number'
  }]
}, {
  'tfOpName': 'TensorArrayCloseV3',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorArrayId',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'StatelessIf',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'cond',
    'type': 'tensor'
  }, {
    'start': 1,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'then_branch',
    'name': 'thenBranch',
    'type': 'func'
  }, {
    'tfName': 'else_branch',
    'name': 'elseBranch',
    'type': 'func'
  }]
}, {
  'tfOpName': 'If',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'cond',
    'type': 'tensor'
  }, {
    'start': 1,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'then_branch',
    'name': 'thenBranch',
    'type': 'func'
  }, {
    'tfName': 'else_branch',
    'name': 'elseBranch',
    'type': 'func'
  }]
}, {
  'tfOpName': 'StatelessWhile',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'cond',
    'name': 'cond',
    'type': 'func'
  }, {
    'tfName': 'body',
    'name': 'body',
    'type': 'func'
  }]
}, {
  'tfOpName': 'While',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'cond',
    'name': 'cond',
    'type': 'func'
  }, {
    'tfName': 'body',
    'name': 'body',
    'type': 'func'
  }]
}, {
  'tfOpName': 'TensorListScatter',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListScatterV2',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 3,
    'name': 'numElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListGather',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListGetItem',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListSetItem',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'index',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListReserve',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 1,
    'name': 'numElements',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListFromTensor',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListStack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }, {
    'tfName': 'num_elements',
    'name': 'numElements',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListSplit',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'start': 2,
    'name': 'lengths',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListConcat',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListConcatV2',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_shape',
    'name': 'elementShape',
    'type': 'shape'
  }, {
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListPopBack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'elementShape',
    'type': 'shape'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListPushBack',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'element_dtype',
    'name': 'elementDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TensorListLength',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'TensorListResize',
  'category': 'control',
  'inputs': [{
    'start': 0,
    'name': 'tensorListId',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'AvgPool',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPool',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': [],
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPoolWithArgmax',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'include_batch_in_index',
    'name': 'includeBatchInIndex',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'AvgPool3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MaxPool3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'ksize',
    'name': 'kernelSize',
    'type': 'number[]'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Conv1D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'stride',
    'name': 'stride',
    'type': 'number'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NWC'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'dilation',
    'name': 'dilation',
    'type': 'number',
    'defaultValue': 1
  }]
}, {
  'tfOpName': 'Conv2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'useCudnnOnGpu',
    'name': 'useCudnnOnGpu',
    'type': 'bool'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': '_FusedConv2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'use_cudnn_on_gpu',
    'name': 'useCudnnOnGpu',
    'type': 'bool',
    'defaultValue': true
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'defaultValue': [1, 1, 1, 1]
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.0001
  }, {
    'tfName': 'leakyrelu_alpha',
    'name': 'leakyreluAlpha',
    'type': 'number',
    'defaultValue': 0.2
  }]
}, {
  'tfOpName': 'Conv2DBackpropInput',
  'category': 'convolution',
  'inputs': [{
    'start': 2,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 0,
    'name': 'outputShape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'notSupported': true
  }]
}, {
  'tfOpName': 'DepthwiseConv2d',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'DepthwiseConv2dNative',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'FusedDepthwiseConv2dNative',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]',
    'defaultValue': [1, 1, 1, 1]
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'explicit_paddings',
    'name': 'explicitPaddings',
    'type': 'number[]',
    'defaultValue': []
  }]
}, {
  'tfOpName': 'Conv3D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'defaultValue': 'NHWC'
  }, {
    'tfName': 'dilations',
    'name': 'dilations',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Dilation2D',
  'category': 'convolution',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'filter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'strides',
    'name': 'strides',
    'type': 'number[]'
  }, {
    'tfName': 'rates',
    'name': 'dilations',
    'type': 'number[]'
  }, {
    'tfName': 'padding',
    'name': 'pad',
    'type': 'string'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/creation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Fill',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }, {
    'start': 1,
    'name': 'value',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LinSpace',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'start',
    'type': 'number'
  }, {
    'start': 1,
    'name': 'stop',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'num',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'OneHot',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'depth',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'onValue',
    'type': 'number',
    'defaultValue': 1
  }, {
    'start': 3,
    'name': 'offValue',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Ones',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'OnesLike',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'RandomStandardNormal',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'RandomUniform',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'minval',
    'name': 'minval',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'maxval',
    'name': 'maxval',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'RandomUniformInt',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'minval',
    'name': 'minval',
    'type': 'number'
  }, {
    'tfName': 'maxval',
    'name': 'maxval',
    'type': 'number'
  }, {
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }]
}, {
  'tfOpName': 'Range',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'start',
    'type': 'number'
  }, {
    'start': 1,
    'name': 'stop',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'step',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'Tidx',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'TruncatedNormal',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'means',
    'name': 'mean',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'stddev',
    'name': 'stdDev',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number'
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'T',
    'name': 'T',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Zeros',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'ZerosLike',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Multinomial',
  'category': 'creation',
  'inputs': [{
    'start': 0,
    'name': 'logits',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numSamples',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'seed',
    'name': 'seed',
    'type': 'number'
  }, {
    'tfName': 'seed2',
    'name': 'seed2',
    'type': 'number'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }, {
    'tfName': 'output_dtype',
    'name': 'output_dtype',
    'type': 'dtype'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'NonMaxSuppressionV2',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV3',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV4',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'T_threshold',
    'name': 'threshold',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'pad_to_max_output_size',
    'name': 'padToMaxOutputSize',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'NonMaxSuppressionV5',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scores',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'maxOutputSize',
    'type': 'number'
  }, {
    'start': 3,
    'name': 'iouThreshold',
    'type': 'number'
  }, {
    'start': 4,
    'name': 'scoreThreshold',
    'type': 'number'
  }, {
    'start': 5,
    'name': 'softNmsSigma',
    'type': 'number'
  }]
}, {
  'tfOpName': 'Where',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ListDiff',
  'category': 'dynamic',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'y',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'LowerBound',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'sortedSequence',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'TopKV2',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'k',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'sorted',
    'name': 'sorted',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'UpperBound',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'sortedSequence',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Unique',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'UniqueV2',
  'category': 'evaluation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/graph.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'PlaceholderWithDefault',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'default',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'shape',
    'name': 'shape',
    'type': 'shape'
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Placeholder',
  'category': 'graph',
  'attrs': [{
    'tfName': 'shape',
    'name': 'shape',
    'type': 'shape'
  }, {
    'tfName': 'dtype',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'Const',
  'category': 'graph'
}, {
  'tfOpName': 'Identity',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'IdentityN',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'x',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Snapshot',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Rank',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Size',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'Shape',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'ShapeN',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'x',
    'type': 'tensors'
  }]
}, {
  'tfOpName': 'Print',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'data',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'message',
    'name': 'message',
    'type': 'string'
  }, {
    'tfName': 'first_n',
    'name': 'firstN',
    'type': 'number',
    'notSupported': true
  }, {
    'tfName': 'summarize',
    'name': 'summarize',
    'type': 'number',
    'defaultValue': 3
  }]
}, {
  'tfOpName': 'NoOp',
  'category': 'graph',
  'inputs': []
}, {
  'tfOpName': 'StopGradient',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'FakeQuantWithMinMaxVars',
  'category': 'graph',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'min',
    'name': 'min',
    'type': 'number'
  }, {
    'tfName': 'max',
    'name': 'max',
    'type': 'number'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'HashTable',
  'category': 'hash_table',
  'inputs': [],
  'attrs': [{
    'tfName': 'shared_name',
    'name': 'sharedName',
    'type': 'string'
  }, {
    'tfName': 'use_node_name_sharing',
    'name': 'useNodeNameSharing',
    'type': 'bool'
  }, {
    'tfName': 'key_dtype',
    'name': 'keyDType',
    'type': 'dtype'
  }, {
    'tfName': 'value_dtype',
    'name': 'valueDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'HashTableV2',
  'category': 'hash_table',
  'inputs': [],
  'attrs': [{
    'tfName': 'shared_name',
    'name': 'sharedName',
    'type': 'string'
  }, {
    'tfName': 'use_node_name_sharing',
    'name': 'useNodeNameSharing',
    'type': 'bool'
  }, {
    'tfName': 'key_dtype',
    'name': 'keyDType',
    'type': 'dtype'
  }, {
    'tfName': 'value_dtype',
    'name': 'valueDType',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'LookupTableImport',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableImportV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableFind',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableFindV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'Tin',
    'name': 'tIn',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'Tout',
    'name': 'tOut',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LookupTableSize',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'LookupTableSizeV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'InitializeTable',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'InitializeTableV2',
  'category': 'hash_table',
  'inputs': [{
    'start': 0,
    'name': 'tableHandle',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'keys',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'ResizeBilinear',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'align_corners',
    'name': 'alignCorners',
    'type': 'bool'
  }, {
    'tfName': 'half_pixel_centers',
    'name': 'halfPixelCenters',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'ResizeNearestNeighbor',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'align_corners',
    'name': 'alignCorners',
    'type': 'bool'
  }, {
    'tfName': 'half_pixel_centers',
    'name': 'halfPixelCenters',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'CropAndResize',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'image',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'boxes',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'boxInd',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'cropSize',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'method',
    'name': 'method',
    'type': 'string'
  }, {
    'tfName': 'extrapolation_value',
    'name': 'extrapolationValue',
    'type': 'number'
  }]
}, {
  'tfOpName': 'ImageProjectiveTransformV3',
  'category': 'image',
  'inputs': [{
    'start': 0,
    'name': 'images',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'transforms',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'outputShape',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'fillValue',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'interpolation',
    'name': 'interpolation',
    'type': 'string'
  }, {
    'tfName': 'fill_mode',
    'name': 'fillMode',
    'type': 'string'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/logical.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Equal',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'NotEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Greater',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'GreaterEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Less',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LessEqual',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalAnd',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalNot',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LogicalOr',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Select',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SelectV2',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'condition',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'BitwiseAnd',
  'category': 'logical',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'y',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': '_FusedMatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }, {
    'start': 2,
    'end': 0,
    'name': 'args',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'num_args',
    'name': 'numArgs',
    'type': 'number'
  }, {
    'tfName': 'fused_ops',
    'name': 'fusedOps',
    'type': 'string[]',
    'defaultValue': []
  }, {
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.0001
  }, {
    'tfName': 'transpose_a',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'transpose_b',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'leakyrelu_alpha',
    'name': 'leakyreluAlpha',
    'type': 'number',
    'defaultValue': 0.2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'MatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'transpose_a',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'transpose_b',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'BatchMatMul',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'adj_x',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'adj_y',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'BatchMatMulV2',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'b',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'adj_x',
    'name': 'transposeA',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'adj_y',
    'name': 'transposeB',
    'type': 'bool',
    'defaultValue': false
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Transpose',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'perm',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Einsum',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'equation',
    'name': 'equation',
    'type': 'string'
  }, {
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'MatrixBandPart',
  'category': 'matrices',
  'inputs': [{
    'start': 0,
    'name': 'a',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numLower',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numUpper',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'EuclideanNorm',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool',
    'defaultValue': false
  }]
}, {
  'tfOpName': 'FusedBatchNorm',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FusedBatchNormV2',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'FusedBatchNormV3',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'scale',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'offset',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'mean',
    'type': 'tensor'
  }, {
    'start': 4,
    'name': 'variance',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'epsilon',
    'name': 'epsilon',
    'type': 'number',
    'defaultValue': 0.001
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string',
    'notSupported': true
  }]
}, {
  'tfOpName': 'LRN',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'depth_radius',
    'name': 'radius',
    'type': 'number',
    'defaultValue': 5
  }, {
    'tfName': 'bias',
    'name': 'bias',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'alpha',
    'name': 'alpha',
    'type': 'number',
    'defaultValue': 1
  }, {
    'tfName': 'beta',
    'name': 'beta',
    'type': 'number',
    'defaultValue': 0.5
  }]
}, {
  'tfOpName': 'Softmax',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'LogSoftmax',
  'category': 'normalization',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Bincount',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'weights',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'DenseBincount',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'size',
    'type': 'number'
  }, {
    'start': 2,
    'name': 'weights',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'binary_output',
    'name': 'binaryOutput',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Max',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Mean',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Min',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Sum',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'All',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Any',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'ArgMax',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'ArgMin',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'Prod',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'keep_dims',
    'name': 'keepDims',
    'type': 'bool'
  }, {
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Cumprod',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'exclusive',
    'name': 'exclusive',
    'type': 'bool'
  }, {
    'tfName': 'reverse',
    'name': 'reverse',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'Cumsum',
  'category': 'reduction',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'exclusive',
    'name': 'exclusive',
    'type': 'bool'
  }, {
    'tfName': 'reverse',
    'name': 'reverse',
    'type': 'bool'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'ConcatV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'end': -1,
    'name': 'tensors',
    'type': 'tensors'
  }, {
    'start': -1,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }]
}, {
  'tfOpName': 'Concat',
  'category': 'slice_join',
  'inputs': [{
    'start': 1,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }, {
    'start': 0,
    'name': 'axis',
    'type': 'number'
  }],
  'attrs': [{
    'tfName': 'N',
    'name': 'n',
    'type': 'number',
    'defaultValue': 2
  }]
}, {
  'tfOpName': 'GatherV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }],
  'attrs': [{
    'tfName': 'batch_dims',
    'name': 'batchDims',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Gather',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'validate_indices',
    'name': 'validateIndices',
    'type': 'bool',
    'notSupported': true
  }]
}, {
  'tfOpName': 'Reverse',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'dims',
    'type': 'bool[]'
  }]
}, {
  'tfOpName': 'ReverseV2',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Slice',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'begin',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'size',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'StridedSlice',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'begin',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'end',
    'type': 'number[]'
  }, {
    'start': 3,
    'name': 'strides',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'begin_mask',
    'name': 'beginMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'end_mask',
    'name': 'endMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'new_axis_mask',
    'name': 'newAxisMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'ellipsis_mask',
    'name': 'ellipsisMask',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'shrink_axis_mask',
    'name': 'shrinkAxisMask',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Pack',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'end': 0,
    'name': 'tensors',
    'type': 'tensors'
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Unpack',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'axis',
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }, {
    'tfName': 'num',
    'name': 'num',
    'type': 'number',
    'defaultValue': 0,
    'notSupported': true
  }]
}, {
  'tfOpName': 'Tile',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'reps',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Split',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }, {
    'start': 1,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'num_split',
    'name': 'numOrSizeSplits',
    'type': 'number',
    'defaultValue': 1
  }]
}, {
  'tfOpName': 'SplitV',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'numOrSizeSplits',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'axis',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'ScatterNd',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'shape',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'GatherNd',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseToDense',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'sparseIndices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'outputShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'sparseValues',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'defaultValue',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'validate_indices',
    'name': 'validateIndices',
    'type': 'bool',
    'defaultValue': false,
    'notSupported': true
  }]
}, {
  'tfOpName': 'TensorScatterUpdate',
  'category': 'slice_join',
  'inputs': [{
    'start': 0,
    'name': 'tensor',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'values',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'SparseFillEmptyRows',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'values',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'denseShape',
    'type': 'tensor'
  }, {
    'start': 3,
    'name': 'defaultValue',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseReshape',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'inputIndices',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'inputShape',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'newShape',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'T',
    'name': 'dtype',
    'type': 'dtype',
    'notSupported': true
  }]
}, {
  'tfOpName': 'SparseSegmentMean',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'segmentIds',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'SparseSegmentSum',
  'category': 'sparse',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'indices',
    'type': 'tensor'
  }, {
    'start': 2,
    'name': 'segmentIds',
    'type': 'tensor'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'FFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'IFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }]
}, {
  'tfOpName': 'RFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'fft_length',
    'type': 'number',
    'notSupported': true
  }]
}, {
  'tfOpName': 'IRFFT',
  'category': 'spectral',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'fft_length',
    'type': 'number',
    'notSupported': true
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'StaticRegexReplace',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'pattern',
    'name': 'pattern',
    'type': 'string'
  }, {
    'tfName': 'rewrite',
    'name': 'rewrite',
    'type': 'string'
  }, {
    'tfName': 'replace_global',
    'name': 'replaceGlobal',
    'type': 'bool'
  }]
}, {
  'tfOpName': 'StringNGrams',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'data',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'dataSplits',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'separator',
    'name': 'separator',
    'type': 'string'
  }, {
    'tfName': 'ngram_widths',
    'name': 'nGramWidths',
    'type': 'number[]'
  }, {
    'tfName': 'left_pad',
    'name': 'leftPad',
    'type': 'string'
  }, {
    'tfName': 'right_pad',
    'name': 'rightPad',
    'type': 'string'
  }, {
    'tfName': 'pad_width',
    'name': 'padWidth',
    'type': 'number'
  }, {
    'tfName': 'preserve_short_sequences',
    'name': 'preserveShortSequences',
    'type': 'bool'
  }],
  'outputs': ['ngrams', 'ngrams_splits']
}, {
  'tfOpName': 'StringSplit',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'delimiter',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'skip_empty',
    'name': 'skipEmpty',
    'type': 'bool'
  }],
  'outputs': ['indices', 'values', 'shape']
}, {
  'tfOpName': 'StringToHashBucketFast',
  'category': 'string',
  'inputs': [{
    'start': 0,
    'name': 'input',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'num_buckets',
    'name': 'numBuckets',
    'type': 'number'
  }]
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.json = void 0;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const json = [{
  'tfOpName': 'Cast',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'SrcT',
    'name': 'sdtype',
    'type': 'dtype',
    'notSupported': true
  }, {
    'tfName': 'DstT',
    'name': 'dtype',
    'type': 'dtype'
  }]
}, {
  'tfOpName': 'ExpandDims',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'axis',
    'type': 'number'
  }]
}, {
  'tfOpName': 'MirrorPad',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'mode',
    'name': 'mode',
    'type': 'string'
  }]
}, {
  'tfOpName': 'Pad',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }],
  'attrs': [{
    'tfName': 'constant_value',
    'name': 'constantValue',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'PadV2',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'padding',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'constantValue',
    'type': 'number',
    'defaultValue': 0
  }]
}, {
  'tfOpName': 'Reshape',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'shape',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'EnsureShape',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'shape',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'Squeeze',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'axis',
    'tfDeprecatedName': 'squeeze_dims',
    'name': 'axis',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'SpaceToBatchND',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'blockShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'paddings',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'BatchToSpaceND',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'blockShape',
    'type': 'number[]'
  }, {
    'start': 2,
    'name': 'crops',
    'type': 'number[]'
  }]
}, {
  'tfOpName': 'DepthToSpace',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }],
  'attrs': [{
    'tfName': 'block_size',
    'name': 'blockSize',
    'type': 'number'
  }, {
    'tfName': 'data_format',
    'name': 'dataFormat',
    'type': 'string'
  }]
}, {
  'tfOpName': 'BroadcastTo',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 'x',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 'shape',
    'type': 'number[]'
  }],
  'attrs': []
}, {
  'tfOpName': 'BroadcastArgs',
  'category': 'transformation',
  'inputs': [{
    'start': 0,
    'name': 's0',
    'type': 'tensor'
  }, {
    'start': 1,
    'name': 's1',
    'type': 'tensor'
  }],
  'attrs': []
}];
exports.json = json;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js":[function(require,module,exports) {
var global = arguments[3];
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeBase64 = decodeBase64;
exports.parseStringParam = parseStringParam;
exports.getStringParam = getStringParam;
exports.getBoolParam = getBoolParam;
exports.getNumberParam = getNumberParam;
exports.parseDtypeParam = parseDtypeParam;
exports.getFuncParam = getFuncParam;
exports.getDtypeParam = getDtypeParam;
exports.getDtypeArrayParam = getDtypeArrayParam;
exports.parseTensorShapeParam = parseTensorShapeParam;
exports.getTensorShapeParam = getTensorShapeParam;
exports.getNumericArrayParam = getNumericArrayParam;
exports.getStringArrayParam = getStringArrayParam;
exports.getTensorShapeArrayParam = getTensorShapeArrayParam;
exports.getBoolArrayParam = getBoolArrayParam;
exports.OperationMapper = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var tensorflow = _interopRequireWildcard(require("../data/compiled_api"));

var _register = require("./custom_op/register");

var _utils = require("./executors/utils");

var arithmetic = _interopRequireWildcard(require("./op_list/arithmetic"));

var basicMath = _interopRequireWildcard(require("./op_list/basic_math"));

var control = _interopRequireWildcard(require("./op_list/control"));

var convolution = _interopRequireWildcard(require("./op_list/convolution"));

var creation = _interopRequireWildcard(require("./op_list/creation"));

var dynamic = _interopRequireWildcard(require("./op_list/dynamic"));

var evaluation = _interopRequireWildcard(require("./op_list/evaluation"));

var graph = _interopRequireWildcard(require("./op_list/graph"));

var hashTable = _interopRequireWildcard(require("./op_list/hash_table"));

var image = _interopRequireWildcard(require("./op_list/image"));

var logical = _interopRequireWildcard(require("./op_list/logical"));

var matrices = _interopRequireWildcard(require("./op_list/matrices"));

var normalization = _interopRequireWildcard(require("./op_list/normalization"));

var reduction = _interopRequireWildcard(require("./op_list/reduction"));

var sliceJoin = _interopRequireWildcard(require("./op_list/slice_join"));

var sparse = _interopRequireWildcard(require("./op_list/sparse"));

var spectral = _interopRequireWildcard(require("./op_list/spectral"));

var string = _interopRequireWildcard(require("./op_list/string"));

var transformation = _interopRequireWildcard(require("./op_list/transformation"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class OperationMapper {
  // Singleton instance for the mapper
  static get Instance() {
    return this._instance || (this._instance = new this());
  } // Loads the op mapping from the JSON file.


  constructor() {
    const ops = [arithmetic, basicMath, control, convolution, creation, dynamic, evaluation, graph, hashTable, image, logical, matrices, normalization, reduction, sliceJoin, sparse, spectral, string, transformation];
    const mappersJson = [].concat(...ops.map(op => op.json));
    this.opMappers = mappersJson.reduce((map, mapper) => {
      map[mapper.tfOpName] = mapper;
      return map;
    }, {});
  } // Converts the model inference graph from Tensorflow GraphDef to local
  // representation for TensorFlow.js API


  transformGraph(graph, signature = {}) {
    const tfNodes = graph.node;
    const placeholders = [];
    const weights = [];
    const initNodes = [];
    const nodes = tfNodes.reduce((map, node) => {
      map[node.name] = this.mapNode(node);

      if (node.op.startsWith('Placeholder')) {
        placeholders.push(map[node.name]);
      } else if (node.op === 'Const') {
        weights.push(map[node.name]);
      } else if (node.input == null || node.input.length === 0) {
        initNodes.push(map[node.name]);
      }

      return map;
    }, {});
    let inputs = [];
    const outputs = [];
    let inputNodeNameToKey = {};
    let outputNodeNameToKey = {};

    if (signature != null) {
      inputNodeNameToKey = this.mapSignatureEntries(signature.inputs);
      outputNodeNameToKey = this.mapSignatureEntries(signature.outputs);
    }

    const allNodes = Object.keys(nodes);
    allNodes.forEach(key => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName,, outputName] = (0, _utils.getNodeNameAndIndex)(name);
        const inputNode = nodes[nodeName];

        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);

          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`; // update the input name to use the mapped output index directly.

            node.inputNames[index] = inputName;
          }
        }

        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    }); // if signature has not outputs set, add any node that does not have
    // outputs.

    if (Object.keys(outputNodeNameToKey).length === 0) {
      allNodes.forEach(key => {
        const node = nodes[key];

        if (node.children.length === 0) {
          outputs.push(node);
        }
      });
    } else {
      Object.keys(outputNodeNameToKey).forEach(name => {
        const [nodeName] = (0, _utils.getNodeNameAndIndex)(name);
        const node = nodes[nodeName];

        if (node != null) {
          node.signatureKey = outputNodeNameToKey[name];
          outputs.push(node);
        }
      });
    }

    if (Object.keys(inputNodeNameToKey).length > 0) {
      Object.keys(inputNodeNameToKey).forEach(name => {
        const [nodeName] = (0, _utils.getNodeNameAndIndex)(name);
        const node = nodes[nodeName];

        if (node) {
          node.signatureKey = inputNodeNameToKey[name];
          inputs.push(node);
        }
      });
    } else {
      inputs = placeholders;
    }

    let functions = {};

    if (graph.library != null && graph.library.function != null) {
      functions = graph.library.function.reduce((functions, func) => {
        functions[func.signature.name] = this.mapFunction(func);
        return functions;
      }, {});
    }

    const result = {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature,
      functions
    };

    if (initNodes.length > 0) {
      result.initNodes = initNodes;
    }

    return result;
  }

  mapSignatureEntries(entries) {
    return Object.keys(entries || {}).reduce((prev, curr) => {
      prev[entries[curr].name] = curr;
      return prev;
    }, {});
  }

  mapNode(node) {
    // Unsupported ops will cause an error at run-time (not parse time), since
    // they may not be used by the actual execution subgraph.
    const mapper = (0, _register.getRegisteredOp)(node.op) || this.opMappers[node.op] || {};

    if (node.attr == null) {
      node.attr = {};
    }

    const newNode = {
      name: node.name,
      op: node.op,
      category: mapper.category,
      inputNames: (node.input || []).map(input => input.startsWith('^') ? input.slice(1) : input),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: node.attr,
      outputs: mapper.outputs
    };

    if (mapper.inputs != null) {
      newNode.inputParams = mapper.inputs.reduce((map, param) => {
        map[param.name] = {
          type: param.type,
          inputIndexStart: param.start,
          inputIndexEnd: param.end
        };
        return map;
      }, {});
    }

    if (mapper.attrs != null) {
      newNode.attrParams = mapper.attrs.reduce((map, param) => {
        const type = param.type;
        let value = undefined;

        switch (param.type) {
          case 'string':
            value = getStringParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getStringParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'string[]':
            value = getStringArrayParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getStringArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'number':
            value = getNumberParam(node.attr, param.tfName, param.defaultValue || 0);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getNumberParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'number[]':
            value = getNumericArrayParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getNumericArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'bool':
            value = getBoolParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getBoolParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'bool[]':
            value = getBoolArrayParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getBoolArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'shape':
            value = getTensorShapeParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getTensorShapeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'shape[]':
            value = getTensorShapeArrayParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getTensorShapeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'dtype':
            value = getDtypeParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getDtypeParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'dtype[]':
            value = getDtypeArrayParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getDtypeArrayParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'func':
            value = getFuncParam(node.attr, param.tfName, param.defaultValue);

            if (value === undefined && !!param.tfDeprecatedName) {
              value = getFuncParam(node.attr, param.tfDeprecatedName, param.defaultValue);
            }

            break;

          case 'tensor':
          case 'tensors':
            break;

          default:
            throw new Error(`Unsupported param type: ${param.type} for op: ${node.op}`);
        }

        map[param.name] = {
          value,
          type
        };
        return map;
      }, {});
    }

    return newNode;
  } // map the TFunctionDef to TFJS graph object


  mapFunction(functionDef) {
    const tfNodes = functionDef.nodeDef;
    const placeholders = [];
    const weights = [];
    let nodes = {};

    if (tfNodes != null) {
      nodes = tfNodes.reduce((map, node) => {
        map[node.name] = this.mapNode(node);

        if (node.op === 'Const') {
          weights.push(map[node.name]);
        }

        return map;
      }, {});
    }

    const inputs = [];
    const outputs = [];
    functionDef.signature.inputArg.forEach(arg => {
      const [nodeName] = (0, _utils.getNodeNameAndIndex)(arg.name);
      const node = {
        name: nodeName,
        op: 'Placeholder',
        inputs: [],
        inputNames: [],
        category: 'graph',
        inputParams: {},
        attrParams: {
          dtype: {
            value: parseDtypeParam(arg.type),
            type: 'dtype'
          }
        },
        children: []
      };
      node.signatureKey = arg.name;
      inputs.push(node);
      nodes[nodeName] = node;
    });
    const allNodes = Object.keys(nodes);
    allNodes.forEach(key => {
      const node = nodes[key];
      node.inputNames.forEach((name, index) => {
        const [nodeName,, outputName] = (0, _utils.getNodeNameAndIndex)(name);
        const inputNode = nodes[nodeName];

        if (inputNode.outputs != null) {
          const outputIndex = inputNode.outputs.indexOf(outputName);

          if (outputIndex !== -1) {
            const inputName = `${nodeName}:${outputIndex}`; // update the input name to use the mapped output index directly.

            node.inputNames[index] = inputName;
          }
        }

        node.inputs.push(inputNode);
        inputNode.children.push(node);
      });
    });
    const returnNodeMap = functionDef.ret;
    functionDef.signature.outputArg.forEach(output => {
      const [nodeName, index] = (0, _utils.getNodeNameAndIndex)(returnNodeMap[output.name]);
      const node = nodes[nodeName];

      if (node != null) {
        node.defaultOutput = index;
        outputs.push(node);
      }
    });
    const signature = this.mapArgsToSignature(functionDef);
    return {
      nodes,
      inputs,
      outputs,
      weights,
      placeholders,
      signature
    };
  }

  mapArgsToSignature(functionDef) {
    return {
      methodName: functionDef.signature.name,
      inputs: functionDef.signature.inputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg);
        return map;
      }, {}),
      outputs: functionDef.signature.outputArg.reduce((map, arg) => {
        map[arg.name] = this.mapArgToTensorInfo(arg, functionDef.ret);
        return map;
      }, {})
    };
  }

  mapArgToTensorInfo(arg, nameMap) {
    let name = arg.name;

    if (nameMap != null) {
      name = nameMap[name];
    }

    return {
      name,
      dtype: arg.type
    };
  }

}

exports.OperationMapper = OperationMapper;

function decodeBase64(text) {
  const global = (0, _tfjsCore.env)().global;

  if (typeof global.atob !== 'undefined') {
    return global.atob(text);
  } else if (typeof Buffer !== 'undefined') {
    return new Buffer(text, 'base64').toString();
  } else {
    throw new Error('Unable to decode base64 in this environment. ' + 'Missing built-in atob() or Buffer()');
  }
}

function parseStringParam(s, keepCase) {
  const value = Array.isArray(s) ? String.fromCharCode.apply(null, s) : decodeBase64(s);
  return keepCase ? value : value.toLowerCase();
}

function getStringParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];

  if (param != null) {
    return parseStringParam(param.s, keepCase);
  }

  return def;
}

function getBoolParam(attrs, name, def) {
  const param = attrs[name];
  return param ? param.b : def;
}

function getNumberParam(attrs, name, def) {
  const param = attrs[name] || {};
  const value = param['i'] != null ? param['i'] : param['f'] != null ? param['f'] : def;
  return typeof value === 'number' ? value : parseInt(value, 10);
}

function parseDtypeParam(value) {
  if (typeof value === 'string') {
    // tslint:disable-next-line:no-any
    value = tensorflow.DataType[value];
  }

  switch (value) {
    case tensorflow.DataType.DT_FLOAT:
    case tensorflow.DataType.DT_HALF:
      return 'float32';

    case tensorflow.DataType.DT_INT32:
    case tensorflow.DataType.DT_INT64:
    case tensorflow.DataType.DT_INT8:
    case tensorflow.DataType.DT_UINT8:
      return 'int32';

    case tensorflow.DataType.DT_BOOL:
      return 'bool';

    case tensorflow.DataType.DT_DOUBLE:
      return 'float32';

    case tensorflow.DataType.DT_STRING:
      return 'string';

    default:
      // Unknown dtype error will happen at runtime (instead of parse time),
      // since these nodes might not be used by the actual subgraph execution.
      return null;
  }
}

function getFuncParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.func) {
    return param.func.name;
  }

  return def;
}

function getDtypeParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.type) {
    return parseDtypeParam(param.type);
  }

  return def;
}

function getDtypeArrayParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.list && param.list.type) {
    return param.list.type.map(v => parseDtypeParam(v));
  }

  return def;
}

function parseTensorShapeParam(shape) {
  if (shape.unknownRank) {
    return undefined;
  }

  if (shape.dim != null) {
    return shape.dim.map(dim => typeof dim.size === 'number' ? dim.size : parseInt(dim.size, 10));
  }

  return [];
}

function getTensorShapeParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.shape) {
    return parseTensorShapeParam(param.shape);
  }

  return def;
}

function getNumericArrayParam(attrs, name, def) {
  const param = attrs[name];

  if (param) {
    return ((param.list.f && param.list.f.length ? param.list.f : param.list.i) || []).map(v => typeof v === 'number' ? v : parseInt(v, 10));
  }

  return def;
}

function getStringArrayParam(attrs, name, def, keepCase = false) {
  const param = attrs[name];

  if (param && param.list && param.list.s) {
    return param.list.s.map(v => {
      return parseStringParam(v, keepCase);
    });
  }

  return def;
}

function getTensorShapeArrayParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.list && param.list.shape) {
    return param.list.shape.map(v => {
      return parseTensorShapeParam(v);
    });
  }

  return def;
}

function getBoolArrayParam(attrs, name, def) {
  const param = attrs[name];

  if (param && param.list && param.list.b) {
    return param.list.b;
  }

  return def;
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../data/compiled_api":"node_modules/@tensorflow/tfjs-converter/dist/data/compiled_api.js","./custom_op/register":"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js","./executors/utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js","./op_list/arithmetic":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js","./op_list/basic_math":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js","./op_list/control":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/control.js","./op_list/convolution":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js","./op_list/creation":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/creation.js","./op_list/dynamic":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js","./op_list/evaluation":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js","./op_list/graph":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/graph.js","./op_list/hash_table":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js","./op_list/image":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/image.js","./op_list/logical":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/logical.js","./op_list/matrices":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js","./op_list/normalization":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js","./op_list/reduction":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js","./op_list/slice_join":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js","./op_list/sparse":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js","./op_list/spectral":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js","./op_list/string":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/string.js","./op_list/transformation":"node_modules/@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js","buffer":"node_modules/buffer/index.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeValueImpl = void 0;

var _utils = require("../executors/utils");

var _operation_mapper = require("../operation_mapper");

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Helper class for lookup inputs and params for nodes in the model graph.
 */
class NodeValueImpl {
  constructor(node, tensorMap, context) {
    this.node = node;
    this.tensorMap = tensorMap;
    this.context = context;
    this.inputs = [];
    this.attrs = {};
    this.inputs = node.inputNames.map(name => this.getInput(name));

    if (node.rawAttrs != null) {
      this.attrs = Object.keys(node.rawAttrs).reduce((attrs, key) => {
        attrs[key] = this.getAttr(key);
        return attrs;
      }, {});
    }
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */


  getInput(name) {
    return (0, _utils.getTensor)(name, this.tensorMap, this.context);
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */


  getAttr(name, defaultValue) {
    const value = this.node.rawAttrs[name];

    if (value.tensor != null) {
      return (0, _utils.getTensor)(name, this.tensorMap, this.context);
    }

    if (value.i != null || value.f != null) {
      return (0, _operation_mapper.getNumberParam)(this.node.rawAttrs, name, defaultValue);
    }

    if (value.s != null) {
      return (0, _operation_mapper.getStringParam)(this.node.rawAttrs, name, defaultValue);
    }

    if (value.b != null) {
      return (0, _operation_mapper.getBoolParam)(this.node.rawAttrs, name, defaultValue);
    }

    if (value.shape != null) {
      return (0, _operation_mapper.getTensorShapeParam)(this.node.rawAttrs, name, defaultValue);
    }

    if (value.type != null) {
      return (0, _operation_mapper.getDtypeParam)(this.node.rawAttrs, name, defaultValue);
    }

    if (value.list != null) {
      if (value.list.i != null || value.list.f != null) {
        return (0, _operation_mapper.getNumericArrayParam)(this.node.rawAttrs, name, defaultValue);
      }

      if (value.list.s != null) {
        return (0, _operation_mapper.getStringArrayParam)(this.node.rawAttrs, name, defaultValue);
      }

      if (value.list.shape != null) {
        return (0, _operation_mapper.getTensorShapeArrayParam)(this.node.rawAttrs, name, defaultValue);
      }

      if (value.list.b != null) {
        return (0, _operation_mapper.getBoolArrayParam)(this.node.rawAttrs, name, defaultValue);
      }

      if (value.list.type != null) {
        return (0, _operation_mapper.getDtypeArrayParam)(this.node.rawAttrs, name, defaultValue);
      }
    }

    return defaultValue;
  }

}

exports.NodeValueImpl = NodeValueImpl;
},{"../executors/utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js","../operation_mapper":"node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js"}],"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ops = require("./ops");

Object.keys(_ops).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ops[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ops[key];
    }
  });
});
},{"./ops":"node_modules/@tensorflow/tfjs-core/dist/ops/ops.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'BiasAdd':
    case 'AddV2':
    case 'Add':
      {
        return [ops.add((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'AddN':
      {
        return [ops.addN((0, _utils.getParamValue)('tensors', node, tensorMap, context))];
      }

    case 'FloorMod':
    case 'Mod':
      return [ops.mod((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];

    case 'Mul':
      return [ops.mul((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];

    case 'RealDiv':
    case 'Div':
      {
        return [ops.div((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'DivNoNan':
      {
        return [ops.divNoNan((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'FloorDiv':
      {
        return [ops.floorDiv((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Sub':
      {
        return [ops.sub((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Minimum':
      {
        return [ops.minimum((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Maximum':
      {
        return [ops.maximum((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Pow':
      {
        return [ops.pow((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'SquaredDifference':
      {
        return [ops.squaredDifference((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'arithmetic';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Abs':
    case 'ComplexAbs':
      return [ops.abs((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Acos':
      return [ops.acos((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Acosh':
      return [ops.acosh((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Asin':
      return [ops.asin((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Asinh':
      return [ops.asinh((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Atan':
      return [ops.atan((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Atan2':
      return [ops.atan2((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('y', node, tensorMap, context))];

    case 'Atanh':
      return [ops.atanh((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Ceil':
      return [ops.ceil((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Complex':
      return [ops.complex((0, _utils.getParamValue)('real', node, tensorMap, context), (0, _utils.getParamValue)('imag', node, tensorMap, context))];

    case 'Cos':
      return [ops.cos((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Cosh':
      return [ops.cosh((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Elu':
      return [ops.elu((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Erf':
      return [ops.erf((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Exp':
      return [ops.exp((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Expm1':
      {
        return [ops.expm1((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Floor':
      return [ops.floor((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Log':
      return [ops.log((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Log1p':
      {
        return [ops.log1p((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Imag':
      return [ops.imag((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Neg':
      return [ops.neg((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Reciprocal':
      {
        return [ops.reciprocal((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Real':
      return [ops.real((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Relu':
      return [ops.relu((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Round':
      {
        return [ops.round((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Selu':
      return [ops.selu((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Sigmoid':
      return [ops.sigmoid((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Sin':
      return [ops.sin((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Sign':
      {
        return [ops.sign((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Sinh':
      {
        return [ops.sinh((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Softplus':
      {
        return [ops.softplus((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Sqrt':
      {
        return [ops.sqrt((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Square':
      {
        return [ops.square((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Tanh':
      {
        return [ops.tanh((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'Tan':
      return [ops.tan((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'ClipByValue':
      return [ops.clipByValue((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('clipValueMin', node, tensorMap, context), (0, _utils.getParamValue)('clipValueMax', node, tensorMap, context))];

    case 'Relu6':
      return [ops.relu6((0, _utils.getParamValue)('x', node, tensorMap, context))];

    case 'Rsqrt':
      return [ops.rsqrt((0, _utils.getTensor)(node.inputNames[0], tensorMap, context))];

    case 'LeakyRelu':
      return [ops.leakyRelu((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('alpha', node, tensorMap, context))];

    case 'Prelu':
      return [ops.prelu((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('alpha', node, tensorMap, context))];

    case 'IsNan':
      return [ops.isNaN((0, _utils.getTensor)(node.inputNames[0], tensorMap, context))];

    case 'IsInf':
      return [ops.isInf((0, _utils.getTensor)(node.inputNames[0], tensorMap, context))];

    case 'IsFinite':
      return [ops.isFinite((0, _utils.getTensor)(node.inputNames[0], tensorMap, context))];

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'basic_math';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertShapesMatchAllowUndefinedSize = assertShapesMatchAllowUndefinedSize;
exports.fullDefinedShape = fullDefinedShape;
exports.inferElementShape = inferElementShape;
exports.mergeElementShape = mergeElementShape;

var _tfjsCore = require("@tensorflow/tfjs-core");

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * This differs from util.assertShapesMatch in that it allows values of
 * negative one, an undefined size of a dimensinon, in a shape to match
 * anything.
 */

/**
 * Used by TensorList and TensorArray to verify if elementShape matches, support
 * negative value as the dim shape.
 * @param shapeA
 * @param shapeB
 * @param errorMessagePrefix
 */
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = '') {
  // constant shape means unknown rank
  if (typeof shapeA === 'number' || typeof shapeB === 'number') {
    return;
  }

  _tfjsCore.util.assert(shapeA.length === shapeB.length, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);

  for (let i = 0; i < shapeA.length; i++) {
    const dim0 = shapeA[i];
    const dim1 = shapeB[i];

    _tfjsCore.util.assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, () => errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
  }
}

function fullDefinedShape(elementShape) {
  if (typeof elementShape === 'number' || elementShape.some(dim => dim < 0)) {
    return false;
  }

  return true;
}
/**
 * Generate the output element shape from the list elementShape, list tensors
 * and input param.
 * @param listElementShape
 * @param tensors
 * @param elementShape
 */


function inferElementShape(listElementShape, tensors, elementShape) {
  let partialShape = mergeElementShape(listElementShape, elementShape);
  const notfullDefinedShape = !fullDefinedShape(partialShape);

  if (notfullDefinedShape && tensors.length === 0) {
    throw new Error(`Tried to calculate elements of an empty list` + ` with non-fully-defined elementShape: ${partialShape}`);
  }

  if (notfullDefinedShape) {
    tensors.forEach(tensor => {
      partialShape = mergeElementShape(tensor.shape, partialShape);
    });
  }

  if (!fullDefinedShape(partialShape)) {
    throw new Error(`Non-fully-defined elementShape: ${partialShape}`);
  }

  return partialShape;
}

function mergeElementShape(elementShapeA, elementShapeB) {
  if (typeof elementShapeA === 'number') {
    return elementShapeB;
  }

  if (typeof elementShapeB === 'number') {
    return elementShapeA;
  }

  if (elementShapeA.length !== elementShapeB.length) {
    throw new Error(`Incompatible ranks during merge: ${elementShapeA} vs. ${elementShapeB}`);
  }

  const result = [];

  for (let i = 0; i < elementShapeA.length; ++i) {
    const dim0 = elementShapeA[i];
    const dim1 = elementShapeB[i];

    if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
      throw new Error(`Incompatible shape during merge: ${elementShapeA} vs. ${elementShapeB}`);
    }

    result[i] = dim0 >= 0 ? dim0 : dim1;
  }

  return result;
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TensorArray = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var _tensor_utils = require("./tensor_utils");

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * The TensorArray object keeps an array of Tensors.  It
 * allows reading from the array and writing to the array.
 */
class TensorArray {
  constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead) {
    this.name = name;
    this.dtype = dtype;
    this.maxSize = maxSize;
    this.elementShape = elementShape;
    this.identicalElementShapes = identicalElementShapes;
    this.dynamicSize = dynamicSize;
    this.clearAfterRead = clearAfterRead;
    this.tensors = [];
    this.closed_ = false;
    this.idTensor = (0, _tfjsCore.scalar)(0);
    (0, _tfjsCore.keep)(this.idTensor);
  }

  get id() {
    return this.idTensor.id;
  }

  get closed() {
    return this.closed_;
  }
  /**
   * Dispose the tensors and idTensor and mark the TensoryArray as closed.
   */


  clearAndClose(keepIds) {
    this.tensors.forEach(tensor => {
      if (keepIds == null || !keepIds.has(tensor.tensor.id)) {
        tensor.tensor.dispose();
      }
    });
    this.tensors = [];
    this.closed_ = true;
    this.idTensor.dispose();
  }

  size() {
    return this.tensors.length;
  }
  /**
   * Read the value at location index in the TensorArray.
   * @param index Number the index to read from.
   */


  read(index) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }

    if (index < 0 || index >= this.size()) {
      throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
    }

    const tensorWithState = this.tensors[index];

    if (tensorWithState.cleared) {
      throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read ` + `(perhaps try setting clear_after_read = false?).`);
    }

    if (this.clearAfterRead) {
      tensorWithState.cleared = true;
    }

    tensorWithState.read = true;
    return tensorWithState.tensor;
  }
  /**
   * Helper method to read multiple tensors from the specified indices.
   */


  readMany(indices) {
    return indices.map(index => this.read(index));
  }
  /**
   * Write value into the index of the TensorArray.
   * @param index number the index to write to.
   * @param tensor
   */


  write(index, tensor) {
    if (this.closed_) {
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    }

    if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
      throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
    }

    const t = this.tensors[index] || {};

    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor.dtype}, but TensorArray dtype is ${this.dtype}.`);
    } // Set the shape for the first time write to unknow shape tensor array


    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0)) {
      this.elementShape = tensor.shape;
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensor.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);

    if (t.read) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
    }

    if (t.written) {
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
    }

    t.tensor = tensor;
    (0, _tfjsCore.keep)(tensor);
    t.written = true;
    this.tensors[index] = t;
  }
  /**
   * Helper method to write multiple tensors to the specified indices.
   */


  writeMany(indices, tensors) {
    if (indices.length !== tensors.length) {
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,` + `because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
    }

    indices.forEach((i, index) => this.write(i, tensors[index]));
  }
  /**
   * Return selected values in the TensorArray as a packed Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param [indices] number[] Optional. Taking values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size(). If not specified returns
   *    all tensors in the original order.
   * @param [dtype]
   */


  gather(indices, dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
    }

    if (!indices) {
      indices = [];

      for (let i = 0; i < this.size(); i++) {
        indices.push(i);
      }
    } else {
      indices = indices.slice(0, this.size());
    }

    if (indices.length === 0) {
      return (0, _tfjsCore.tensor)([], [0].concat(this.elementShape));
    } // Read all the PersistentTensors into a vector to keep track of
    // their memory.


    const tensors = this.readMany(indices);
    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
    return (0, _tfjsCore.stack)(tensors, 0);
  }
  /**
   * Return the values in the TensorArray as a concatenated Tensor.
   */


  concat(dtype) {
    if (!!dtype && dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
    }

    if (this.size() === 0) {
      return (0, _tfjsCore.tensor)([], [0].concat(this.elementShape));
    }

    const indices = [];

    for (let i = 0; i < this.size(); i++) {
      indices.push(i);
    } // Collect all the tensors from the tensors array.


    const tensors = this.readMany(indices);
    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
    return (0, _tfjsCore.concat)(tensors, 0);
  }
  /**
   * Scatter the values of a Tensor in specific indices of a TensorArray.
   * @param indices nummber[] values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size().
   * @param tensor Tensor input tensor.
   */


  scatter(indices, tensor) {
    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
    }

    if (indices.length !== tensor.shape[0]) {
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
    }

    const maxIndex = Math.max(...indices);

    if (!this.dynamicSize && maxIndex >= this.maxSize) {
      throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
    }

    this.writeMany(indices, (0, _tfjsCore.unstack)(tensor, 0));
  }
  /**
   * Split the values of a Tensor into the TensorArray.
   * @param length number[] with the lengths to use when splitting value along
   *    its first dimension.
   * @param tensor Tensor, the tensor to split.
   */


  split(length, tensor) {
    if (tensor.dtype !== this.dtype) {
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
    }

    let totalLength = 0;
    const cumulativeLengths = length.map(len => {
      totalLength += len;
      return totalLength;
    });

    if (totalLength !== tensor.shape[0]) {
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
    }

    if (!this.dynamicSize && length.length !== this.maxSize) {
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), ` + 'and the TensorArray is not marked as dynamically resizeable');
    }

    const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
    const tensors = [];
    (0, _tfjsCore.tidy)(() => {
      tensor = (0, _tfjsCore.reshape)(tensor, [1, totalLength, elementPerRow]);

      for (let i = 0; i < length.length; ++i) {
        const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
        const indices = [0, previousLength, 0];
        const sizes = [1, length[i], elementPerRow];
        tensors[i] = (0, _tfjsCore.reshape)((0, _tfjsCore.slice)(tensor, indices, sizes), this.elementShape);
      }

      return tensors;
    });
    const indices = [];

    for (let i = 0; i < length.length; i++) {
      indices[i] = i;
    }

    this.writeMany(indices, tensors);
  }

}

exports.TensorArray = TensorArray;
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./tensor_utils":"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromTensor = fromTensor;
exports.reserve = reserve;
exports.scatter = scatter;
exports.split = split;
exports.TensorList = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var _tensor_utils = require("./tensor_utils");

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * TensorList stores a container of `tf.Tensor` objects, which are accessible
 * via tensors field.
 *
 * In order to get a copy of the underlying list, use the copy method:
 * ```
 *    TensorList b = a.copy();
 *    b.tensors().pushBack(t);  // This does not modify a.tensors().
 * ```
 *
 * Note that this is not a deep copy: the memory locations of the underlying
 * tensors will still point to the same locations of the corresponding tensors
 * in the original.
 */
class TensorList {
  get id() {
    return this.idTensor.id;
  }
  /**
   *
   * @param tensors list of tensors
   * @param elementShape shape of each tensor, this can be a single number (any
   * shape is allowed) or partial shape (dim = -1).
   * @param elementDtype data type of each tensor
   * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
   *   meaning that the size of `tensors` is unbounded.
   */


  constructor(tensors, elementShape, elementDtype, maxNumElements = -1) {
    this.tensors = tensors;
    this.elementShape = elementShape;
    this.elementDtype = elementDtype;

    if (tensors != null) {
      tensors.forEach(tensor => {
        if (elementDtype !== tensor.dtype) {
          throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor.dtype}`);
        }

        (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(elementShape, tensor.shape, 'TensorList shape mismatch: ');
        (0, _tfjsCore.keep)(tensor);
      });
    }

    this.idTensor = (0, _tfjsCore.scalar)(0);
    this.maxNumElements = maxNumElements;
    (0, _tfjsCore.keep)(this.idTensor);
  }
  /**
   * Get a new TensorList containing a copy of the underlying tensor container.
   */


  copy() {
    return new TensorList([...this.tensors], this.elementShape, this.elementDtype);
  }
  /**
   * Dispose the tensors and idTensor and clear the tensor list.
   */


  clearAndClose(keepIds) {
    this.tensors.forEach(tensor => {
      if (keepIds == null || !keepIds.has(tensor.id)) {
        tensor.dispose();
      }
    });
    this.tensors.length = 0;
    this.idTensor.dispose();
  }
  /**
   * The size of the tensors in the tensor list.
   */


  size() {
    return this.tensors.length;
  }
  /**
   * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
   * tf.Tensor.
   * @param elementShape shape of each tensor
   * @param elementDtype data type of each tensor
   * @param numElements the number of elements to stack
   */


  stack(elementShape, elementDtype, numElements = -1) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }

    if (numElements !== -1 && this.tensors.length !== numElements) {
      throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(elementShape, this.elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0, _tensor_utils.inferElementShape)(this.elementShape, this.tensors, elementShape);
    return (0, _tfjsCore.tidy)(() => {
      const reshapedTensors = this.tensors.map(tensor => (0, _tfjsCore.reshape)(tensor, outputElementShape));
      return (0, _tfjsCore.stack)(reshapedTensors, 0);
    });
  }
  /**
   * Pop a tensor from the end of the list.
   * @param elementShape shape of the tensor
   * @param elementDtype data type of the tensor
   */


  popBack(elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }

    if (this.size() === 0) {
      throw new Error('Trying to pop from an empty list.');
    }

    const outputElementShape = (0, _tensor_utils.inferElementShape)(this.elementShape, this.tensors, elementShape);
    const tensor = this.tensors.pop();
    tensor.kept = false;
    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(tensor.shape, elementShape, 'TensorList shape mismatch: ');
    return (0, _tfjsCore.reshape)(tensor, outputElementShape);
  }
  /**
   * Push a tensor to the end of the list.
   * @param tensor Tensor to be pushed.
   */


  pushBack(tensor) {
    if (tensor.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(tensor.shape, this.elementShape, 'TensorList shape mismatch: ');

    if (this.maxNumElements === this.size()) {
      throw new Error(`Trying to push element into a full list.`);
    }

    (0, _tfjsCore.keep)(tensor);
    this.tensors.push(tensor);
  }
  /**
   * Update the size of the list.
   * @param size the new size of the list.
   */


  resize(size) {
    if (size < 0) {
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
    }

    if (this.maxNumElements !== -1 && size > this.maxNumElements) {
      throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
    }

    const destTensorList = new TensorList([], this.elementShape, this.elementDtype, this.maxNumElements);
    destTensorList.tensors.length = size;

    for (let i = 0; i < Math.min(this.tensors.length, size); ++i) {
      destTensorList.tensors[i] = this.tensors[i];
    }

    return destTensorList;
  }
  /**
   * Retrieve the element at the provided index
   * @param elementShape shape of the tensor
   * @param elementDtype dtype of the tensor
   * @param elementIndex index of the tensor
   */


  getItem(elementIndex, elementShape, elementDtype) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }

    if (elementIndex < 0 || elementIndex > this.tensors.length) {
      throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
    }

    if (this.tensors[elementIndex] == null) {
      throw new Error(`element at index ${elementIndex} is null.`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.tensors[elementIndex].shape, elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0, _tensor_utils.inferElementShape)(this.elementShape, this.tensors, elementShape);
    return (0, _tfjsCore.reshape)(this.tensors[elementIndex], outputElementShape);
  }
  /**
   * Set the tensor at the index
   * @param elementIndex index of the tensor
   * @param tensor the tensor to be inserted into the list
   */


  setItem(elementIndex, tensor) {
    if (tensor.dtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
    }

    if (elementIndex < 0 || this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
      throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, tensor.shape, 'TensorList shape mismatch: ');
    (0, _tfjsCore.keep)(tensor); // dispose the previous value if it is replacing.

    if (this.tensors[elementIndex] != null) {
      this.tensors[elementIndex].kept = false;
    }

    this.tensors[elementIndex] = tensor;
  }
  /**
   * Return selected values in the TensorList as a stacked Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param indices indices of tensors to gather
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */


  gather(indices, elementDtype, elementShape) {
    if (elementDtype !== this.elementDtype) {
      throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, elementShape, 'TensorList shape mismatch: '); // When indices is greater than the size of the list, indices beyond the
    // size of the list are ignored.

    indices = indices.slice(0, this.size());
    const outputElementShape = (0, _tensor_utils.inferElementShape)(this.elementShape, this.tensors, elementShape);

    if (indices.length === 0) {
      return (0, _tfjsCore.tensor)([], [0].concat(outputElementShape));
    }

    return (0, _tfjsCore.tidy)(() => {
      const tensors = indices.map(i => (0, _tfjsCore.reshape)(this.tensors[i], outputElementShape));
      return (0, _tfjsCore.stack)(tensors, 0);
    });
  }
  /**
   * Return the values in the TensorList as a concatenated Tensor.
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */


  concat(elementDtype, elementShape) {
    if (!!elementDtype && elementDtype !== this.elementDtype) {
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
    }

    (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(this.elementShape, elementShape, 'TensorList shape mismatch: ');
    const outputElementShape = (0, _tensor_utils.inferElementShape)(this.elementShape, this.tensors, elementShape);

    if (this.size() === 0) {
      return (0, _tfjsCore.tensor)([], [0].concat(outputElementShape));
    }

    return (0, _tfjsCore.tidy)(() => {
      const tensors = this.tensors.map(t => (0, _tfjsCore.reshape)(t, outputElementShape));
      return (0, _tfjsCore.concat)(tensors, 0);
    });
  }

}
/**
 * Creates a TensorList which, when stacked, has the value of tensor.
 * @param tensor from tensor
 * @param elementShape output tensor element shape
 */


exports.TensorList = TensorList;

function fromTensor(tensor, elementShape, elementDtype) {
  const dtype = tensor.dtype;

  if (tensor.shape.length < 1) {
    throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor.shape}`);
  }

  if (tensor.dtype !== elementDtype) {
    throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${elementDtype}`);
  }

  const tensorElementShape = tensor.shape.slice(1);
  (0, _tensor_utils.assertShapesMatchAllowUndefinedSize)(tensorElementShape, elementShape, 'TensorList shape mismatch: ');
  const tensorList = (0, _tfjsCore.unstack)(tensor);
  return new TensorList(tensorList, elementShape, dtype);
}
/**
 * Return a TensorList of the given size with empty elements.
 * @param elementShape the shape of the future elements of the list
 * @param elementDtype the desired type of elements in the list
 * @param numElements the number of elements to reserve
 * @param maxNumElements the maximum number of elements in th list
 */


function reserve(elementShape, elementDtype, numElements, maxNumElements) {
  return new TensorList([], elementShape, elementDtype, maxNumElements);
}
/**
 * Put tensors at specific indices of a stacked tensor into a TensorList.
 * @param indices list of indices on how to scatter the tensor.
 * @param tensor input tensor.
 * @param elementShape the shape of the future elements of the list
 * @param numElements the number of elements to scatter
 */


function scatter(tensor, indices, elementShape, numElements) {
  if (indices.length !== tensor.shape[0]) {
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
  }

  const maxIndex = Math.max(...indices);

  if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
    throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
  }

  const list = new TensorList([], elementShape, tensor.dtype, numElements);
  const tensors = (0, _tfjsCore.unstack)(tensor, 0);
  indices.forEach((value, index) => {
    list.setItem(value, tensors[index]);
  });
  return list;
}
/**
 * Split the values of a Tensor into a TensorList.
 * @param length the lengths to use when splitting value along
 *    its first dimension.
 * @param tensor the tensor to split.
 * @param elementShape the shape of the future elements of the list
 */


function split(tensor, length, elementShape) {
  let totalLength = 0;
  const cumulativeLengths = length.map(len => {
    totalLength += len;
    return totalLength;
  });

  if (totalLength !== tensor.shape[0]) {
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
  }

  const shapeWithoutFirstDim = tensor.shape.slice(1);
  const outputElementShape = (0, _tensor_utils.mergeElementShape)(shapeWithoutFirstDim, elementShape);
  const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
  const tensors = (0, _tfjsCore.tidy)(() => {
    const tensors = [];
    tensor = (0, _tfjsCore.reshape)(tensor, [1, totalLength, elementPerRow]);

    for (let i = 0; i < length.length; ++i) {
      const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
      const indices = [0, previousLength, 0];
      const sizes = [1, length[i], elementPerRow];
      tensors[i] = (0, _tfjsCore.reshape)((0, _tfjsCore.slice)(tensor, indices, sizes), outputElementShape);
    }

    tensor.dispose();
    return tensors;
  });
  const list = new TensorList([], elementShape, tensor.dtype, length.length);

  for (let i = 0; i < tensors.length; i++) {
    list.setItem(i, tensors[i]);
  }

  return list;
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./tensor_utils":"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var _tensor_array = require("../../executor/tensor_array");

var _tensor_list = require("../../executor/tensor_list");

var _utils = require("./utils");

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const executeOp = async (node, tensorMap, context) => {
  switch (node.op) {
    case 'If':
    case 'StatelessIf':
      {
        const thenFunc = (0, _utils.getParamValue)('thenBranch', node, tensorMap, context);
        const elseFunc = (0, _utils.getParamValue)('elseBranch', node, tensorMap, context);
        const cond = (0, _utils.getParamValue)('cond', node, tensorMap, context);
        const args = (0, _utils.getParamValue)('args', node, tensorMap, context);
        const condValue = await cond.data();

        if (condValue[0]) {
          return context.functionMap[thenFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
        } else {
          return context.functionMap[elseFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
        }
      }

    case 'While':
    case 'StatelessWhile':
      {
        const bodyFunc = (0, _utils.getParamValue)('body', node, tensorMap, context);
        const condFunc = (0, _utils.getParamValue)('cond', node, tensorMap, context);
        const args = (0, _utils.getParamValue)('args', node, tensorMap, context); // Calculate the condition of the loop

        const condResult = await context.functionMap[condFunc].executeFunctionAsync(args, context.tensorArrayMap, context.tensorListMap);
        const argIds = args.map(tensor => tensor.id);
        let condValue = await condResult[0].data(); // Dispose the intermediate tensors for condition function

        condResult.forEach(tensor => {
          if (!tensor.kept && argIds.indexOf(tensor.id) === -1) {
            tensor.dispose();
          }
        });
        let result = args;

        while (condValue[0]) {
          // Record the previous result for intermediate tensor tracking
          const origResult = result; // Execution the body of the loop

          result = await context.functionMap[bodyFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
          const resultIds = result.map(tensor => tensor.id); // Dispose the intermediate tensor for body function that is not global
          // kept, not input/output of the body function

          origResult.forEach(tensor => {
            if (!tensor.kept && argIds.indexOf(tensor.id) === -1 && resultIds.indexOf(tensor.id) === -1) {
              tensor.dispose();
            }
          }); // Recalcuate the condition of the loop using the latest results.

          const condResult = await context.functionMap[condFunc].executeFunctionAsync(result, context.tensorArrayMap, context.tensorListMap);
          condValue = await condResult[0].data(); // Dispose the intermediate tensors for condition function

          condResult.forEach(tensor => {
            if (!tensor.kept && argIds.indexOf(tensor.id) === -1 && resultIds.indexOf(tensor.id) === -1) {
              tensor.dispose();
            }
          });
        }

        return result;
      }

    case 'LoopCond':
      {
        const pred = (0, _utils.getParamValue)('pred', node, tensorMap, context);
        return [(0, _utils.cloneTensor)(pred)];
      }

    case 'Switch':
      {
        const pred = (0, _utils.getParamValue)('pred', node, tensorMap, context);
        let data = (0, _utils.getParamValue)('data', node, tensorMap, context);

        if (!data.kept) {
          data = (0, _utils.cloneTensor)(data);
        } // Outputs nodes :0 => false, :1 => true


        return (await pred.data())[0] ? [undefined, data] : [data, undefined];
      }

    case 'Merge':
      {
        const inputName = node.inputNames.find(name => (0, _utils.getTensor)(name, tensorMap, context) !== undefined);

        if (inputName) {
          const data = (0, _utils.getTensor)(inputName, tensorMap, context);
          return [(0, _utils.cloneTensor)(data)];
        }

        return undefined;
      }

    case 'Enter':
      {
        const frameId = (0, _utils.getParamValue)('frameName', node, tensorMap, context);
        const data = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        context.enterFrame(frameId);
        return [(0, _utils.cloneTensor)(data)];
      }

    case 'Exit':
      {
        const data = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        context.exitFrame();
        return [(0, _utils.cloneTensor)(data)];
      }

    case 'NextIteration':
      {
        const data = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        context.nextIteration();
        return [(0, _utils.cloneTensor)(data)];
      }

    case 'TensorArrayV3':
      {
        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        const dtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const dynamicSize = (0, _utils.getParamValue)('dynamicSize', node, tensorMap, context);
        const clearAfterRead = (0, _utils.getParamValue)('clearAfterRead', node, tensorMap, context);
        const identicalElementShapes = (0, _utils.getParamValue)('identicalElementShapes', node, tensorMap, context);
        const name = (0, _utils.getParamValue)('name', node, tensorMap, context);
        const tensorArray = new _tensor_array.TensorArray(name, dtype, size, elementShape, identicalElementShapes, dynamicSize, clearAfterRead);
        context.addTensorArray(tensorArray);
        return [tensorArray.idTensor, (0, _tfjsCore.scalar)(1.0)];
      }

    case 'TensorArrayWriteV3':
      {
        const id = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const index = (0, _utils.getParamValue)('index', node, tensorMap, context);
        const writeTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const writeTensorArray = context.getTensorArray(id.id);
        writeTensorArray.write(index, writeTensor);
        return [writeTensorArray.idTensor];
      }

    case 'TensorArrayReadV3':
      {
        const readId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const readIndex = (0, _utils.getParamValue)('index', node, tensorMap, context);
        const readTensorArray = context.getTensorArray(readId.id);
        return [readTensorArray.read(readIndex)];
      }

    case 'TensorArrayGatherV3':
      {
        const gatherId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const gatherIndices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const gatherDtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        const gatherTensorArray = context.getTensorArray(gatherId.id);
        return [gatherTensorArray.gather(gatherIndices, gatherDtype)];
      }

    case 'TensorArrayScatterV3':
      {
        const scatterId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const scatterIndices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const scatterTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const scatterTensorArray = context.getTensorArray(scatterId.id);
        scatterTensorArray.scatter(scatterIndices, scatterTensor);
        return [scatterTensorArray.idTensor];
      }

    case 'TensorArrayConcatV3':
      {
        const concatId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const concatTensorArray = context.getTensorArray(concatId.id);
        const concatDtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        return [concatTensorArray.concat(concatDtype)];
      }

    case 'TensorArraySplitV3':
      {
        const splitId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const splitTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const lengths = (0, _utils.getParamValue)('lengths', node, tensorMap, context);
        const splitTensorArray = context.getTensorArray(splitId.id);
        splitTensorArray.split(lengths, splitTensor);
        return [splitTensorArray.idTensor];
      }

    case 'TensorArraySizeV3':
      {
        const sizeId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const sizeTensorArray = context.getTensorArray(sizeId.id);
        return [(0, _tfjsCore.scalar)(sizeTensorArray.size(), 'int32')];
      }

    case 'TensorArrayCloseV3':
      {
        const closeId = (0, _utils.getParamValue)('tensorArrayId', node, tensorMap, context);
        const closeTensorArray = context.getTensorArray(closeId.id);
        closeTensorArray.clearAndClose();
        return [closeTensorArray.idTensor];
      }

    case 'TensorListSetItem':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const index = (0, _utils.getParamValue)('index', node, tensorMap, context);
        const writeTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        tensorList.setItem(index, writeTensor);
        return [tensorList.idTensor];
      }

    case 'TensorListGetItem':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const readIndex = (0, _utils.getParamValue)('index', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDType = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        return [tensorList.getItem(readIndex, elementShape, elementDType)];
      }

    case 'TensorListScatterV2':
    case 'TensorListScatter':
      {
        const scatterIndices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const scatterTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const numElements = (0, _utils.getParamValue)('numElements', node, tensorMap, context);
        const tensorList = (0, _tensor_list.scatter)(scatterTensor, scatterIndices, elementShape, numElements);
        context.addTensorList(tensorList);
        return [tensorList.idTensor];
      }

    case 'TensorListReserve':
    case 'EmptyTensorList':
      {
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDtype = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        let numElementsParam;

        if (node.op === 'TensorListReserve') {
          numElementsParam = 'numElements';
        } else {
          numElementsParam = 'maxNumElements';
        }

        const numElements = (0, _utils.getParamValue)(numElementsParam, node, tensorMap, context);
        const maxNumElements = node.op === 'TensorListReserve' ? -1 : numElements;
        const tensorList = (0, _tensor_list.reserve)(elementShape, elementDtype, numElements, maxNumElements);
        context.addTensorList(tensorList);
        return [tensorList.idTensor];
      }

    case 'TensorListGather':
      {
        const gatherId = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const gatherIndices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDtype = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        const tensorList = context.getTensorList(gatherId.id);
        return [tensorList.gather(gatherIndices, elementDtype, elementShape)];
      }

    case 'TensorListStack':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDtype = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        const numElements = (0, _utils.getParamValue)('numElements', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        return [tensorList.stack(elementShape, elementDtype, numElements)];
      }

    case 'TensorListFromTensor':
      {
        const tensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDtype = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        const tensorList = (0, _tensor_list.fromTensor)(tensor, elementShape, elementDtype);
        context.addTensorList(tensorList);
        return [tensorList.idTensor];
      }

    case 'TensorListConcat':
    case 'TensorListConcatV2':
      {
        const concatId = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const tensorList = context.getTensorList(concatId.id);
        const concatDtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        return [tensorList.concat(concatDtype, elementShape)];
      }

    case 'TensorListPushBack':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const writeTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        tensorList.pushBack(writeTensor);
        return [tensorList.idTensor];
      }

    case 'TensorListPopBack':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const elementDType = (0, _utils.getParamValue)('elementDType', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        return [tensorList.popBack(elementShape, elementDType)];
      }

    case 'TensorListSplit':
      {
        const splitTensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        const elementShape = (0, _utils.getParamValue)('elementShape', node, tensorMap, context);
        const lengths = (0, _utils.getParamValue)('lengths', node, tensorMap, context);
        const tensorList = (0, _tensor_list.split)(splitTensor, lengths, elementShape);
        context.addTensorList(tensorList);
        return [tensorList.idTensor];
      }

    case 'TensorListLength':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const tensorList = context.getTensorList(idTensor.id);
        return [(0, _tfjsCore.scalar)(tensorList.size(), 'int32')];
      }

    case 'TensorListResize':
      {
        const idTensor = (0, _utils.getParamValue)('tensorListId', node, tensorMap, context);
        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        const srcTensorList = context.getTensorList(idTensor.id);
        const destTensorList = srcTensorList.resize(size);
        context.addTensorList(destTensorList);
        return [destTensorList.idTensor];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'control';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../../executor/tensor_array":"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js","../../executor/tensor_list":"node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
function fusedConvAndDepthWiseParams(node, tensorMap, context) {
  const [extraOp, activationFunc] = (0, _utils.getParamValue)('fusedOps', node, tensorMap, context);
  const isBiasAdd = extraOp === 'biasadd';
  const noBiasAdd = !isBiasAdd;
  const isPrelu = activationFunc === 'prelu';
  const isBatchNorm = extraOp === 'fusedbatchnorm';
  const numArgs = (0, _utils.getParamValue)('numArgs', node, tensorMap, context);

  if (isBiasAdd) {
    if (isPrelu && numArgs !== 2) {
      throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu ' + 'must have two extra arguments: bias and alpha.');
    }

    if (!isPrelu && isBiasAdd && numArgs !== 1) {
      throw new Error('FusedConv2d and DepthwiseConv2d with BiasAdd must have ' + 'one extra argument: bias.');
    }
  }

  if (isBatchNorm) {
    throw new Error('FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported');
  }

  const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
  const pad = (0, _utils.getPadding)(node, tensorMap, context);
  const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
  const dilations = (0, _utils.getParamValue)('dilations', node, tensorMap, context);
  let [biasArg, preluArg] = (0, _utils.getParamValue)('args', node, tensorMap, context);

  if (noBiasAdd) {
    preluArg = biasArg;
    biasArg = undefined;
  }

  const leakyreluAlpha = (0, _utils.getParamValue)('leakyreluAlpha', node, tensorMap, context);
  return {
    stride,
    pad,
    dataFormat,
    dilations,
    biasArg,
    preluArg,
    activationFunc,
    leakyreluAlpha
  };
}

const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Conv1D':
      {
        const stride = (0, _utils.getParamValue)('stride', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilation = (0, _utils.getParamValue)('dilation', node, tensorMap, context);
        return [ops.conv1d((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), stride, pad, dataFormat, dilation)];
      }

    case 'Conv2D':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getPadding)(node, tensorMap, context);
        const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilations = (0, _utils.getParamValue)('dilations', node, tensorMap, context);
        return [ops.conv2d((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
      }

    case '_FusedConv2D':
      {
        const {
          stride,
          pad,
          dataFormat,
          dilations,
          biasArg,
          preluArg,
          activationFunc,
          leakyreluAlpha
        } = fusedConvAndDepthWiseParams(node, tensorMap, context);
        return [ops.fused.conv2d({
          x: (0, _utils.getParamValue)('x', node, tensorMap, context),
          filter: (0, _utils.getParamValue)('filter', node, tensorMap, context),
          strides: [stride[1], stride[2]],
          pad: pad,
          dataFormat: dataFormat,
          dilations: [dilations[1], dilations[2]],
          bias: biasArg,
          activation: activationFunc,
          preluActivationWeights: preluArg,
          leakyreluAlpha
        })];
      }

    case 'FusedDepthwiseConv2dNative':
      {
        const {
          stride,
          pad,
          dataFormat,
          dilations,
          biasArg,
          preluArg,
          activationFunc,
          leakyreluAlpha
        } = fusedConvAndDepthWiseParams(node, tensorMap, context);
        return [ops.fused.depthwiseConv2d({
          x: (0, _utils.getParamValue)('x', node, tensorMap, context),
          filter: (0, _utils.getParamValue)('filter', node, tensorMap, context),
          strides: [stride[1], stride[2]],
          pad: pad,
          dataFormat: dataFormat,
          dilations: [dilations[1], dilations[2]],
          bias: biasArg,
          activation: activationFunc,
          preluActivationWeights: preluArg,
          leakyreluAlpha
        })];
      }

    case 'Conv2DBackpropInput':
    case 'Conv2dTranspose':
      {
        const shape = (0, _utils.getParamValue)('outputShape', node, tensorMap, context);
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getPadding)(node, tensorMap, context);
        return [ops.conv2dTranspose((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), shape, [stride[1], stride[2]], pad)];
      }

    case 'DepthwiseConv2dNative':
    case 'DepthwiseConv2d':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getPadding)(node, tensorMap, context);
        const dilations = (0, _utils.getParamValue)('dilations', node, tensorMap, context);
        const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        return [ops.depthwiseConv2d((0, _utils.getParamValue)('input', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2]], pad, dataFormat, [dilations[1], dilations[2]])];
      }

    case 'Conv3D':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        const dilations = (0, _utils.getParamValue)('dilations', node, tensorMap, context);
        return [ops.conv3d((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), [stride[1], stride[2], stride[3]], pad, dataFormat, [dilations[1], dilations[2], dilations[3]])];
      }

    case 'AvgPool':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0, _utils.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.avgPool((0, _utils.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
      }

    case 'MaxPool':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0, _utils.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.maxPool((0, _utils.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
      }

    case 'MaxPoolWithArgmax':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0, _utils.getParamValue)('kernelSize', node, tensorMap, context);
        const includeBatchInIndex = (0, _utils.getParamValue)('includeBatchInIndex', node, tensorMap, context);
        const {
          result,
          indexes
        } = ops.maxPoolWithArgmax((0, _utils.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad, includeBatchInIndex);
        return [result, indexes];
      }

    case 'AvgPool3D':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0, _utils.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.avgPool3d((0, _utils.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
      }

    case 'MaxPool3D':
      {
        const stride = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const kernelSize = (0, _utils.getParamValue)('kernelSize', node, tensorMap, context);
        return [ops.maxPool3d((0, _utils.getParamValue)('x', node, tensorMap, context), [kernelSize[1], kernelSize[2], kernelSize[3]], [stride[1], stride[2], stride[3]], pad)];
      }

    case 'Dilation2D':
      {
        const strides = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const pad = (0, _utils.getParamValue)('pad', node, tensorMap, context);
        const dilations = (0, _utils.getParamValue)('dilations', node, tensorMap, context); // strides: [1, stride_height, stride_width, 1].

        const strideHeight = strides[1];
        const strideWidth = strides[2]; // dilations: [1, dilation_height, dilation_width, 1].

        const dilationHeight = dilations[1];
        const dilationWidth = dilations[2];
        return [ops.dilation2d((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('filter', node, tensorMap, context), [strideHeight, strideWidth], pad, [dilationHeight, dilationWidth], 'NHWC'
        /* dataFormat */
        )];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'convolution';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Fill':
      {
        const shape = (0, _utils.getParamValue)('shape', node, tensorMap, context);
        const dtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        const value = (0, _utils.getParamValue)('value', node, tensorMap, context);
        return [ops.fill(shape, value, dtype)];
      }

    case 'LinSpace':
      {
        const start = (0, _utils.getParamValue)('start', node, tensorMap, context);
        const stop = (0, _utils.getParamValue)('stop', node, tensorMap, context);
        const num = (0, _utils.getParamValue)('num', node, tensorMap, context);
        return [ops.linspace(start, stop, num)];
      }

    case 'Multinomial':
      {
        const logits = (0, _utils.getParamValue)('logits', node, tensorMap, context);
        const numSamples = (0, _utils.getParamValue)('numSamples', node, tensorMap, context);
        const seed = (0, _utils.getParamValue)('seed', node, tensorMap, context);
        return [ops.multinomial(logits, numSamples, seed)];
      }

    case 'OneHot':
      {
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const depth = (0, _utils.getParamValue)('depth', node, tensorMap, context);
        const onValue = (0, _utils.getParamValue)('onValue', node, tensorMap, context);
        const offValue = (0, _utils.getParamValue)('offValue', node, tensorMap, context);
        const dtype = (0, _utils.getParamValue)('dtype', node, tensorMap, context);
        return [ops.oneHot(indices, depth, onValue, offValue, dtype)];
      }

    case 'Ones':
      {
        return [ops.ones((0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('dtype', node, tensorMap, context))];
      }

    case 'OnesLike':
      {
        return [ops.onesLike((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'RandomStandardNormal':
      {
        return [ops.randomStandardNormal((0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('dtype', node, tensorMap, context), (0, _utils.getParamValue)('seed', node, tensorMap, context))];
      }

    case 'RandomUniform':
      {
        return [ops.randomUniform( // tslint:disable-next-line:no-any
        (0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('minval', node, tensorMap, context), (0, _utils.getParamValue)('maxval', node, tensorMap, context), (0, _utils.getParamValue)('dtype', node, tensorMap, context))];
      }

    case 'RandomUniformInt':
      {
        return [ops.randomUniformInt((0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('minval', node, tensorMap, context), (0, _utils.getParamValue)('maxval', node, tensorMap, context), (0, _utils.getParamValue)('seed', node, tensorMap, context))];
      }

    case 'Range':
      {
        const start = (0, _utils.getParamValue)('start', node, tensorMap, context);
        const stop = (0, _utils.getParamValue)('stop', node, tensorMap, context);
        const step = (0, _utils.getParamValue)('step', node, tensorMap, context);
        return [ops.range(start, stop, step, (0, _utils.getParamValue)('dtype', node, tensorMap, context))];
      }

    case 'TruncatedNormal':
      {
        const shape = (0, _utils.getParamValue)('shape', node, tensorMap, context);
        const mean = (0, _utils.getParamValue)('mean', node, tensorMap, context);
        const stdDev = (0, _utils.getParamValue)('stdDev', node, tensorMap, context);
        const seed = (0, _utils.getParamValue)('seed', node, tensorMap, context);
        return [ops.truncatedNormal(shape, mean, stdDev, (0, _utils.getParamValue)('dtype', node, tensorMap, context), seed)];
      }

    case 'Zeros':
      {
        return [ops.zeros((0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('dtype', node, tensorMap, context))];
      }

    case 'ZerosLike':
      {
        return [ops.zerosLike((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'creation';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
function nmsParams(node, tensorMap, context) {
  const boxes = (0, _utils.getParamValue)('boxes', node, tensorMap, context);
  const scores = (0, _utils.getParamValue)('scores', node, tensorMap, context);
  const maxOutputSize = (0, _utils.getParamValue)('maxOutputSize', node, tensorMap, context);
  const iouThreshold = (0, _utils.getParamValue)('iouThreshold', node, tensorMap, context);
  const scoreThreshold = (0, _utils.getParamValue)('scoreThreshold', node, tensorMap, context);
  const softNmsSigma = (0, _utils.getParamValue)('softNmsSigma', node, tensorMap, context);
  return {
    boxes,
    scores,
    maxOutputSize,
    iouThreshold,
    scoreThreshold,
    softNmsSigma
  };
}

const executeOp = async (node, tensorMap, context, resourceManager, ops = tfOps) => {
  switch (node.op) {
    case 'NonMaxSuppressionV5':
      {
        const {
          boxes,
          scores,
          maxOutputSize,
          iouThreshold,
          scoreThreshold,
          softNmsSigma
        } = nmsParams(node, tensorMap, context);
        const result = await ops.image.nonMaxSuppressionWithScoreAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
        return [result.selectedIndices, result.selectedScores];
      }

    case 'NonMaxSuppressionV4':
      {
        const {
          boxes,
          scores,
          maxOutputSize,
          iouThreshold,
          scoreThreshold
        } = nmsParams(node, tensorMap, context);
        const padToMaxOutputSize = (0, _utils.getParamValue)('padToMaxOutputSize', node, tensorMap, context);
        const result = await ops.image.nonMaxSuppressionPaddedAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
        return [result.selectedIndices, result.validOutputs];
      }

    case 'NonMaxSuppressionV3':
    case 'NonMaxSuppressionV2':
      {
        const {
          boxes,
          scores,
          maxOutputSize,
          iouThreshold,
          scoreThreshold
        } = nmsParams(node, tensorMap, context);
        return [await ops.image.nonMaxSuppressionAsync(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold)];
      }

    case 'Where':
      {
        const condition = ops.cast((0, _utils.getParamValue)('condition', node, tensorMap, context), 'bool');
        const result = [await ops.whereAsync(condition)];
        condition.dispose();
        return result;
      }

    case 'ListDiff':
      {
        return ops.setdiff1dAsync((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('y', node, tensorMap, context));
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'dynamic';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'LowerBound':
      {
        const sortedSequence = (0, _utils.getParamValue)('sortedSequence', node, tensorMap, context);
        const values = (0, _utils.getParamValue)('values', node, tensorMap, context);
        return [ops.lowerBound(sortedSequence, values)];
      }

    case 'TopKV2':
      {
        const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const k = (0, _utils.getParamValue)('k', node, tensorMap, context);
        const sorted = (0, _utils.getParamValue)('sorted', node, tensorMap, context);
        const result = ops.topk(x, k, sorted);
        return [result.values, result.indices];
      }

    case 'UpperBound':
      {
        const sortedSequence = (0, _utils.getParamValue)('sortedSequence', node, tensorMap, context);
        const values = (0, _utils.getParamValue)('values', node, tensorMap, context);
        return [ops.upperBound(sortedSequence, values)];
      }

    case 'Unique':
      {
        const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const result = ops.unique(x);
        return [result.values, result.indices];
      }

    case 'UniqueV2':
      {
        const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const result = ops.unique(x, axis);
        return [result.values, result.indices];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'evaluation';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Const':
      {
        return tensorMap[node.name];
      }

    case 'PlaceholderWithDefault':
      const def = (0, _utils.getParamValue)('default', node, tensorMap, context);
      return [(0, _utils.getTensor)(node.name, tensorMap, context) || def];

    case 'Placeholder':
      return [(0, _utils.getTensor)(node.name, tensorMap, context)];

    case 'Identity':
    case 'StopGradient':
    case 'FakeQuantWithMinMaxVars':
      {
        // This op is currently ignored.
        const data = (0, _utils.getParamValue)('x', node, tensorMap, context);
        return [(0, _utils.cloneTensor)(data)];
      }

    case 'IdentityN':
      return (0, _utils.getParamValue)('x', node, tensorMap, context).map(t => (0, _utils.cloneTensor)(t));

    case 'Snapshot':
      const snapshot = (0, _utils.getParamValue)('x', node, tensorMap, context);
      return [(0, _utils.cloneTensor)(snapshot)];

    case 'Shape':
      return [ops.tensor1d((0, _utils.getParamValue)('x', node, tensorMap, context).shape, 'int32')];

    case 'ShapeN':
      return (0, _utils.getParamValue)('x', node, tensorMap, context).map(t => ops.tensor1d(t.shape));

    case 'Size':
      return [ops.scalar((0, _utils.getParamValue)('x', node, tensorMap, context).size, 'int32')];

    case 'Rank':
      return [ops.scalar((0, _utils.getParamValue)('x', node, tensorMap, context).rank, 'int32')];

    case 'NoOp':
      return [ops.scalar(1)];

    case 'Print':
      const input = (0, _utils.getParamValue)('x', node, tensorMap, context);
      const data = (0, _utils.getParamValue)('data', node, tensorMap, context);
      const message = (0, _utils.getParamValue)('message', node, tensorMap, context);
      const summarize = (0, _utils.getParamValue)('summarize', node, tensorMap, context);
      console.warn('The graph has a tf.print() operation,' + 'usually used for debugging, which slows down performance.');
      console.log(message);

      for (let i = 0; i < data.length; i++) {
        console.log(Array.prototype.slice.call(data[i].dataSync()).slice(0, summarize));
      }

      return [input];

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'graph';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashTable = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist

/**
 * Hashtable contains a set of tensors, which can be accessed by key.
 */
class HashTable {
  get id() {
    return this.handle.id;
  }
  /**
   * Constructor of HashTable. Creates a hash table.
   *
   * @param keyDType `dtype` of the table keys.
   * @param valueDType `dtype` of the table values.
   */


  constructor(keyDType, valueDType) {
    this.keyDType = keyDType;
    this.valueDType = valueDType;
    this.handle = (0, _tfjsCore.scalar)(0); // tslint:disable-next-line: no-any

    this.tensorMap = new Map();
    (0, _tfjsCore.keep)(this.handle);
  }
  /**
   * Dispose the tensors and handle and clear the hashtable.
   */


  clearAndClose() {
    this.tensorMap.forEach(value => value.dispose());
    this.tensorMap.clear();
    this.handle.dispose();
  }
  /**
   * The number of items in the hash table.
   */


  size() {
    return this.tensorMap.size;
  }
  /**
   * The number of items in the hash table as a rank-0 tensor.
   */


  tensorSize() {
    return tfOps.scalar(this.size(), 'int32');
  }
  /**
   * Replaces the contents of the table with the specified keys and values.
   * @param keys Keys to store in the hashtable.
   * @param values Values to store in the hashtable.
   */


  async import(keys, values) {
    this.checkKeyAndValueTensor(keys, values); // We only store the primitive values of the keys, this allows lookup
    // to be O(1).

    const $keys = await keys.data(); // Clear the hashTable before inserting new values.

    this.tensorMap.forEach(value => value.dispose());
    this.tensorMap.clear();
    return (0, _tfjsCore.tidy)(() => {
      const $values = (0, _tfjsCore.unstack)(values);
      const keysLength = $keys.length;
      const valuesLength = $values.length;

      _tfjsCore.util.assert(keysLength === valuesLength, () => `The number of elements doesn't match, keys has ` + `${keysLength} elements, the values has ${valuesLength} ` + `elements.`);

      for (let i = 0; i < keysLength; i++) {
        const key = $keys[i];
        const value = $values[i];
        (0, _tfjsCore.keep)(value);
        this.tensorMap.set(key, value);
      }

      return this.handle;
    });
  }
  /**
   * Looks up keys in a hash table, outputs the corresponding values.
   *
   * Performs batch lookups, for every element in the key tensor, `find`
   * stacks the corresponding value into the return tensor.
   *
   * If an element is not present in the table, the given `defaultValue` is
   * used.
   *
   * @param keys Keys to look up. Must have the same type as the keys of the
   *     table.
   * @param defaultValue The scalar `defaultValue` is the value output for keys
   *     not present in the table. It must also be of the same type as the
   *     table values.
   */


  async find(keys, defaultValue) {
    this.checkKeyAndValueTensor(keys, defaultValue);
    const $keys = await keys.data();
    return (0, _tfjsCore.tidy)(() => {
      const result = [];

      for (let i = 0; i < $keys.length; i++) {
        const key = $keys[i];
        const value = this.findWithDefault(key, defaultValue);
        result.push(value);
      }

      return (0, _tfjsCore.stack)(result);
    });
  } // tslint:disable-next-line: no-any


  findWithDefault(key, defaultValue) {
    const result = this.tensorMap.get(key);
    return result != null ? result : defaultValue;
  }

  checkKeyAndValueTensor(key, value) {
    if (key.dtype !== this.keyDType) {
      throw new Error(`Expect key dtype ${this.keyDType}, but got ` + `${key.dtype}`);
    }

    if (value.dtype !== this.valueDType) {
      throw new Error(`Expect value dtype ${this.valueDType}, but got ` + `${value.dtype}`);
    }
  }

}

exports.HashTable = HashTable;
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var _hash_table = require("../../executor/hash_table");

var _utils = require("./utils");

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const executeOp = async (node, tensorMap, context, resourceManager) => {
  switch (node.op) {
    case 'HashTable':
    case 'HashTableV2':
      {
        const existingTableHandle = resourceManager.getHashTableHandleByName(node.name); // Table is shared with initializer.

        if (existingTableHandle != null) {
          return [existingTableHandle];
        } else {
          const keyDType = (0, _utils.getParamValue)('keyDType', node, tensorMap, context);
          const valueDType = (0, _utils.getParamValue)('valueDType', node, tensorMap, context);
          const hashTable = new _hash_table.HashTable(keyDType, valueDType);
          resourceManager.addHashTable(node.name, hashTable);
          return [hashTable.handle];
        }
      }

    case 'InitializeTable':
    case 'InitializeTableV2':
    case 'LookupTableImport':
    case 'LookupTableImportV2':
      {
        const handle = (0, _utils.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
        const keys = (0, _utils.getParamValue)('keys', node, tensorMap, context);
        const values = (0, _utils.getParamValue)('values', node, tensorMap, context);
        const hashTable = resourceManager.getHashTableById(handle.id);
        return [await hashTable.import(keys, values)];
      }

    case 'LookupTableFind':
    case 'LookupTableFindV2':
      {
        const handle = (0, _utils.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
        const keys = (0, _utils.getParamValue)('keys', node, tensorMap, context);
        const defaultValue = (0, _utils.getParamValue)('defaultValue', node, tensorMap, context);
        const hashTable = resourceManager.getHashTableById(handle.id);
        return [await hashTable.find(keys, defaultValue)];
      }

    case 'LookupTableSize':
    case 'LookupTableSizeV2':
      {
        const handle = (0, _utils.getParamValue)('tableHandle', node, tensorMap, context, resourceManager);
        const hashTable = resourceManager.getHashTableById(handle.id);
        return [hashTable.tensorSize()];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'hash_table';
exports.CATEGORY = CATEGORY;
},{"../../executor/hash_table":"node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'ResizeBilinear':
      {
        const images = (0, _utils.getParamValue)('images', node, tensorMap, context);
        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        const alignCorners = (0, _utils.getParamValue)('alignCorners', node, tensorMap, context);
        const halfPixelCenters = (0, _utils.getParamValue)('halfPixelCenters', node, tensorMap, context);
        return [ops.image.resizeBilinear(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
      }

    case 'ResizeNearestNeighbor':
      {
        const images = (0, _utils.getParamValue)('images', node, tensorMap, context);
        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        const alignCorners = (0, _utils.getParamValue)('alignCorners', node, tensorMap, context);
        const halfPixelCenters = (0, _utils.getParamValue)('halfPixelCenters', node, tensorMap, context);
        return [ops.image.resizeNearestNeighbor(images, [size[0], size[1]], alignCorners, halfPixelCenters)];
      }

    case 'CropAndResize':
      {
        const image = (0, _utils.getParamValue)('image', node, tensorMap, context);
        const boxes = (0, _utils.getParamValue)('boxes', node, tensorMap, context);
        const boxInd = (0, _utils.getParamValue)('boxInd', node, tensorMap, context);
        const cropSize = (0, _utils.getParamValue)('cropSize', node, tensorMap, context);
        const method = (0, _utils.getParamValue)('method', node, tensorMap, context);
        const extrapolationValue = (0, _utils.getParamValue)('extrapolationValue', node, tensorMap, context);
        return [ops.image.cropAndResize(image, boxes, boxInd, cropSize, method, extrapolationValue)];
      }

    case 'ImageProjectiveTransformV3':
      {
        const images = (0, _utils.getParamValue)('images', node, tensorMap, context);
        const transforms = (0, _utils.getParamValue)('transforms', node, tensorMap, context);
        const outputShape = (0, _utils.getParamValue)('outputShape', node, tensorMap, context);
        const fillValue = (0, _utils.getParamValue)('fillValue', node, tensorMap, context);
        const interpolation = (0, _utils.getParamValue)('interpolation', node, tensorMap, context);
        const fillMode = (0, _utils.getParamValue)('fillMode', node, tensorMap, context);
        return [ops.image.transform(images, transforms, interpolation.toLowerCase(), fillMode.toLowerCase(), fillValue, outputShape)];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'image';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Equal':
      {
        return [ops.equal((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'NotEqual':
      {
        return [ops.notEqual((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Greater':
      {
        return [ops.greater((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'GreaterEqual':
      {
        return [ops.greaterEqual((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Less':
      {
        return [ops.less((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'LessEqual':
      {
        return [ops.lessEqual((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'LogicalAnd':
      {
        return [ops.logicalAnd((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'LogicalNot':
      {
        return [ops.logicalNot((0, _utils.getParamValue)('a', node, tensorMap, context))];
      }

    case 'LogicalOr':
      {
        return [ops.logicalOr((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'Select':
    case 'SelectV2':
      {
        return [ops.where((0, _utils.getParamValue)('condition', node, tensorMap, context), (0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    case 'BitwiseAnd':
      {
        return [ops.bitwiseAnd((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'logical';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'BatchMatMul':
    case 'BatchMatMulV2':
    case 'MatMul':
      return [ops.matMul((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('b', node, tensorMap, context), (0, _utils.getParamValue)('transposeA', node, tensorMap, context), (0, _utils.getParamValue)('transposeB', node, tensorMap, context))];

    case 'Einsum':
      return [ops.einsum((0, _utils.getParamValue)('equation', node, tensorMap, context), ...(0, _utils.getParamValue)('tensors', node, tensorMap, context))];

    case 'Transpose':
      return [ops.transpose((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('perm', node, tensorMap, context))];

    case '_FusedMatMul':
      const [extraOp, activationFunc] = (0, _utils.getParamValue)('fusedOps', node, tensorMap, context);
      const isBiasAdd = extraOp === 'biasadd';
      const isPrelu = activationFunc === 'prelu';
      const numArgs = (0, _utils.getParamValue)('numArgs', node, tensorMap, context);
      const leakyreluAlpha = (0, _utils.getParamValue)('leakyreluAlpha', node, tensorMap, context);

      if (isBiasAdd) {
        if (isPrelu && numArgs !== 2) {
          throw new Error('Fused MatMul with BiasAdd and Prelu must have two ' + 'extra arguments: bias and alpha.');
        }

        if (!isPrelu && numArgs !== 1) {
          throw new Error('Fused MatMul with BiasAdd must have one extra argument: bias.');
        }
      }

      const [biasArg, preluArg] = (0, _utils.getParamValue)('args', node, tensorMap, context);
      return [ops.fused.matMul({
        a: (0, _utils.getParamValue)('a', node, tensorMap, context),
        b: (0, _utils.getParamValue)('b', node, tensorMap, context),
        transposeA: (0, _utils.getParamValue)('transposeA', node, tensorMap, context),
        transposeB: (0, _utils.getParamValue)('transposeB', node, tensorMap, context),
        bias: biasArg,
        activation: activationFunc,
        preluActivationWeights: preluArg,
        leakyreluAlpha
      })];

    case 'MatrixBandPart':
      return [ops.linalg.bandPart((0, _utils.getParamValue)('a', node, tensorMap, context), (0, _utils.getParamValue)('numLower', node, tensorMap, context), (0, _utils.getParamValue)('numUpper', node, tensorMap, context))];

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'matrices';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'EuclideanNorm':
      return [ops.euclideanNorm((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('axis', node, tensorMap, context), (0, _utils.getParamValue)('keepDims', node, tensorMap, context))];

    case 'FusedBatchNorm':
    case 'FusedBatchNormV2':
      {
        return [ops.batchNorm((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('mean', node, tensorMap, context), (0, _utils.getParamValue)('variance', node, tensorMap, context), (0, _utils.getParamValue)('offset', node, tensorMap, context), (0, _utils.getParamValue)('scale', node, tensorMap, context), (0, _utils.getParamValue)('epsilon', node, tensorMap, context))];
      }

    case 'FusedBatchNormV3':
      {
        return [ops.batchNorm((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('mean', node, tensorMap, context), (0, _utils.getParamValue)('variance', node, tensorMap, context), (0, _utils.getParamValue)('offset', node, tensorMap, context), (0, _utils.getParamValue)('scale', node, tensorMap, context), (0, _utils.getParamValue)('epsilon', node, tensorMap, context))];
      }

    case 'LRN':
      {
        return [ops.localResponseNormalization((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('radius', node, tensorMap, context), (0, _utils.getParamValue)('bias', node, tensorMap, context), (0, _utils.getParamValue)('alpha', node, tensorMap, context), (0, _utils.getParamValue)('beta', node, tensorMap, context))];
      }

    case 'Softmax':
      {
        return [ops.softmax((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'LogSoftmax':
      {
        return [ops.logSoftmax((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'normalization';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'RaggedGather':
      {
        const {
          outputNestedSplits,
          outputDenseValues
        } = ops.raggedGather((0, _utils.getParamValue)('paramsNestedSplits', node, tensorMap, context), (0, _utils.getParamValue)('paramsDenseValues', node, tensorMap, context), (0, _utils.getParamValue)('indices', node, tensorMap, context), (0, _utils.getParamValue)('outputRaggedRank', node, tensorMap, context));
        return outputNestedSplits.concat(outputDenseValues);
      }

    case 'RaggedRange':
      {
        const {
          rtNestedSplits,
          rtDenseValues
        } = ops.raggedRange((0, _utils.getParamValue)('starts', node, tensorMap, context), (0, _utils.getParamValue)('limits', node, tensorMap, context), (0, _utils.getParamValue)('splits', node, tensorMap, context));
        return [rtNestedSplits, rtDenseValues];
      }

    case 'RaggedTensorToTensor':
      {
        return [ops.raggedTensorToTensor((0, _utils.getParamValue)('shape', node, tensorMap, context), (0, _utils.getParamValue)('values', node, tensorMap, context), (0, _utils.getParamValue)('defaultValue', node, tensorMap, context), (0, _utils.getParamValue)('rowPartitionTensors', node, tensorMap, context), (0, _utils.getParamValue)('rowPartitionTypes', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'ragged';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Max':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.max((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'Mean':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.mean((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'Min':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.min((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'Sum':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.sum((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'All':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.all((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'Any':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.any((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'ArgMax':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        return [ops.argMax((0, _utils.getParamValue)('x', node, tensorMap, context), axis)];
      }

    case 'ArgMin':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        return [ops.argMin((0, _utils.getParamValue)('x', node, tensorMap, context), axis)];
      }

    case 'Prod':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const keepDims = (0, _utils.getParamValue)('keepDims', node, tensorMap, context);
        return [ops.prod((0, _utils.getParamValue)('x', node, tensorMap, context), axis, keepDims)];
      }

    case 'Cumprod':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const exclusive = (0, _utils.getParamValue)('exclusive', node, tensorMap, context);
        const reverse = (0, _utils.getParamValue)('reverse', node, tensorMap, context);
        return [ops.cumprod((0, _utils.getParamValue)('x', node, tensorMap, context), axis, exclusive, reverse)];
      }

    case 'Cumsum':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const exclusive = (0, _utils.getParamValue)('exclusive', node, tensorMap, context);
        const reverse = (0, _utils.getParamValue)('reverse', node, tensorMap, context);
        return [ops.cumsum((0, _utils.getParamValue)('x', node, tensorMap, context), axis, exclusive, reverse)];
      }

    case 'Bincount':
      const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
      const weights = (0, _utils.getParamValue)('weights', node, tensorMap, context);
      const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
      return [ops.bincount(x, weights, size)];

    case 'DenseBincount':
      {
        const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const weights = (0, _utils.getParamValue)('weights', node, tensorMap, context);
        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        const binaryOutput = (0, _utils.getParamValue)('binaryOutput', node, tensorMap, context);
        return [ops.denseBincount(x, weights, size, binaryOutput)];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'reduction';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'ConcatV2':
    case 'Concat':
      {
        const n = (0, _utils.getParamValue)('n', node, tensorMap, context);
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        let inputs = (0, _utils.getParamValue)('tensors', node, tensorMap, context);
        inputs = inputs.slice(0, n);
        return [ops.concat(inputs, axis)];
      }

    case 'Gather':
      {
        const input = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        return [ops.gather(input, ops.cast(indices, 'int32'), 0)];
      }

    case 'GatherV2':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const batchDims = (0, _utils.getParamValue)('batchDims', node, tensorMap, context);
        const input = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        return [ops.gather(input, ops.cast(indices, 'int32'), axis, batchDims)];
      }

    case 'Reverse':
      {
        const dims = (0, _utils.getParamValue)('dims', node, tensorMap, context);
        const axis = [];

        for (let i = 0; i < dims.length; i++) {
          if (dims[i]) {
            axis.push(i);
          }
        }

        const input = (0, _utils.getParamValue)('x', node, tensorMap, context);
        return [ops.reverse(input, axis)];
      }

    case 'ReverseV2':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const input = (0, _utils.getParamValue)('x', node, tensorMap, context);
        return [ops.reverse(input, axis)];
      }

    case 'Slice':
      {
        // tslint:disable-next-line:no-any
        const begin = (0, _utils.getParamValue)('begin', node, tensorMap, context); // tslint:disable-next-line:no-any

        const size = (0, _utils.getParamValue)('size', node, tensorMap, context);
        return [ops.slice((0, _utils.getParamValue)('x', node, tensorMap, context), begin, size)];
      }

    case 'StridedSlice':
      {
        const begin = (0, _utils.getParamValue)('begin', node, tensorMap, context);
        const end = (0, _utils.getParamValue)('end', node, tensorMap, context);
        const strides = (0, _utils.getParamValue)('strides', node, tensorMap, context);
        const beginMask = (0, _utils.getParamValue)('beginMask', node, tensorMap, context);
        const endMask = (0, _utils.getParamValue)('endMask', node, tensorMap, context);
        const ellipsisMask = (0, _utils.getParamValue)('ellipsisMask', node, tensorMap, context);
        const newAxisMask = (0, _utils.getParamValue)('newAxisMask', node, tensorMap, context);
        const shrinkAxisMask = (0, _utils.getParamValue)('shrinkAxisMask', node, tensorMap, context);
        const tensor = (0, _utils.getParamValue)('x', node, tensorMap, context);
        return [ops.stridedSlice(tensor, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask)];
      }

    case 'Pack':
      {
        return (0, _tfjsCore.tidy)(() => {
          const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
          const tensors = (0, _utils.getParamValue)('tensors', node, tensorMap, context); // Reshape the tensors to the first tensor's shape if they don't
          // match.

          const shape = tensors[0].shape;
          const squeezedShape = ops.squeeze(tensors[0]).shape;
          const mapped = tensors.map(tensor => {
            const sameShape = _tfjsCore.util.arraysEqual(tensor.shape, shape);

            if (!sameShape && !_tfjsCore.util.arraysEqual(ops.squeeze(tensor).shape, squeezedShape)) {
              throw new Error('the input tensors shape does not match');
            }

            return sameShape ? tensor : ops.reshape(tensor, shape);
          });
          return [ops.stack(mapped, axis)];
        });
      }

    case 'Unpack':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const tensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        return ops.unstack(tensor, axis);
      }

    case 'Tile':
      {
        const reps = (0, _utils.getParamValue)('reps', node, tensorMap, context);
        return [ops.tile((0, _utils.getParamValue)('x', node, tensorMap, context), reps)];
      }

    case 'Split':
    case 'SplitV':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        const numOrSizeSplits = (0, _utils.getParamValue)('numOrSizeSplits', node, tensorMap, context);
        const tensor = (0, _utils.getParamValue)('x', node, tensorMap, context);
        return ops.split(tensor, numOrSizeSplits, axis);
      }

    case 'ScatterNd':
      {
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const values = (0, _utils.getParamValue)('values', node, tensorMap, context);
        const shape = (0, _utils.getParamValue)('shape', node, tensorMap, context);
        return [ops.scatterND(indices, values, shape)];
      }

    case 'GatherNd':
      {
        const x = (0, _utils.getParamValue)('x', node, tensorMap, context);
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        return [ops.gatherND(x, indices)];
      }

    case 'SparseToDense':
      {
        const indices = (0, _utils.getParamValue)('sparseIndices', node, tensorMap, context);
        const shape = (0, _utils.getParamValue)('outputShape', node, tensorMap, context);
        const sparseValues = (0, _utils.getParamValue)('sparseValues', node, tensorMap, context);
        const defaultValue = (0, _utils.getParamValue)('defaultValue', node, tensorMap, context);
        return [ops.sparseToDense(indices, sparseValues, shape, sparseValues.dtype === defaultValue.dtype ? defaultValue : ops.cast(defaultValue, sparseValues.dtype))];
      }

    case 'TensorScatterUpdate':
      {
        const indices = (0, _utils.getParamValue)('indices', node, tensorMap, context);
        const values = (0, _utils.getParamValue)('values', node, tensorMap, context);
        const tensor = (0, _utils.getParamValue)('tensor', node, tensorMap, context);
        return [ops.tensorScatterUpdate(tensor, indices, values)];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'slice_join';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'SparseFillEmptyRows':
      {
        const {
          outputIndices,
          outputValues,
          emptyRowIndicator,
          reverseIndexMap
        } = ops.sparse.sparseFillEmptyRows((0, _utils.getParamValue)('indices', node, tensorMap, context), (0, _utils.getParamValue)('values', node, tensorMap, context), (0, _utils.getParamValue)('denseShape', node, tensorMap, context), (0, _utils.getParamValue)('defaultValue', node, tensorMap, context));
        return [outputIndices, outputValues, emptyRowIndicator, reverseIndexMap];
      }

    case 'SparseReshape':
      {
        const {
          outputIndices,
          outputShape
        } = ops.sparse.sparseReshape((0, _utils.getParamValue)('inputIndices', node, tensorMap, context), (0, _utils.getParamValue)('inputShape', node, tensorMap, context), (0, _utils.getParamValue)('newShape', node, tensorMap, context));
        return [outputIndices, outputShape];
      }

    case 'SparseSegmentMean':
      {
        const outputData = ops.sparse.sparseSegmentMean((0, _utils.getParamValue)('data', node, tensorMap, context), (0, _utils.getParamValue)('indices', node, tensorMap, context), (0, _utils.getParamValue)('segmentIds', node, tensorMap, context));
        return [outputData];
      }

    case 'SparseSegmentSum':
      {
        const outputData = ops.sparse.sparseSegmentSum((0, _utils.getParamValue)('data', node, tensorMap, context), (0, _utils.getParamValue)('indices', node, tensorMap, context), (0, _utils.getParamValue)('segmentIds', node, tensorMap, context));
        return [outputData];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'sparse';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'FFT':
      {
        return [ops.fft((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'IFFT':
      {
        return [ops.ifft((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'RFFT':
      {
        return [ops.rfft((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    case 'IRFFT':
      {
        return [ops.irfft((0, _utils.getParamValue)('x', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'spectral';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'StaticRegexReplace':
      {
        return [ops.string.staticRegexReplace((0, _utils.getParamValue)('input', node, tensorMap, context), (0, _utils.getParamValue)('pattern', node, tensorMap, context), (0, _utils.getParamValue)('rewrite', node, tensorMap, context), (0, _utils.getParamValue)('replaceGlobal', node, tensorMap, context))];
      }

    case 'StringNGrams':
      {
        const {
          nGrams,
          nGramsSplits
        } = ops.string.stringNGrams((0, _utils.getParamValue)('data', node, tensorMap, context), (0, _utils.getParamValue)('dataSplits', node, tensorMap, context), (0, _utils.getParamValue)('separator', node, tensorMap, context), (0, _utils.getParamValue)('nGramWidths', node, tensorMap, context), (0, _utils.getParamValue)('leftPad', node, tensorMap, context), (0, _utils.getParamValue)('rightPad', node, tensorMap, context), (0, _utils.getParamValue)('padWidth', node, tensorMap, context), (0, _utils.getParamValue)('preserveShortSequences', node, tensorMap, context));
        return [nGrams, nGramsSplits];
      }

    case 'StringSplit':
      {
        const {
          indices,
          values,
          shape
        } = ops.string.stringSplit((0, _utils.getParamValue)('input', node, tensorMap, context), (0, _utils.getParamValue)('delimiter', node, tensorMap, context), (0, _utils.getParamValue)('skipEmpty', node, tensorMap, context));
        return [indices, values, shape];
      }

    case 'StringToHashBucketFast':
      {
        const output = ops.string.stringToHashBucketFast((0, _utils.getParamValue)('input', node, tensorMap, context), (0, _utils.getParamValue)('numBuckets', node, tensorMap, context));
        return [output];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'string';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATEGORY = exports.executeOp = void 0;

var tfOps = _interopRequireWildcard(require("@tensorflow/tfjs-core/dist/ops/ops_for_converter"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// tslint:disable-next-line: no-imports-from-dist
const executeOp = (node, tensorMap, context, ops = tfOps) => {
  switch (node.op) {
    case 'Cast':
      {
        return [ops.cast((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('dtype', node, tensorMap, context))];
      }

    case 'ExpandDims':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        return [ops.expandDims((0, _utils.getParamValue)('x', node, tensorMap, context), axis)];
      }

    case 'Squeeze':
      {
        const axis = (0, _utils.getParamValue)('axis', node, tensorMap, context);
        return [ops.squeeze((0, _utils.getParamValue)('x', node, tensorMap, context), axis)];
      }

    case 'Reshape':
      {
        return [ops.reshape((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('shape', node, tensorMap, context))];
      }

    case 'EnsureShape':
      {
        return [ops.ensureShape((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('shape', node, tensorMap, context))];
      }

    case 'MirrorPad':
      {
        return [ops.mirrorPad((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('padding', node, tensorMap, context), (0, _utils.getParamValue)('mode', node, tensorMap, context))];
      }

    case 'PadV2':
    case 'Pad':
      {
        return [ops.pad((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('padding', node, tensorMap, context), (0, _utils.getParamValue)('constantValue', node, tensorMap, context))];
      }

    case 'SpaceToBatchND':
      {
        const blockShape = (0, _utils.getParamValue)('blockShape', node, tensorMap, context);
        const paddings = (0, _utils.getParamValue)('paddings', node, tensorMap, context);
        return [ops.spaceToBatchND((0, _utils.getParamValue)('x', node, tensorMap, context), blockShape, paddings)];
      }

    case 'BatchToSpaceND':
      {
        const blockShape = (0, _utils.getParamValue)('blockShape', node, tensorMap, context);
        const crops = (0, _utils.getParamValue)('crops', node, tensorMap, context);
        return [ops.batchToSpaceND((0, _utils.getParamValue)('x', node, tensorMap, context), blockShape, crops)];
      }

    case 'DepthToSpace':
      {
        const blockSize = (0, _utils.getParamValue)('blockSize', node, tensorMap, context);
        const dataFormat = (0, _utils.getParamValue)('dataFormat', node, tensorMap, context).toUpperCase();
        return [ops.depthToSpace((0, _utils.getParamValue)('x', node, tensorMap, context), blockSize, dataFormat)];
      }

    case 'BroadcastTo':
      {
        return [ops.broadcastTo((0, _utils.getParamValue)('x', node, tensorMap, context), (0, _utils.getParamValue)('shape', node, tensorMap, context))];
      }

    case 'BroadcastArgs':
      {
        return [ops.broadcastArgs((0, _utils.getParamValue)('s0', node, tensorMap, context), (0, _utils.getParamValue)('s1', node, tensorMap, context))];
      }

    default:
      throw TypeError(`Node type ${node.op} is not implemented`);
  }
};

exports.executeOp = executeOp;
const CATEGORY = 'transformation';
exports.CATEGORY = CATEGORY;
},{"@tensorflow/tfjs-core/dist/ops/ops_for_converter":"node_modules/@tensorflow/tfjs-core/dist/ops/ops_for_converter.js","./utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeOp = executeOp;

var tfc = _interopRequireWildcard(require("@tensorflow/tfjs-core"));

var _node_value_impl = require("./custom_op/node_value_impl");

var _register = require("./custom_op/register");

var arithmetic = _interopRequireWildcard(require("./executors/arithmetic_executor"));

var basicMath = _interopRequireWildcard(require("./executors/basic_math_executor"));

var control = _interopRequireWildcard(require("./executors/control_executor"));

var convolution = _interopRequireWildcard(require("./executors/convolution_executor"));

var creation = _interopRequireWildcard(require("./executors/creation_executor"));

var dynamic = _interopRequireWildcard(require("./executors/dynamic_executor"));

var evaluation = _interopRequireWildcard(require("./executors/evaluation_executor"));

var graph = _interopRequireWildcard(require("./executors/graph_executor"));

var hashTable = _interopRequireWildcard(require("./executors/hash_table_executor"));

var image = _interopRequireWildcard(require("./executors/image_executor"));

var logical = _interopRequireWildcard(require("./executors/logical_executor"));

var matrices = _interopRequireWildcard(require("./executors/matrices_executor"));

var normalization = _interopRequireWildcard(require("./executors/normalization_executor"));

var ragged = _interopRequireWildcard(require("./executors/ragged_executor"));

var reduction = _interopRequireWildcard(require("./executors/reduction_executor"));

var sliceJoin = _interopRequireWildcard(require("./executors/slice_join_executor"));

var sparse = _interopRequireWildcard(require("./executors/sparse_executor"));

var spectral = _interopRequireWildcard(require("./executors/spectral_executor"));

var string = _interopRequireWildcard(require("./executors/string_executor"));

var transformation = _interopRequireWildcard(require("./executors/transformation_executor"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Executes the op defined by the node object.
 * @param node
 * @param tensorMap contains tensors for executed nodes and weights
 * @param context contains tensors and information for running the current node.
 * @param resourceManager Optional. Contains global resources of the model.
 */
function executeOp(node, tensorMap, context, resourceManager, tidy = tfc.tidy) {
  const value = ((node, tensorMap, context) => {
    switch (node.category) {
      case 'arithmetic':
        return tidy(() => arithmetic.executeOp(node, tensorMap, context));

      case 'basic_math':
        return tidy(() => basicMath.executeOp(node, tensorMap, context));

      case 'control':
        return control.executeOp(node, tensorMap, context);

      case 'convolution':
        return tidy(() => convolution.executeOp(node, tensorMap, context));

      case 'creation':
        return tidy(() => creation.executeOp(node, tensorMap, context));

      case 'dynamic':
        return dynamic.executeOp(node, tensorMap, context);

      case 'evaluation':
        return tidy(() => evaluation.executeOp(node, tensorMap, context));

      case 'image':
        return tidy(() => image.executeOp(node, tensorMap, context));

      case 'graph':
        return tidy(() => graph.executeOp(node, tensorMap, context));

      case 'logical':
        return tidy(() => logical.executeOp(node, tensorMap, context));

      case 'matrices':
        return tidy(() => matrices.executeOp(node, tensorMap, context));

      case 'normalization':
        return tidy(() => normalization.executeOp(node, tensorMap, context));

      case 'ragged':
        return tidy(() => ragged.executeOp(node, tensorMap, context));

      case 'reduction':
        return tidy(() => reduction.executeOp(node, tensorMap, context));

      case 'slice_join':
        return tidy(() => sliceJoin.executeOp(node, tensorMap, context));

      case 'sparse':
        return tidy(() => sparse.executeOp(node, tensorMap, context));

      case 'spectral':
        return tidy(() => spectral.executeOp(node, tensorMap, context));

      case 'string':
        return tidy(() => string.executeOp(node, tensorMap, context));

      case 'transformation':
        return tidy(() => transformation.executeOp(node, tensorMap, context));

      case 'hash_table':
        return hashTable.executeOp(node, tensorMap, context, resourceManager);

      case 'custom':
        const opMapper = (0, _register.getRegisteredOp)(node.op);

        if (opMapper && opMapper.customExecutor) {
          return opMapper.customExecutor(new _node_value_impl.NodeValueImpl(node, tensorMap, context));
        } else {
          throw TypeError(`Custom op ${node.op} is not registered.`);
        }

      default:
        throw TypeError(`Unknown op '${node.op}'. File an issue at ` + `https://github.com/tensorflow/tfjs/issues so we can add it` + `, or register a custom execution with tf.registerOp()`);
    }
  })(node, tensorMap, context);

  if (tfc.util.isPromise(value)) {
    return value.then(data => [].concat(data));
  }

  return [].concat(value);
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./custom_op/node_value_impl":"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js","./custom_op/register":"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js","./executors/arithmetic_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js","./executors/basic_math_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js","./executors/control_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js","./executors/convolution_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js","./executors/creation_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js","./executors/dynamic_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js","./executors/evaluation_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js","./executors/graph_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js","./executors/hash_table_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js","./executors/image_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js","./executors/logical_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js","./executors/matrices_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js","./executors/normalization_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js","./executors/ragged_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js","./executors/reduction_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js","./executors/slice_join_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js","./executors/sparse_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js","./executors/spectral_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js","./executors/string_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js","./executors/transformation_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionContext = void 0;

/**
 * ExecutionContext captures the runtime environment of the node. It keeps
 * track of the current frame and iteration for the control flow ops.
 *
 * For example, typical Dynamic RNN model may contain loops, for which
 * TensorFlow will generate graphs with Enter/Exit nodes to control the
 * current execution frame, and NextIteration Nodes for iteration id increment.
 * For model with branch logic, TensorFLow will generate Switch/Merge ops.
 */
class ExecutionContext {
  constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}, parseNodeNameCache) {
    this.weightMap = weightMap;
    this.tensorArrayMap = tensorArrayMap;
    this.tensorListMap = tensorListMap;
    this.functionMap = functionMap;
    this.parseNodeNameCache = parseNodeNameCache;
    this.rootContext = {
      id: 0,
      frameName: '',
      iterationId: 0
    };
    this.contexts = [this.rootContext];
    this.lastId = 0;
    this.generateCurrentContextIds();
  }

  newFrame(id, frameName) {
    return {
      id,
      frameName,
      iterationId: 0
    };
  }
  /**
   * Set the current context
   * @param contexts: ExecutionContextInfo[] the current path of execution
   * frames
   */


  set currentContext(contexts) {
    if (this.contexts !== contexts) {
      this.contexts = contexts;
      this.generateCurrentContextIds();
    }
  }

  get currentContext() {
    return this.contexts;
  }
  /**
   * Returns the current context in string format.
   */


  get currentContextId() {
    return this._currentContextIds[0];
  }
  /**
   * Returns the current context and all parent contexts in string format.
   * This allow access to the nodes in the current and parent frames.
   */


  get currentContextIds() {
    return this._currentContextIds;
  }

  generateCurrentContextIds() {
    const names = [];

    for (let i = 0; i < this.contexts.length - 1; i++) {
      const contexts = this.contexts.slice(0, this.contexts.length - i);
      names.push(this.contextIdforContexts(contexts));
    }

    names.push('');
    this._currentContextIds = names;
  }

  contextIdforContexts(contexts) {
    return contexts ? contexts.map(context => context.id === 0 && context.iterationId === 0 ? '' : `${context.frameName}-${context.iterationId}`).join('/') : '';
  }
  /**
   * Enter a new frame, a new context is pushed on the current context list.
   * @param frameId new frame id
   */


  enterFrame(frameId) {
    if (this.contexts) {
      this.lastId++;
      this.contexts = this.contexts.slice();
      this.contexts.push(this.newFrame(this.lastId, frameId));

      this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
    }
  }
  /**
   * Exit the current frame, the last context is removed from the current
   * context list.
   */


  exitFrame() {
    if (this.contexts && this.contexts.length > 1) {
      this.contexts = this.contexts.slice();
      this.contexts.splice(-1);
      this.currentContextIds.shift();
    } else {
      throw new Error('Cannot exit frame, the context is empty');
    }
  }
  /**
   * Enter the next iteration of a loop, the iteration id of last context is
   * increased.
   */


  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice();
      this.lastId++;
      const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
      context.iterationId += 1;
      context.id = this.lastId;
      this.contexts.splice(-1, 1, context);

      this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else {
      throw new Error('Cannot increase frame iteration, the context is empty');
    }
  }

  getWeight(name) {
    return this.weightMap[name];
  }

  addTensorArray(tensorArray) {
    this.tensorArrayMap[tensorArray.id] = tensorArray;
  }

  getTensorArray(id) {
    return this.tensorArrayMap[id];
  }

  addTensorList(tensorList) {
    this.tensorListMap[tensorList.id] = tensorList;
  }

  getTensorList(id) {
    return this.tensorListMap[id];
  }

  dispose(keepIds) {
    for (const key in this.tensorArrayMap) {
      this.tensorArrayMap[key].clearAndClose(keepIds);
    }

    for (const key in this.tensorListMap) {
      this.tensorListMap[key].clearAndClose(keepIds);
    }
  }

}

exports.ExecutionContext = ExecutionContext;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExecutionSubgraph = getExecutionSubgraph;
exports.getNodesInTopologicalOrder = getNodesInTopologicalOrder;
exports.getNodeLiveUntilMap = getNodeLiveUntilMap;
exports.isControlFlow = isControlFlow;
exports.isDynamicShape = isDynamicShape;
exports.isHashTable = isHashTable;

var _utils = require("../operations/executors/utils");

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * Given graph inputs and desired outputs, find the minimal set of nodes
 * to execute in order to compute the outputs. In addition return other useful
 * info such:
 * - Missing inputs needed to compute the output.
 * - Whether the subgraph contains dynamic ops (control flow, dynamic shape).
 * - Alternative inputs in order to avoid async (dynamic op) execution.
 */
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
  const usedNodes = new Set();
  const missingInputs = [];
  let dynamicNode = null;
  let syncInputs = null; // Start with the outputs, going backwards and find all the nodes that are
  // needed to compute those outputs.

  const seen = new Set();
  const inputNodeNames = new Set(Object.keys(inputs).map(name => (0, _utils.parseNodeName)(name)[0]));
  initNodes = initNodes || [];
  const initNodeNames = new Set(initNodes.map(node => (0, _utils.parseNodeName)(node.name)[0]));
  const frontier = [...outputs];

  while (frontier.length > 0) {
    const node = frontier.pop();

    if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
      if (dynamicNode == null) {
        dynamicNode = node;
        syncInputs = dynamicNode.children.map(child => child.name).filter(name => usedNodes.has(name));
      }
    }

    usedNodes.add(node.name); // Weights are dead end since we already have their values.

    if (weightMap[node.name] != null) {
      continue;
    } // This node is a dead end since it's one of the user-provided inputs.


    if (inputNodeNames.has(node.name)) {
      continue;
    } // This node is a dead end since it doesn't have any inputs.


    if (initNodeNames.has(node.name)) {
      continue;
    }

    if (node.inputs.length === 0) {
      missingInputs.push(node.name);
      continue;
    }

    node.inputs.forEach(input => {
      // Don't add to the frontier if it is already there.
      if (seen.has(input.name)) {
        return;
      }

      seen.add(input.name);
      frontier.push(input);
    });
  }

  return {
    inputs,
    outputs,
    usedNodes,
    missingInputs,
    dynamicNode,
    syncInputs
  };
}
/**
 * Given the execution info, return a list of nodes in topological order that
 * need to be executed to compute the output.
 */


function getNodesInTopologicalOrder(graph, executionInfo) {
  const {
    usedNodes,
    inputs
  } = executionInfo;
  const inputNodes = Object.keys(inputs).map(name => (0, _utils.parseNodeName)(name)[0]).map(name => graph.nodes[name]);
  const initNodes = graph.initNodes || [];

  const isUsed = node => usedNodes.has(typeof node === 'string' ? node : node.name);

  function unique(nodes) {
    return [...new Map(nodes.map(node => [node.name, node])).values()];
  }

  const predefinedNodes = unique([...inputNodes, ...graph.weights, ...initNodes]).filter(isUsed);
  const allNodes = unique([...predefinedNodes, ...Object.values(graph.nodes)]).filter(isUsed);
  const nameToNode = new Map(allNodes.map(node => [node.name, node]));
  const inCounts = {};

  for (const node of allNodes) {
    inCounts[node.name] = inCounts[node.name] || 0;

    for (const child of node.children) {
      // When the child is unused, set in counts to infinity so that it will
      // never be decreased to 0 and added to the execution list.
      if (!isUsed(child)) {
        inCounts[child.name] = Number.POSITIVE_INFINITY;
      }

      inCounts[child.name] = (inCounts[child.name] || 0) + 1;
    }
  } // Build execution order for all used nodes regardless whether they are
  // predefined or not.


  const frontier = Object.entries(inCounts).filter(([, inCount]) => inCount === 0).map(([name]) => name);
  const orderedNodeNames = [...frontier];

  while (frontier.length > 0) {
    const nodeName = frontier.pop();
    const node = nameToNode.get(nodeName);

    for (const child of node.children.filter(isUsed)) {
      if (--inCounts[child.name] === 0) {
        orderedNodeNames.push(child.name);
        frontier.push(child.name);
      }
    }
  }

  const orderedNodes = orderedNodeNames.map(name => nameToNode.get(name));
  const filteredOrderedNodes = filterPredefinedReachableNodes(orderedNodes, predefinedNodes); // TODO: Turn validation on/off with tf env flag.

  validateNodesExecutionOrder(filteredOrderedNodes, predefinedNodes);
  return filteredOrderedNodes;
}
/**
 * This is a helper function of `getNodesInTopologicalOrder`.
 * Returns ordered nodes reachable by at least one predefined node.
 * This can help us filter out redundant nodes from the returned node list.
 * For example:
 * If we have four nodes with dependencies like this:
 *   a --> b --> c --> d
 * when node `c` is predefined (e.g. given as an input tensor), we can
 * skip node `a` and `b` since their outputs will never be used.
 *
 * @param orderedNodes Graph nodes in execution order.
 * @param predefinedNodes Graph inputs, weights, and init nodes. Nodes in this
 *     list must have distinct names.
 */


function filterPredefinedReachableNodes(orderedNodes, predefinedNodes) {
  const nameToNode = new Map(orderedNodes.map(node => [node.name, node])); // TODO: Filter out more nodes when >=2 nodes are predefined in a path.

  const stack = predefinedNodes.map(node => node.name);
  const predefinedReachableNodeNames = new Set(stack); // Perform a DFS starting from the set of all predefined nodes
  // to find the set of all nodes reachable from the predefined nodes.

  while (stack.length > 0) {
    const nodeName = stack.pop();
    const node = nameToNode.get(nodeName);

    for (const child of node.children) {
      if (!nameToNode.has(child.name) || predefinedReachableNodeNames.has(child.name)) {
        continue;
      }

      predefinedReachableNodeNames.add(child.name);
      stack.push(child.name);
    }
  } // Filter out unreachable nodes and build the ordered node list.


  const filteredOrderedNodes = orderedNodes.filter(node => predefinedReachableNodeNames.has(node.name));
  return filteredOrderedNodes;
}

class NodesExecutionOrderError extends Error {
  constructor(message) {
    super(`NodesExecutionOrderError: ${message}`);
  }

}
/**
 * This is a helper function of `getNodesInTopologicalOrder`.
 * Validates property: given nodes `a` and `b`, Order(a) > Order(b) if `a`
 * is a child of `b`. This function throws an error if validation fails.
 *
 * @param orderedNodes Graph nodes in execution order.
 * @param predefinedNodes Graph inputs, weights, and init nodes. Nodes in this
 *     list must have distinct names.
 */


function validateNodesExecutionOrder(orderedNodes, predefinedNodes) {
  const nodeNameToOrder = new Map(orderedNodes.map((node, order) => [node.name, order]));
  const predefinedNodeNames = new Set(predefinedNodes.map(node => node.name));

  const isPredefined = node => predefinedNodeNames.has(typeof node === 'string' ? node : node.name);

  const willBeExecutedNodeNames = new Set(orderedNodes.map(node => node.name));

  const willBeExecuted = node => willBeExecutedNodeNames.has(typeof node === 'string' ? node : node.name);

  for (const node of orderedNodes) {
    for (const child of node.children.filter(willBeExecuted)) {
      if (!nodeNameToOrder.has(child.name)) {
        throw new NodesExecutionOrderError(`Child ${child.name} of node ${node.name} is unreachable.`);
      }

      if (nodeNameToOrder.get(node.name) > nodeNameToOrder.get(child.name)) {
        throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run after its child ${child.name}.`);
      }
    }

    if (!isPredefined(node)) {
      for (const input of node.inputs) {
        if (!nodeNameToOrder.has(input.name)) {
          throw new NodesExecutionOrderError(`Input ${input.name} of node ${node.name} is unreachable.`);
        }

        if (nodeNameToOrder.get(input.name) > nodeNameToOrder.get(node.name)) {
          throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run before its input ${input.name}.`);
        }
      }
    }
  }
}
/**
 * Given the execution info, return a map from node name to the disposable
 * node name list after its execution.
 *
 * @returns A map from node name to disposable nodes after its
 *     execution. That is, for a node `x`, `nodeLiveUntilMap[x]` indicates
 *     all nodes which their intermediate tensors should be disposed after `x`
 *     being executed.
 */


function getNodeLiveUntilMap(orderedNodes) {
  const nodeNameToOrder = new Map(orderedNodes.map((node, order) => [node.name, order]));
  const INF_LIFE = Number.MAX_SAFE_INTEGER; // Make control flow nodes (and consequently their direct parents)
  // live forever since they're tricky to track correctly.

  const selfLifespans = orderedNodes.map((node, nodeOrder) => isControlFlow(node) ? INF_LIFE : nodeOrder);

  const getSelfLifeSpan = node => {
    const selfLife = selfLifespans[nodeNameToOrder.get(node.name)];

    if (selfLife == null) {
      // If nodeToOrder does not contain the node, it is unused or
      // unreachable in graph.
      return -1;
    }

    return selfLife;
  }; // `liveUntil[i]` points to the last node in the `orderedNodes` array that
  // may depend on tensors from node `i`. It indicates that all the
  // intermediate tensors from `orderedNodes[i]` should be disposed after
  // `orderedNodes[liveUntil[i]]` is executed.
  // A node lives long enough to pass on its tensors to its children.
  // It lives until at least `max(node's position, children's positions)`.


  const liveUntilOrders = orderedNodes.map((node, nodeOrder) => {
    return node.children.map(getSelfLifeSpan).reduce((a, b) => Math.max(a, b), selfLifespans[nodeOrder]);
  }); // liveUntilMap:
  // - Key: Name of a node `x`
  // - Values: All nodes whose intermediate tensors should be disposed
  //           after `x` is executed.

  const liveUntilMap = new Map();

  for (let nodeOrder = 0; nodeOrder < orderedNodes.length; ++nodeOrder) {
    const liveUntilOrder = liveUntilOrders[nodeOrder];

    if (liveUntilOrder === INF_LIFE) {
      continue;
    }

    const node = orderedNodes[nodeOrder];
    const liveUntilNode = orderedNodes[liveUntilOrder];

    if (!liveUntilMap.has(liveUntilNode.name)) {
      liveUntilMap.set(liveUntilNode.name, []);
    }

    liveUntilMap.get(liveUntilNode.name).push(node);
  }

  return liveUntilMap;
}

const CONTROL_FLOW_OPS = new Set(['Switch', 'Merge', 'Enter', 'Exit', 'NextIteration', 'StatelessIf', 'StatelessWhile', 'if', 'While']);
const DYNAMIC_SHAPE_OPS = new Set(['NonMaxSuppressionV2', 'NonMaxSuppressionV3', 'NonMaxSuppressionV5', 'Where']);
const HASH_TABLE_OPS = new Set(['HashTable', 'HashTableV2', 'LookupTableImport', 'LookupTableImportV2', 'LookupTableFind', 'LookupTableFindV2', 'LookupTableSize', 'LookupTableSizeV2']);

function isControlFlow(node) {
  return CONTROL_FLOW_OPS.has(node.op);
}

function isDynamicShape(node) {
  return DYNAMIC_SHAPE_OPS.has(node.op);
}

function isHashTable(node) {
  return HASH_TABLE_OPS.has(node.op);
}
},{"../operations/executors/utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphExecutor = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var _utils = require("../operations/executors/utils");

var _operation_executor = require("../operations/operation_executor");

var _execution_context = require("./execution_context");

var _model_analysis = require("./model_analysis");

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class GraphExecutor {
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }

  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }

  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }

  set weightMap(weightMap) {
    const weightIds = Object.keys(weightMap).map(key => weightMap[key].map(tensor => tensor.id));
    this._weightIds = [].concat(...weightIds);
    this._weightMap = weightMap;
  }
  /**
   * Set `ResourceManager` shared by executors of a model.
   * @param resourceManager: `ResourceManager` of the `GraphModel`.
   */


  set resourceManager(resourceManager) {
    this._resourceManager = resourceManager;
  }

  get inputs() {
    return this._inputs.map(node => {
      return {
        name: node.name,
        shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
        dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
      };
    });
  }

  get outputs() {
    return this._outputs.map(node => {
      return {
        name: node.name,
        shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
        dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
      };
    });
  }

  get inputNodes() {
    return this._inputs.map(node => node.signatureKey || node.name);
  }

  get outputNodes() {
    return this._outputs.map(node => {
      const name = node.signatureKey || node.name;
      return node.defaultOutput ? `${name}:${node.defaultOutput}` : name;
    });
  }

  get functions() {
    return Object.keys(this._functions).reduce((map, key) => {
      map[key] = this._functions[key].signature;
      return map;
    }, {});
  }
  /**
   *
   * @param graph Graph the model or function graph to be executed.
   * @param parent When building function exector you need to set the parent
   * executor. Since the weights and function executor maps are set at parant
   * level, that function executor can access the function maps and weight maps
   * through the parent.
   */


  constructor(graph, parent) {
    this.graph = graph;
    this.parent = parent;
    this.compiledMap = new Map();
    this.parseNodeNameCache = new Map();
    this._weightMap = {};
    this.SEPARATOR = ',';
    this._functions = {};
    this._functionExecutorMap = {};
    this.keepIntermediateTensors = false;
    this._outputs = graph.outputs;
    this._inputs = graph.inputs;
    this._initNodes = graph.initNodes;
    this._signature = graph.signature;
    this._functions = graph.functions; // create sub-graph executors

    if (graph.functions != null) {
      Object.keys(graph.functions).forEach(name => {
        this._functionExecutorMap[name] = new GraphExecutor(graph.functions[name], this);
      });
    }
  }

  getCompilationKey(inputs, outputs) {
    const sortedInputs = inputs.map(node => node.name).sort();
    const sortedOutputs = outputs.map(node => node.name).sort();
    return sortedInputs.join(this.SEPARATOR) + '--' + sortedOutputs.join(this.SEPARATOR);
  }
  /**
   * Compiles the inference graph and returns the minimal set of nodes that are
   * required for execution, in the correct execution order.
   * @returns {Object} compilation The compile result.
   * @returns {Node[]} compilation.orderedNodes Nodes in the correct execution
   *     order.
   * @returns {Map<string, Node[]>} compilation.nodeLiveUntilMap A map from node
   *     to disposable nodes after its execution. That is, for a node `x`,
   *     `nodeLiveUntilMap[x]` indicates all nodes whose intermediate
   *     tensors should be disposed after `x` is executed.
   */


  compile(inputs, outputs) {
    const executionInfo = (0, _model_analysis.getExecutionSubgraph)(inputs, outputs, this.weightMap, this._initNodes);
    const {
      missingInputs,
      dynamicNode,
      syncInputs
    } = executionInfo;

    if (dynamicNode != null) {
      throw new Error(`This execution contains the node '${dynamicNode.name}', which has ` + `the dynamic op '${dynamicNode.op}'. Please use ` + `model.executeAsync() instead. Alternatively, to avoid the ` + `dynamic ops, specify the inputs [${syncInputs}]`);
    }

    if (missingInputs.length > 0) {
      const outNames = outputs.map(n => n.name);
      const inNames = Object.keys(inputs);
      throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs ` + `[${inNames}]. Missing the following inputs: [${missingInputs}]`);
    }

    const orderedNodes = (0, _model_analysis.getNodesInTopologicalOrder)(this.graph, executionInfo);
    const nodeLiveUntilMap = (0, _model_analysis.getNodeLiveUntilMap)(orderedNodes);
    return {
      orderedNodes,
      nodeLiveUntilMap
    };
  }

  cloneAndKeepTensor(tensor) {
    if (tensor == null) {
      return null;
    }

    const clone = tensor.clone(); // Keep the clone because`model.execute()` may be called within
    // a `tidy()`, but the user may inspect these tensors after the
    // tidy.

    (0, _tfjsCore.keep)(clone);
    return clone;
  }

  cloneTensorList(tensors) {
    if (!tensors) {
      return null;
    }

    const clonedTensor = tensors.map(tensor => {
      return this.cloneAndKeepTensor(tensor);
    });
    return clonedTensor;
  }

  cloneTensorMap(tensorsMap) {
    return Object.fromEntries(Object.entries(tensorsMap).map(([name, tensorsList]) => {
      return [name, this.cloneTensorList(tensorsList)];
    }));
  }
  /**
   * Executes the inference for given input tensors.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model, if
   * no outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   */


  execute(inputs, outputs) {
    // Dispose any tensors from a prior run to avoid leaking them.
    this.disposeIntermediateTensors();
    inputs = this.mapInputs(inputs);
    const names = Object.keys(inputs).sort();
    this.checkInputs(inputs);
    this.checkInputShapeAndType(inputs);
    outputs = this.mapOutputs(outputs);
    this.checkOutputs(outputs);
    const inputNodes = names.map(name => this.graph.nodes[(0, _utils.parseNodeName)(name)[0]]);
    const outputNodeNames = outputs.map(name => (0, _utils.parseNodeName)(name)[0]);
    const outputNodeNameSet = new Set(outputNodeNames);
    let outputNodes = outputNodeNames.map(name => this.graph.nodes[name]); // If no outputs are specified, then use the default outputs of the model.

    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }

    const compilationKey = this.getCompilationKey(inputNodes, outputNodes); // Do nothing if the compiled graph cache contains the input.

    let compilation = this.compiledMap.get(compilationKey);

    if (compilation == null) {
      compilation = this.compile(inputs, outputNodes);
      this.compiledMap.set(compilationKey, compilation);
    } // Keep tensors if KEEP_INTERMEDIATE_TENSORS is on.


    try {
      this.keepIntermediateTensors = (0, _tfjsCore.env)().getBool('KEEP_INTERMEDIATE_TENSORS');
    } catch (e) {
      this.keepIntermediateTensors = false;
      console.warn(e.message);
    }

    const tensorArrayMap = {};
    const tensorListMap = {};
    return (0, _tfjsCore.tidy)(() => {
      const context = new _execution_context.ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);
      const tensorsMap = Object.assign({}, this.weightMap);

      if (this.keepIntermediateTensors) {
        this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
      }

      Object.keys(inputs).forEach(name => {
        const [nodeName, index] = (0, _utils.parseNodeName)(name, context);
        const tensors = [];
        tensors[index] = inputs[name];
        tensorsMap[nodeName] = tensors;

        if (this.keepIntermediateTensors) {
          this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
        }
      });
      const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
      const {
        orderedNodes,
        nodeLiveUntilMap
      } = compilation;

      for (const node of orderedNodes) {
        if (tensorsMap[node.name]) {
          continue;
        }

        const tensors = (0, _operation_executor.executeOp)(node, tensorsMap, context, this._resourceManager);

        if (_tfjsCore.util.isPromise(tensors)) {
          throw new Error(`The execution of the op '${node.op}' returned a promise. ` + `Please use model.executeAsync() instead.`);
        }

        tensorsMap[node.name] = tensors;

        if (this.keepIntermediateTensors) {
          this.clonedTensorsMap[node.name] = this.cloneTensorList(tensors);
        }

        this.checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorsMap, context, tensorsToKeep, outputNodeNameSet, nodeLiveUntilMap.get(node.name));
      } // dispose the context for the root executor


      if (this.parent == null) {
        context.dispose(tensorsToKeep);
      }

      return outputs.map(name => (0, _utils.getTensor)(name, tensorsMap, context));
    });
  }

  getFrozenTensorIds(tensorMap) {
    const ids = [].concat.apply([], Object.keys(tensorMap).map(key => tensorMap[key]).map(tensors => tensors.map(tensor => tensor.id)));
    return new Set(ids);
  }

  checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount) {
    // Skip output nodes and any control flow nodes, since its dependency is
    // tricky to track correctly.
    if ((0, _model_analysis.isControlFlow)(node) || outputNodeNameSet.has(nodeName)) {
      return;
    }

    for (const tensor of tensorMap[nodeName]) {
      if (tensor == null) {
        continue;
      }

      intermediateTensorConsumerCount[tensor.id] = (intermediateTensorConsumerCount[tensor.id] || 0) + node.children.length;
    }

    for (const input of node.inputs) {
      // Skip any control flow nodes, since its dependency is tricky to track
      // correctly.
      if ((0, _model_analysis.isControlFlow)(input)) {
        continue;
      }

      const tensors = (0, _utils.getTensorsForCurrentContext)(input.name, tensorMap, context);

      if (tensors == null) {
        continue;
      }

      for (const tensor of tensors) {
        if (!tensor || tensor.kept || tensorsToKeep.has(tensor.id)) {
          continue;
        } // Only intermediate nodes' tensors have counts set, not marked as
        // kept, and not in `tensorsToKeep`.
        // Input and weight nodes' tensors should exist in `tensorsToKeep`.
        // Output and control flow nodes' tensors should never have count set.


        const count = intermediateTensorConsumerCount[tensor.id];

        if (count === 1) {
          tensor.dispose();
          delete intermediateTensorConsumerCount[tensor.id];
        } else if (count != null) {
          intermediateTensorConsumerCount[tensor.id]--;
        }
      }
    }
  }

  checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorMap, context, tensorsToKeep, outputNodeNameSet, liveUntilNodes) {
    function isNonDisposableNode(node) {
      // Skip output nodes and any control flow nodes, since its dependency is
      // tricky to track correctly.
      return (0, _model_analysis.isControlFlow)(node) || outputNodeNameSet.has(node.name);
    }

    if ((0, _model_analysis.isControlFlow)(node) || liveUntilNodes == null) {
      return;
    }

    for (const nodeToDispose of liveUntilNodes) {
      if (isNonDisposableNode(nodeToDispose)) {
        continue;
      }

      const tensors = (0, _utils.getTensorsForCurrentContext)(nodeToDispose.name, tensorMap, context);

      for (const tensor of tensors) {
        if (!tensor || tensor.kept || tensorsToKeep.has(tensor.id)) {
          continue;
        }

        tensor.dispose();
      }
    }
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs output node name from the Tensorflow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   */


  async executeAsync(inputs, outputs) {
    return this._executeAsync(inputs, outputs);
  }

  disposeIntermediateTensors() {
    if (!this.clonedTensorsMap) {
      return;
    }

    Object.values(this.clonedTensorsMap).forEach(tensorsList => {
      for (const tensor of tensorsList) {
        if (tensor && !tensor.isDisposed) {
          tensor.dispose();
        }
      }
    });
    this.clonedTensorsMap = null;
  }

  getIntermediateTensors() {
    return this.clonedTensorsMap;
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Optional. Flag for executing a function.
   * @param tensorArrayMap Optional, global TensorArray map by id. Used for
   * function execution.
   * @param tensorArrayMap Optinal global TensorList map by id. Used for
   * function execution.
   */


  async _executeAsync(inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
    // Dispose any tensors from a prior run to avoid leaking them.
    this.disposeIntermediateTensors();

    if (!isFunctionExecution) {
      inputs = this.mapInputs(inputs);
      this.checkInputs(inputs);
      this.checkInputShapeAndType(inputs);
      outputs = this.mapOutputs(outputs);
      this.checkOutputs(outputs);
    } // Keep tensors if KEEP_INTERMEDIATE_TENSORS is on.


    try {
      this.keepIntermediateTensors = (0, _tfjsCore.env)().getBool('KEEP_INTERMEDIATE_TENSORS');
    } catch (e) {
      this.keepIntermediateTensors = false;
      console.warn(e.message);
    }

    const context = new _execution_context.ExecutionContext(this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);

    if (this.keepIntermediateTensors) {
      this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
    } // Graph with control flow op requires runtime evaluation of the execution
    // order, while without control flow the execution order is pre-determined
    // in the compile method.


    const tensorsMap = await this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
    const results = outputs.map(name => (0, _utils.getTensor)(name, tensorsMap, context)); // dispose all the intermediate tensors

    const outputIds = results.map(t => t.id);
    const inputIds = Object.keys(inputs).map(name => inputs[name].id);
    const keepIds = new Set([...outputIds, ...inputIds, ...this.weightIds]);
    Object.values(tensorsMap).forEach(tensorsList => {
      tensorsList.forEach(tensor => {
        if (tensor && !tensor.isDisposed && !keepIds.has(tensor.id)) {
          tensor.dispose();
        }
      });
    }); // dispose the context for the root executor

    if (this.parent == null) {
      context.dispose(keepIds);
    }

    return results;
  }

  async executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
    const mappedInputs = inputs.reduce((map, tensor, index) => {
      map[this.inputs[index].name] = tensor;
      return map;
    }, {});
    return this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap);
  }
  /**
   * When there are control flow nodes in the graph, the graph execution use
   * ExecutionContext to keep track of the frames and loop iterators.
   * @param inputs placeholder tensors for the graph.
   * @param context the execution context object for current execution.
   * @param outputNames Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Flag for executing a function.
   */


  async executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
    const names = Object.keys(inputs);
    const inputNodes = names.map(name => this.graph.nodes[(0, _utils.parseNodeName)(name)[0]]);
    const outputNodeNames = outputNames.map(name => (0, _utils.parseNodeName)(name)[0]);
    const outputNodeNameSet = new Set(outputNodeNames);
    let outputNodes = outputNodeNames.map(name => this.graph.nodes[name]); // If no outputs are specified, then use the default outputs of the model.

    if (outputNodes.length === 0) {
      outputNodes = this._outputs;
    }

    const {
      usedNodes,
      missingInputs,
      dynamicNode,
      syncInputs
    } = (0, _model_analysis.getExecutionSubgraph)(inputs, outputNodes, this.weightMap, this._initNodes); // First nodes to execute include inputNodes, weights, and initNodes.

    const stack = [...inputNodes, ...this.graph.weights, ...(this._initNodes || [])].map(node => {
      return {
        node,
        contexts: context.currentContext
      };
    });
    const tensorsMap = Object.assign({}, this.weightMap);
    Object.keys(inputs).forEach(name => {
      const [nodeName, index] = (0, _utils.parseNodeName)(name);
      const tensors = [];
      tensors[index] = inputs[name];
      tensorsMap[nodeName] = tensors;
    });
    const intermediateTensorConsumerCount = {};
    const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
    const added = {};

    while (stack.length > 0) {
      const promises = this.processStack(inputNodes, stack, context, tensorsMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes);
      await Promise.all(promises);
    }

    if (dynamicNode == null && !isFunctionExecution) {
      console.warn(`This model execution did not contain any nodes with control flow ` + `or dynamic output shapes. You can use model.execute() instead.`);
    }

    const missingOutputs = outputNodes.filter(node => !(0, _model_analysis.isControlFlow)(node) && !(0, _utils.getTensor)(node.name, tensorsMap, context)).map(node => node.name);

    if (missingOutputs.length > 0) {
      let alternativeMsg = '';

      if (dynamicNode != null) {
        alternativeMsg = `Alternatively, to avoid the dynamic ops, use model.execute() ` + `and specify the inputs [${syncInputs}]`;
      }

      throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided ` + `inputs [${names}]. Consider providing the following inputs: ` + `[${missingInputs}]. ${alternativeMsg}`);
    }

    return tensorsMap;
  }

  processStack(inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes) {
    const promises = [];

    while (stack.length > 0) {
      const item = stack.pop();
      context.currentContext = item.contexts;
      let nodeName = ''; // The tensor of the Enter op with isConstant set should be set
      // in the parent scope, so it will be available as constant for the
      // whole loop.

      if (item.node.op === 'Enter' && (0, _utils.getParamValue)('isConstant', item.node, tensorMap, context)) {
        [nodeName] = (0, _utils.getNodeNameAndIndex)(item.node.name, context);
      } // only process nodes that are not in the tensorMap yet, this include
      // inputNodes and internal initNodes.


      if (tensorMap[item.node.name] == null) {
        const tensors = (0, _operation_executor.executeOp)(item.node, tensorMap, context, this._resourceManager);

        if (!nodeName) {
          [nodeName] = (0, _utils.getNodeNameAndIndex)(item.node.name, context);
        }

        const currentContext = context.currentContext;

        if (_tfjsCore.util.isPromise(tensors)) {
          promises.push(tensors.then(t => {
            tensorMap[nodeName] = t;

            if (this.keepIntermediateTensors) {
              this.clonedTensorsMap[nodeName] = this.cloneTensorList(t);
            }

            context.currentContext = currentContext;
            this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
            this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
            return t;
          }));
        } else {
          tensorMap[nodeName] = tensors;

          if (this.keepIntermediateTensors) {
            this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
          }

          this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
          this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
        }
      } else {
        this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
      }
    }

    return promises;
  }

  processChildNodes(node, stack, context, tensorMap, added, usedNodes) {
    node.children.forEach(childNode => {
      const [nodeName] = (0, _utils.getNodeNameAndIndex)(childNode.name, context);

      if (added[nodeName] || !usedNodes.has(childNode.name)) {
        return;
      } // Merge op can be pushed if any of its inputs has value.


      if (childNode.op === 'Merge') {
        if (childNode.inputNames.some(name => {
          return !!(0, _utils.getTensor)(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack.push({
            contexts: context.currentContext,
            node: childNode
          });
        }
      } else // Otherwise all inputs must to have value.
        if (childNode.inputNames.every(name => {
          return !!(0, _utils.getTensor)(name, tensorMap, context);
        })) {
          added[nodeName] = true;
          stack.push({
            contexts: context.currentContext,
            node: childNode
          });
        }
    });
  }
  /**
   * Releases the memory used by the weight tensors.
   */


  dispose() {
    Object.keys(this.weightMap).forEach(key => this.weightMap[key].forEach(tensor => tensor.dispose()));
  }

  checkInputShapeAndType(inputs) {
    Object.keys(inputs).forEach(name => {
      const input = inputs[name];
      const [nodeName] = (0, _utils.parseNodeName)(name);
      const node = this.graph.nodes[nodeName];

      if (node.attrParams['shape'] && node.attrParams['shape'].value) {
        const shape = node.attrParams['shape'].value;
        const match = shape.length === input.shape.length && input.shape.every((dim, index) => shape[index] === -1 || shape[index] === dim);

        _tfjsCore.util.assert(match, () => `The shape of dict['${node.name}'] provided in ` + `model.execute(dict) must be [${shape}], but was ` + `[${input.shape}]`);
      }

      if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
        _tfjsCore.util.assert(input.dtype === node.attrParams['dtype'].value, () => `The dtype of dict['${node.name}'] provided in ` + `model.execute(dict) must be ` + `${node.attrParams['dtype'].value}, but was ${input.dtype}`);
      }
    });
  }

  mapInputs(inputs) {
    var _a, _b;

    const result = {};

    for (const inputName in inputs) {
      const tensor = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b[inputName];

      if (tensor != null) {
        result[tensor.name] = inputs[inputName];
      } else {
        result[inputName] = inputs[inputName];
      }
    }

    return result;
  }

  checkInputs(inputs) {
    const notInGraph = Object.keys(inputs).filter(name => {
      const [nodeName] = (0, _utils.parseNodeName)(name);
      return this.graph.nodes[nodeName] == null;
    });

    if (notInGraph.length > 0) {
      throw new Error(`The dict provided in model.execute(dict) has ` + `keys: [${notInGraph}] that are not part of graph`);
    }
  }

  mapOutputs(outputs) {
    return outputs.map(name => {
      var _a, _b;

      const tensor = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.outputs) === null || _b === void 0 ? void 0 : _b[name];

      if (tensor != null) {
        return tensor.name;
      }

      return name;
    }, {});
  }

  checkOutputs(outputs) {
    outputs.forEach(name => {
      const [normalizedName] = (0, _utils.parseNodeName)(name);

      if (!this.graph.nodes[normalizedName]) {
        throw new Error(`The output '${name}' is not found in the graph`);
      }
    });
  }

}

exports.GraphExecutor = GraphExecutor;
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../operations/executors/utils":"node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js","../operations/operation_executor":"node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js","./execution_context":"node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js","./model_analysis":"node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js"}],"node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceManager = void 0;

/**
 * Contains global resources of a model.
 */
class ResourceManager {
  constructor(hashTableNameToHandle = {}, hashTableMap = {}) {
    this.hashTableNameToHandle = hashTableNameToHandle;
    this.hashTableMap = hashTableMap;
  }
  /**
   * Register a `HashTable` in the resource manager.
   *
   * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
   * where id is the table handle tensor's id.
   *
   * @param name Op node name that creates the `HashTable`.
   * @param hashTable The `HashTable` to be added to resource manager.
   */


  addHashTable(name, hashTable) {
    this.hashTableNameToHandle[name] = hashTable.handle;
    this.hashTableMap[hashTable.id] = hashTable;
  }
  /**
   * Get the table handle by node name.
   * @param name Op node name that creates the `HashTable`. This name is also
   *     used in the inputs list of lookup and import `HashTable` ops.
   */


  getHashTableHandleByName(name) {
    return this.hashTableNameToHandle[name];
  }
  /**
   * Get the actual `HashTable` by its handle tensor's id.
   * @param id The id of the handle tensor.
   */


  getHashTableById(id) {
    return this.hashTableMap[id];
  }
  /**
   * Dispose `ResourceManager`, including its hashTables and tensors in them.
   */


  dispose() {
    for (const key in this.hashTableMap) {
      this.hashTableMap[key].clearAndClose();
      delete this.hashTableMap[key];
    }

    for (const name in this.hashTableNameToHandle) {
      this.hashTableNameToHandle[name].dispose();
      delete this.hashTableNameToHandle[name];
    }
  }

}

exports.ResourceManager = ResourceManager;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGraphModel = loadGraphModel;
exports.loadGraphModelSync = loadGraphModelSync;
exports.GraphModel = exports.DEFAULT_MODEL_NAME = exports.TFHUB_SEARCH_PARAM = void 0;

var _tfjsCore = require("@tensorflow/tfjs-core");

var _operation_mapper = require("../operations/operation_mapper");

var _graph_executor = require("./graph_executor");

var _resource_manager = require("./resource_manager");

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const TFHUB_SEARCH_PARAM = '?tfjs-format=file';
exports.TFHUB_SEARCH_PARAM = TFHUB_SEARCH_PARAM;
const DEFAULT_MODEL_NAME = 'model.json';
/**
 * A `tf.GraphModel` is a directed, acyclic graph built from a
 * SavedModel GraphDef and allows inference execution.
 *
 * A `tf.GraphModel` can only be created by loading from a model converted from
 * a [TensorFlow SavedModel](https://www.tensorflow.org/guide/saved_model) using
 * the command line converter tool and loaded via `tf.loadGraphModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */

exports.DEFAULT_MODEL_NAME = DEFAULT_MODEL_NAME;

class GraphModel {
  // Returns the version information for the tensorflow model GraphDef.
  get modelVersion() {
    return this.version;
  }

  get inputNodes() {
    return this.executor.inputNodes;
  }

  get outputNodes() {
    return this.executor.outputNodes;
  }

  get inputs() {
    return this.executor.inputs;
  }

  get outputs() {
    return this.executor.outputs;
  }

  get weights() {
    return this.executor.weightMap;
  }

  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }

  get modelSignature() {
    return this.signature;
  }

  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  /**
   * @param modelUrl url for the model, or an `io.IOHandler`.
   * @param weightManifestUrl url for the weight file generated by
   * scripts/convert.py script.
   * @param requestOption options for Request, which allows to send credentials
   * and custom headers.
   * @param onProgress Optional, progress callback function, fired periodically
   * before the load is completed.
   */


  constructor(modelUrl, loadOptions = {}, tfio = _tfjsCore.io) {
    this.modelUrl = modelUrl;
    this.loadOptions = loadOptions;
    this.version = 'n/a';
    this.io = tfio;

    if (loadOptions == null) {
      this.loadOptions = {};
    }

    this.resourceManager = new _resource_manager.ResourceManager();
  }

  findIOHandler() {
    const path = this.modelUrl;

    if (path.load != null) {
      // Path is an IO Handler.
      this.handler = path;
    } else if (this.loadOptions.requestInit != null) {
      this.handler = this.io.browserHTTPRequest(path, this.loadOptions);
    } else {
      const handlers = this.io.getLoadHandlers(path, this.loadOptions);

      if (handlers.length === 0) {
        // For backward compatibility: if no load handler can be found,
        // assume it is a relative http path.
        handlers.push(this.io.browserHTTPRequest(path, this.loadOptions));
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) load handlers for ` + `URL '${[path]}'`);
      }

      this.handler = handlers[0];
    }
  }
  /**
   * Loads the model and weight files, construct the in memory weight map and
   * compile the inference graph.
   */


  load() {
    this.findIOHandler();

    if (this.handler.load == null) {
      throw new Error('Cannot proceed with model loading because the IOHandler provided ' + 'does not have the `load` method implemented.');
    }

    const loadResult = this.handler.load();

    if (_tfjsCore.util.isPromise(loadResult)) {
      return loadResult.then(artifacts => this.loadSync(artifacts));
    }

    return this.loadSync(loadResult);
  }
  /**
   * Synchronously construct the in memory weight map and
   * compile the inference graph.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */


  loadSync(artifacts) {
    this.artifacts = artifacts;
    const graph = this.artifacts.modelTopology;
    let signature = this.artifacts.signature;

    if (this.artifacts.userDefinedMetadata != null) {
      const metadata = this.artifacts.userDefinedMetadata;

      if (metadata.signature != null) {
        signature = metadata.signature;
      }

      if (metadata.structuredOutputKeys != null) {
        this.structuredOutputKeys = metadata.structuredOutputKeys;
      }
    }

    this.signature = signature;
    this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
    const weightMap = this.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
    this.executor = new _graph_executor.GraphExecutor(_operation_mapper.OperationMapper.Instance.transformGraph(graph, this.signature));
    this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap); // Attach a model-level resourceManager to each executor to share resources,
    // such as `HashTable`.

    this.executor.resourceManager = this.resourceManager;

    if (artifacts.modelInitializer != null && artifacts.modelInitializer.node != null) {
      const initializer = _operation_mapper.OperationMapper.Instance.transformGraph(artifacts.modelInitializer);

      this.initializer = new _graph_executor.GraphExecutor(initializer);
      this.initializer.weightMap = this.executor.weightMap; // Attach a model-level resourceManager to the initializer, the
      // hashTables created from when executing the initializer will be stored
      // in the resourceManager.

      this.initializer.resourceManager = this.resourceManager;
      this.initializerSignature = artifacts.initializerSignature;
    }

    return true;
  }
  /**
   * Save the configuration and/or weights of the GraphModel.
   *
   * An `IOHandler` is an object that has a `save` method of the proper
   * signature defined. The `save` method manages the storing or
   * transmission of serialized data ("artifacts") that represent the
   * model's topology and weights onto or via a specific medium, such as
   * file downloads, local storage, IndexedDB in the web browser and HTTP
   * requests to a server. TensorFlow.js provides `IOHandler`
   * implementations for a number of frequently used saving mediums, such as
   * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
   * for more details.
   *
   * This method also allows you to refer to certain types of `IOHandler`s
   * as URL-like string shortcuts, such as 'localstorage://' and
   * 'indexeddb://'.
   *
   * Example 1: Save `model`'s topology and weights to browser [local
   * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
   * then load it back.
   *
   * ```js
   * const modelUrl =
   *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
   * const model = await tf.loadGraphModel(modelUrl);
   * const zeros = tf.zeros([1, 224, 224, 3]);
   * model.predict(zeros).print();
   *
   * const saveResults = await model.save('localstorage://my-model-1');
   *
   * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
   * console.log('Prediction from loaded model:');
   * model.predict(zeros).print();
   * ```
   *
   * @param handlerOrURL An instance of `IOHandler` or a URL-like,
   * scheme-based string shortcut for `IOHandler`.
   * @param config Options for saving the model.
   * @returns A `Promise` of `SaveResult`, which summarizes the result of
   * the saving, such as byte sizes of the saved artifacts for the model's
   *   topology and weight values.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */


  async save(handlerOrURL, config) {
    if (typeof handlerOrURL === 'string') {
      const handlers = this.io.getSaveHandlers(handlerOrURL);

      if (handlers.length === 0) {
        throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
      } else if (handlers.length > 1) {
        throw new Error(`Found more than one (${handlers.length}) save handlers for ` + `URL '${handlerOrURL}'`);
      }

      handlerOrURL = handlers[0];
    }

    if (handlerOrURL.save == null) {
      throw new Error('GraphModel.save() cannot proceed because the IOHandler ' + 'provided does not have the `save` attribute defined.');
    }

    return handlerOrURL.save(this.artifacts);
  }

  addStructuredOutputNames(outputTensors) {
    if (this.structuredOutputKeys) {
      const outputTensorsArray = outputTensors instanceof _tfjsCore.Tensor ? [outputTensors] : outputTensors;
      const outputTensorMap = {};
      outputTensorsArray.forEach((outputTensor, i) => outputTensorMap[this.structuredOutputKeys[i]] = outputTensor);
      return outputTensorMap;
    }

    return outputTensors;
  }
  /**
   * Execute the inference for the input tensors.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns Inference result tensors. If the model is converted and it
   * originally had structured_outputs in tensorflow, then a NamedTensorMap
   * will be returned matching the structured_outputs. If no structured_outputs
   * are present, the output will be single `tf.Tensor` if the model has single
   * output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  predict(inputs, config) {
    const outputTensors = this.execute(inputs, this.outputNodes);
    return this.addStructuredOutputNames(outputTensors);
  }
  /**
   * Execute the inference for the input tensors in async fashion, use this
   * method when your model contains control flow ops.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns A Promise of inference result tensors. If the model is converted
   * and it originally had structured_outputs in tensorflow, then a
   * NamedTensorMap will be returned matching the structured_outputs. If no
   * structured_outputs are present, the output will be single `tf.Tensor` if
   * the model has single output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  async predictAsync(inputs, config) {
    const outputTensors = await this.executeAsync(inputs, this.outputNodes);
    return this.addStructuredOutputNames(outputTensors);
  }

  normalizeInputs(inputs) {
    var _a;

    if (!(inputs instanceof _tfjsCore.Tensor) && !Array.isArray(inputs)) {
      // The input is already a NamedTensorMap.
      const signatureInputs = (_a = this.signature) === null || _a === void 0 ? void 0 : _a.inputs;

      if (signatureInputs != null) {
        for (const input in signatureInputs) {
          const tensor = signatureInputs[input];

          if (tensor.resourceId != null) {
            inputs[input] = this.resourceIdToCapturedInput[tensor.resourceId];
          }
        }
      }

      return inputs;
    }

    inputs = Array.isArray(inputs) ? inputs : [inputs];
    const numCapturedInputs = Object.keys(this.resourceIdToCapturedInput).length;

    if (inputs.length + numCapturedInputs !== this.inputNodes.length) {
      throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length - numCapturedInputs} non-resource placeholders, while there are ${inputs.length} input tensors provided.`);
    }

    let inputIndex = 0;
    return this.inputNodes.reduce((map, inputName) => {
      var _a, _b, _c;

      const resourceId = (_c = (_b = (_a = this.signature) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b[inputName]) === null || _c === void 0 ? void 0 : _c.resourceId;

      if (resourceId != null) {
        map[inputName] = this.resourceIdToCapturedInput[resourceId];
      } else {
        map[inputName] = inputs[inputIndex++];
      }

      return map;
    }, {});
  }

  normalizeOutputs(outputs) {
    outputs = outputs || this.outputNodes;
    return !Array.isArray(outputs) ? [outputs] : outputs;
  }

  executeInitializerGraph() {
    if (this.initializer == null) {
      return [];
    }

    if (this.initializerSignature == null) {
      return this.initializer.execute({}, []);
    } else {
      return this.initializer.execute({}, Object.keys(this.initializerSignature.outputs));
    }
  }

  async executeInitializerGraphAsync() {
    if (this.initializer == null) {
      return [];
    }

    if (this.initializerSignature == null) {
      return this.initializer.executeAsync({}, []);
    } else {
      return this.initializer.executeAsync({}, Object.keys(this.initializerSignature.outputs));
    }
  }

  setResourceIdToCapturedInput(outputs) {
    this.resourceIdToCapturedInput = {};

    if (this.initializerSignature) {
      const signatureOutputs = this.initializerSignature.outputs;
      const outputNames = Object.keys(signatureOutputs);

      for (let i = 0; i < outputNames.length; i++) {
        const outputName = outputNames[i];
        const tensorInfo = signatureOutputs[outputName];
        this.resourceIdToCapturedInput[tensorInfo.resourceId] = outputs[i];
      }
    }
  }
  /**
   * Executes inference for the model for given input tensors.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no
   * outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   *
   * @returns A single tensor if provided with a single output or no outputs
   * are provided and there is only one default output, otherwise return a
   * tensor array. The order of the tensor array is the same as the outputs
   * if provided, otherwise the order of outputNodes attribute of the model.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  execute(inputs, outputs) {
    if (this.resourceIdToCapturedInput == null) {
      this.setResourceIdToCapturedInput(this.executeInitializerGraph());
    }

    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = this.executor.execute(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  /**
   * Executes inference for the model for given input tensors in async
   * fashion, use this method when your model contains control flow ops.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   *
   * @returns A Promise of single tensor if provided with a single output or
   * no outputs are provided and there is only one default output, otherwise
   * return a tensor map.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  async executeAsync(inputs, outputs) {
    if (this.resourceIdToCapturedInput == null) {
      this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync());
    }

    inputs = this.normalizeInputs(inputs);
    outputs = this.normalizeOutputs(outputs);
    const result = await this.executor.executeAsync(inputs, outputs);
    return result.length > 1 ? result : result[0];
  }
  /**
   * Get intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  /**
   * Dispose intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }

  convertTensorMapToTensorsMap(map) {
    return Object.keys(map).reduce((newMap, key) => {
      newMap[key] = [map[key]];
      return newMap;
    }, {});
  }
  /**
   * Releases the memory used by the weight tensors and resourceManager.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */


  dispose() {
    this.executor.dispose();

    if (this.initializer) {
      this.initializer.dispose();

      if (this.resourceIdToCapturedInput) {
        (0, _tfjsCore.dispose)(this.resourceIdToCapturedInput);
      }
    }

    this.resourceManager.dispose();
  }

}
/**
 * Load a graph model given a URL to the model definition.
 *
 * Example of loading MobileNetV2 from a URL and making a prediction with a
 * zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
 * const model = await tf.loadGraphModel(modelUrl);
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 *
 * Example of loading MobileNetV2 from a TF Hub URL and making a prediction
 * with a zeros input:
 *
 * ```js
 * const modelUrl =
 *    'https://tfhub.dev/google/imagenet/mobilenet_v2_140_224/classification/2';
 * const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
 * const zeros = tf.zeros([1, 224, 224, 3]);
 * model.predict(zeros).print();
 * ```
 * @param modelUrl The url or an `io.IOHandler` that loads the model.
 * @param options Options for the HTTP request, which allows to send
 *     credentials
 *    and custom headers.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */


exports.GraphModel = GraphModel;

async function loadGraphModel(modelUrl, options = {}, tfio = _tfjsCore.io) {
  if (modelUrl == null) {
    throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' + 'or an IOHandler that loads the model');
  }

  if (options == null) {
    options = {};
  }

  if (options.fromTFHub && typeof modelUrl === 'string') {
    modelUrl = getTFHubUrl(modelUrl);
  }

  const model = new GraphModel(modelUrl, options, tfio);
  await model.load();
  return model;
}
/**
 * Load a graph model given a synchronous IO handler with a 'load' method.
 *
 * @param modelSource The `io.IOHandlerSync` that loads the model, or the
 *     `io.ModelArtifacts` that encode the model, or a tuple of
 *     `[io.ModelJSON, ArrayBuffer]` of which the first element encodes the
 *      model and the second contains the weights.
 *
 * @doc {heading: 'Models', subheading: 'Loading'}
 */


function loadGraphModelSync(modelSource) {
  if (modelSource == null) {
    throw new Error('modelUrl in loadGraphModelSync() cannot be null. Please provide ' + 'model artifacts or an IOHandler that loads the model');
  }

  let ioHandler;

  if (modelSource instanceof Array) {
    const [modelJSON, weights] = modelSource;

    if (!modelJSON) {
      throw new Error('modelJSON must be the first element of the array');
    }

    if (!weights || !(weights instanceof ArrayBuffer)) {
      throw new Error('An ArrayBuffer of weights must be the second element of' + ' the array');
    }

    if (!('modelTopology' in modelJSON)) {
      throw new Error('Model JSON is missing \'modelTopology\'');
    }

    if (!('weightsManifest' in modelJSON)) {
      throw new Error('Model JSON is missing \'weightsManifest\'');
    }

    const weightSpecs = _tfjsCore.io.getWeightSpecs(modelJSON.weightsManifest);

    const modelArtifacts = _tfjsCore.io.getModelArtifactsForJSONSync(modelJSON, weightSpecs, weights);

    ioHandler = _tfjsCore.io.fromMemorySync(modelArtifacts);
  } else if ('load' in modelSource) {
    // Then modelSource is already an IOHandlerSync.
    ioHandler = modelSource;
  } else if ('modelTopology' in modelSource && 'weightSpecs' in modelSource && 'weightData' in modelSource) {
    // modelSource is of type ModelArtifacts.
    ioHandler = _tfjsCore.io.fromMemorySync(modelSource);
  } else {
    throw new Error('Unknown model format');
  }

  const model = new GraphModel(ioHandler);
  model.load();
  return model;
}

function getTFHubUrl(modelUrl) {
  if (!modelUrl.endsWith('/')) {
    modelUrl = modelUrl + '/';
  }

  return `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
}
},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../operations/operation_mapper":"node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js","./graph_executor":"node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js","./resource_manager":"node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js"}],"node_modules/@tensorflow/tfjs-converter/dist/version.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;

/** @license See the LICENSE file. */
// This code is auto-generated, do not modify this file!
const version = '4.10.0';
exports.version = version;
},{}],"node_modules/@tensorflow/tfjs-converter/dist/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GraphModel", {
  enumerable: true,
  get: function () {
    return _graph_model.GraphModel;
  }
});
Object.defineProperty(exports, "loadGraphModel", {
  enumerable: true,
  get: function () {
    return _graph_model.loadGraphModel;
  }
});
Object.defineProperty(exports, "loadGraphModelSync", {
  enumerable: true,
  get: function () {
    return _graph_model.loadGraphModelSync;
  }
});
Object.defineProperty(exports, "deregisterOp", {
  enumerable: true,
  get: function () {
    return _register.deregisterOp;
  }
});
Object.defineProperty(exports, "registerOp", {
  enumerable: true,
  get: function () {
    return _register.registerOp;
  }
});
Object.defineProperty(exports, "version_converter", {
  enumerable: true,
  get: function () {
    return _version.version;
  }
});

require("./flags");

var _graph_model = require("./executor/graph_model");

var _register = require("./operations/custom_op/register");

var _version = require("./version");
},{"./flags":"node_modules/@tensorflow/tfjs-converter/dist/flags.js","./executor/graph_model":"node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js","./operations/custom_op/register":"node_modules/@tensorflow/tfjs-converter/dist/operations/custom_op/register.js","./version":"node_modules/@tensorflow/tfjs-converter/dist/version.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectiveTransformMatrix = exports.getRoi = exports.padRoi = exports.toImageTensor = exports.transformValueRange = exports.normalizeRadians = exports.getImageSize = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
function getImageSize(input) {
    if (input instanceof tf.Tensor) {
        return { height: input.shape[0], width: input.shape[1] };
    }
    else {
        return { height: input.height, width: input.width };
    }
}
exports.getImageSize = getImageSize;
/**
 * Normalizes the provided angle to the range -pi to pi.
 * @param angle The angle in radians to be normalized.
 */
function normalizeRadians(angle) {
    return angle - 2 * Math.PI * Math.floor((angle + Math.PI) / (2 * Math.PI));
}
exports.normalizeRadians = normalizeRadians;
/**
 * Transform value ranges.
 * @param fromMin Min of original value range.
 * @param fromMax Max of original value range.
 * @param toMin New min of transformed value range.
 * @param toMax New max of transformed value range.
 */
function transformValueRange(fromMin, fromMax, toMin, toMax) {
    var fromRange = fromMax - fromMin;
    var toRange = toMax - toMin;
    if (fromRange === 0) {
        throw new Error("Original min and max are both ".concat(fromMin, ", range cannot be 0."));
    }
    var scale = toRange / fromRange;
    var offset = toMin - fromMin * scale;
    return { scale: scale, offset: offset };
}
exports.transformValueRange = transformValueRange;
/**
 * Convert an image to an image tensor representation.
 *
 * The image tensor has a shape [1, height, width, colorChannel].
 *
 * @param input An image, video frame, or image tensor.
 */
function toImageTensor(input) {
    return input instanceof tf.Tensor ? input : tf.browser.fromPixels(input);
}
exports.toImageTensor = toImageTensor;
/**
 * Padding ratio of left, top, right, bottom, based on the output dimensions.
 *
 * The padding values are non-zero only when the "keep_aspect_ratio" is true.
 *
 * For instance, when the input image is 10x10 (width x height) and the
 * output dimensions is 20x40 and "keep_aspect_ratio" is true, we should scale
 * the input image to 20x20 and places it in the middle of the output image with
 * an equal padding of 10 pixels at the top and the bottom. The result is
 * therefore {left: 0, top: 0.25, right: 0, bottom: 0.25} (10/40 = 0.25f).
 * @param roi The original rectangle to pad.
 * @param targetSize The target width and height of the result rectangle.
 * @param keepAspectRatio Whether keep aspect ratio. Default to false.
 */
function padRoi(roi, targetSize, keepAspectRatio) {
    if (keepAspectRatio === void 0) { keepAspectRatio = false; }
    if (!keepAspectRatio) {
        return { top: 0, left: 0, right: 0, bottom: 0 };
    }
    var targetH = targetSize.height;
    var targetW = targetSize.width;
    validateSize(targetSize, 'targetSize');
    validateSize(roi, 'roi');
    var tensorAspectRatio = targetH / targetW;
    var roiAspectRatio = roi.height / roi.width;
    var newWidth;
    var newHeight;
    var horizontalPadding = 0;
    var verticalPadding = 0;
    if (tensorAspectRatio > roiAspectRatio) {
        // pad height;
        newWidth = roi.width;
        newHeight = roi.width * tensorAspectRatio;
        verticalPadding = (1 - roiAspectRatio / tensorAspectRatio) / 2;
    }
    else {
        // pad width.
        newWidth = roi.height / tensorAspectRatio;
        newHeight = roi.height;
        horizontalPadding = (1 - tensorAspectRatio / roiAspectRatio) / 2;
    }
    roi.width = newWidth;
    roi.height = newHeight;
    return {
        top: verticalPadding,
        left: horizontalPadding,
        right: horizontalPadding,
        bottom: verticalPadding
    };
}
exports.padRoi = padRoi;
/**
 * Get the rectangle information of an image, including xCenter, yCenter, width,
 * height and rotation.
 *
 * @param imageSize imageSize is used to calculate the rectangle.
 * @param normRect Optional. If normRect is not null, it will be used to get
 *     a subarea rectangle information in the image. `imageSize` is used to
 *     calculate the actual non-normalized coordinates.
 */
function getRoi(imageSize, normRect) {
    if (normRect) {
        return {
            xCenter: normRect.xCenter * imageSize.width,
            yCenter: normRect.yCenter * imageSize.height,
            width: normRect.width * imageSize.width,
            height: normRect.height * imageSize.height,
            rotation: normRect.rotation
        };
    }
    else {
        return {
            xCenter: 0.5 * imageSize.width,
            yCenter: 0.5 * imageSize.height,
            width: imageSize.width,
            height: imageSize.height,
            rotation: 0
        };
    }
}
exports.getRoi = getRoi;
/**
 * Generate the projective transformation matrix to be used for `tf.transform`.
 *
 * See more documentation in `tf.transform`.
 *
 * @param matrix The transformation matrix mapping subRect to rect, can be
 *     computed using `getRotatedSubRectToRectTransformMatrix` calculator.
 * @param imageSize The original image height and width.
 * @param inputResolution The target height and width.
 */
function getProjectiveTransformMatrix(matrix, imageSize, inputResolution) {
    validateSize(inputResolution, 'inputResolution');
    // To use M with regular x, y coordinates, we need to normalize them first.
    // Because x' = a0 * x + a1 * y + a2, y' = b0 * x + b1 * y + b2,
    // we need to use factor (1/inputResolution.width) to normalize x for a0 and
    // b0, similarly we need to use factor (1/inputResolution.height) to normalize
    // y for a1 and b1.
    // Also at the end, we need to de-normalize x' and y' to regular coordinates.
    // So we need to use factor imageSize.width for a0, a1 and a2, similarly
    // we need to use factor imageSize.height for b0, b1 and b2.
    var a0 = (1 / inputResolution.width) * matrix[0][0] * imageSize.width;
    var a1 = (1 / inputResolution.height) * matrix[0][1] * imageSize.width;
    var a2 = matrix[0][3] * imageSize.width;
    var b0 = (1 / inputResolution.width) * matrix[1][0] * imageSize.height;
    var b1 = (1 / inputResolution.height) * matrix[1][1] * imageSize.height;
    var b2 = matrix[1][3] * imageSize.height;
    return [a0, a1, a2, b0, b1, b2, 0, 0];
}
exports.getProjectiveTransformMatrix = getProjectiveTransformMatrix;
function validateSize(size, name) {
    tf.util.assert(size.width !== 0, function () { return "".concat(name, " width cannot be 0."); });
    tf.util.assert(size.height !== 0, function () { return "".concat(name, " height cannot be 0."); });
}

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/detection_to_rect.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDetectionsToRects = exports.computeRotation = void 0;
var image_utils_1 = require("./image_utils");
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/detections_to_rects_calculator.cc
function computeRotation(detection, imageSize, config) {
    var locationData = detection.locationData;
    var startKeypoint = config.rotationVectorStartKeypointIndex;
    var endKeypoint = config.rotationVectorEndKeypointIndex;
    var targetAngle;
    if (config.rotationVectorTargetAngle) {
        targetAngle = config.rotationVectorTargetAngle;
    }
    else {
        targetAngle = Math.PI * config.rotationVectorTargetAngleDegree / 180;
    }
    var x0 = locationData.relativeKeypoints[startKeypoint].x * imageSize.width;
    var y0 = locationData.relativeKeypoints[startKeypoint].y * imageSize.height;
    var x1 = locationData.relativeKeypoints[endKeypoint].x * imageSize.width;
    var y1 = locationData.relativeKeypoints[endKeypoint].y * imageSize.height;
    var rotation = (0, image_utils_1.normalizeRadians)(targetAngle - Math.atan2(-(y1 - y0), x1 - x0));
    return rotation;
}
exports.computeRotation = computeRotation;
function rectFromBox(box) {
    return {
        xCenter: box.xMin + box.width / 2,
        yCenter: box.yMin + box.height / 2,
        width: box.width,
        height: box.height,
    };
}
function normRectFromKeypoints(locationData) {
    var keypoints = locationData.relativeKeypoints;
    if (keypoints.length <= 1) {
        throw new Error('2 or more keypoints required to calculate a rect.');
    }
    var xMin = Number.MAX_VALUE, yMin = Number.MAX_VALUE, xMax = Number.MIN_VALUE, yMax = Number.MIN_VALUE;
    keypoints.forEach(function (keypoint) {
        xMin = Math.min(xMin, keypoint.x);
        xMax = Math.max(xMax, keypoint.x);
        yMin = Math.min(yMin, keypoint.y);
        yMax = Math.max(yMax, keypoint.y);
    });
    return {
        xCenter: (xMin + xMax) / 2,
        yCenter: (yMin + yMax) / 2,
        width: xMax - xMin,
        height: yMax - yMin
    };
}
function detectionToNormalizedRect(detection, conversionMode) {
    var locationData = detection.locationData;
    return conversionMode === 'boundingbox' ?
        rectFromBox(locationData.relativeBoundingBox) :
        normRectFromKeypoints(locationData);
}
function detectionToRect(detection, conversionMode, imageSize) {
    var locationData = detection.locationData;
    var rect;
    if (conversionMode === 'boundingbox') {
        rect = rectFromBox(locationData.boundingBox);
    }
    else {
        rect = normRectFromKeypoints(locationData);
        var width = imageSize.width, height = imageSize.height;
        rect.xCenter = Math.round(rect.xCenter * width);
        rect.yCenter = Math.round(rect.yCenter * height);
        rect.width = Math.round(rect.width * width);
        rect.height = Math.round(rect.height * height);
    }
    return rect;
}
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/detections_to_rects_calculator.cc
function calculateDetectionsToRects(detection, conversionMode, outputType, imageSize, rotationConfig) {
    var rect = outputType === 'rect' ?
        detectionToRect(detection, conversionMode, imageSize) :
        detectionToNormalizedRect(detection, conversionMode);
    if (rotationConfig) {
        rect.rotation = computeRotation(detection, imageSize, rotationConfig);
    }
    return rect;
}
exports.calculateDetectionsToRects = calculateDetectionsToRects;

},{"./image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_alignment_points_rects.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAlignmentPointsRects = void 0;
var detection_to_rect_1 = require("./detection_to_rect");
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/alignment_points_to_rects_calculator.cc
function calculateAlignmentPointsRects(detection, imageSize, config) {
    var startKeypoint = config.rotationVectorStartKeypointIndex;
    var endKeypoint = config.rotationVectorEndKeypointIndex;
    var locationData = detection.locationData;
    var xCenter = locationData.relativeKeypoints[startKeypoint].x * imageSize.width;
    var yCenter = locationData.relativeKeypoints[startKeypoint].y * imageSize.height;
    var xScale = locationData.relativeKeypoints[endKeypoint].x * imageSize.width;
    var yScale = locationData.relativeKeypoints[endKeypoint].y * imageSize.height;
    // Bounding box size as double distance from center to scale point.
    var boxSize = Math.sqrt((xScale - xCenter) * (xScale - xCenter) +
        (yScale - yCenter) * (yScale - yCenter)) *
        2;
    var rotation = (0, detection_to_rect_1.computeRotation)(detection, imageSize, config);
    // Set resulting bounding box.
    return {
        xCenter: xCenter / imageSize.width,
        yCenter: yCenter / imageSize.height,
        width: boxSize / imageSize.width,
        height: boxSize / imageSize.height,
        rotation: rotation
    };
}
exports.calculateAlignmentPointsRects = calculateAlignmentPointsRects;

},{"./detection_to_rect":"node_modules/@tensorflow-models/pose-detection/shared/calculators/detection_to_rect.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_inverse_matrix.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateInverseMatrix = exports.arrayToMatrix4x4 = exports.matrix4x4ToArray = void 0;
function matrix4x4ToArray(matrix) {
    return [].concat.apply([], matrix);
}
exports.matrix4x4ToArray = matrix4x4ToArray;
function arrayToMatrix4x4(array) {
    if (array.length !== 16) {
        throw new Error("Array length must be 16 but got ".concat(array.length));
    }
    return [
        [array[0], array[1], array[2], array[3]],
        [array[4], array[5], array[6], array[7]],
        [array[8], array[9], array[10], array[11]],
        [array[12], array[13], array[14], array[15]],
    ];
}
exports.arrayToMatrix4x4 = arrayToMatrix4x4;
function generalDet3Helper(matrix, i1, i2, i3, j1, j2, j3) {
    return matrix[i1][j1] *
        (matrix[i2][j2] * matrix[i3][j3] - matrix[i2][j3] * matrix[i3][j2]);
}
function cofactor4x4(matrix, i, j) {
    var i1 = (i + 1) % 4, i2 = (i + 2) % 4, i3 = (i + 3) % 4, j1 = (j + 1) % 4, j2 = (j + 2) % 4, j3 = (j + 3) % 4;
    return generalDet3Helper(matrix, i1, i2, i3, j1, j2, j3) +
        generalDet3Helper(matrix, i2, i3, i1, j1, j2, j3) +
        generalDet3Helper(matrix, i3, i1, i2, j1, j2, j3);
}
/**
 * Calculates inverse of an invertible 4x4 matrix.
 * @param matrix 4x4 matrix to invert.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/inverse_matrix_calculator.cc
// https://gitlab.com/libeigen/eigen/-/blob/master/Eigen/src/LU/InverseImpl.h
function calculateInverseMatrix(matrix) {
    var inverse = arrayToMatrix4x4(new Array(16).fill(0));
    inverse[0][0] = cofactor4x4(matrix, 0, 0);
    inverse[1][0] = -cofactor4x4(matrix, 0, 1);
    inverse[2][0] = cofactor4x4(matrix, 0, 2);
    inverse[3][0] = -cofactor4x4(matrix, 0, 3);
    inverse[0][2] = cofactor4x4(matrix, 2, 0);
    inverse[1][2] = -cofactor4x4(matrix, 2, 1);
    inverse[2][2] = cofactor4x4(matrix, 2, 2);
    inverse[3][2] = -cofactor4x4(matrix, 2, 3);
    inverse[0][1] = -cofactor4x4(matrix, 1, 0);
    inverse[1][1] = cofactor4x4(matrix, 1, 1);
    inverse[2][1] = -cofactor4x4(matrix, 1, 2);
    inverse[3][1] = cofactor4x4(matrix, 1, 3);
    inverse[0][3] = -cofactor4x4(matrix, 3, 0);
    inverse[1][3] = cofactor4x4(matrix, 3, 1);
    inverse[2][3] = -cofactor4x4(matrix, 3, 2);
    inverse[3][3] = cofactor4x4(matrix, 3, 3);
    var scale = matrix[0][0] * inverse[0][0] + matrix[1][0] * inverse[0][1] +
        matrix[2][0] * inverse[0][2] + matrix[3][0] * inverse[0][3];
    for (var i = 0; i < inverse.length; i++) {
        for (var j = 0; j < inverse.length; j++) {
            inverse[i][j] /= scale;
        }
    }
    return inverse;
}
exports.calculateInverseMatrix = calculateInverseMatrix;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_landmark_projection.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLandmarkProjection = void 0;
/**
 * Projects normalized landmarks in a rectangle to its original coordinates. The
 * rectangle must also be in normalized coordinates.
 * @param landmarks A normalized Landmark list representing landmarks in a
 *     normalized rectangle.
 * @param inputRect A normalized rectangle.
 * @param config Config object has one field ignoreRotation, default to false.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmark_projection_calculator.cc
function calculateLandmarkProjection(landmarks, inputRect, config) {
    if (config === void 0) { config = {
        ignoreRotation: false
    }; }
    var outputLandmarks = [];
    for (var _i = 0, landmarks_1 = landmarks; _i < landmarks_1.length; _i++) {
        var landmark = landmarks_1[_i];
        var x = landmark.x - 0.5;
        var y = landmark.y - 0.5;
        var angle = config.ignoreRotation ? 0 : inputRect.rotation;
        var newX = Math.cos(angle) * x - Math.sin(angle) * y;
        var newY = Math.sin(angle) * x + Math.cos(angle) * y;
        newX = newX * inputRect.width + inputRect.xCenter;
        newY = newY * inputRect.height + inputRect.yCenter;
        var newZ = landmark.z * inputRect.width; // Scale Z coordinate as x.
        var newLandmark = __assign({}, landmark);
        newLandmark.x = newX;
        newLandmark.y = newY;
        newLandmark.z = newZ;
        outputLandmarks.push(newLandmark);
    }
    return outputLandmarks;
}
exports.calculateLandmarkProjection = calculateLandmarkProjection;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_score_copy.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateScoreCopy = void 0;
/**
 * A calculator to copy score between landmarks.
 *
 * Landmarks to copy from and to copy to can be of different type (normalized or
 * non-normalized), but landmarks to copy to and output landmarks should be of
 * the same type.
 * @param landmarksFrom  A list of landmarks.
 *     to copy from.
 * @param landmarksTo  A list of landmarks.
 *     to copy to.
 * @param copyScore Copy the score from the `landmarksFrom` parameter.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/visibility_copy_calculator.cc
function calculateScoreCopy(landmarksFrom, landmarksTo, copyScore) {
    if (copyScore === void 0) { copyScore = true; }
    var outputLandmarks = [];
    for (var i = 0; i < landmarksFrom.length; i++) {
        // Create output landmark and copy all fields from the `to` landmarks
        var newLandmark = __assign({}, landmarksTo[i]);
        // Copy score from the `from` landmark.
        if (copyScore) {
            newLandmark.score = landmarksFrom[i].score;
        }
        outputLandmarks.push(newLandmark);
    }
    return outputLandmarks;
}
exports.calculateScoreCopy = calculateScoreCopy;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_world_landmark_projection.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateWorldLandmarkProjection = void 0;
/**
 * Projects world landmarks from the rectangle to original coordinates.
 *
 * World landmarks are predicted in meters rather than in pixels of the image
 * and have origin in the middle of the hips rather than in the corner of the
 * pose image (cropped with given rectangle). Thus only rotation (but not scale
 * and translation) is applied to the landmarks to transform them back to
 * original coordinates.
 * @param worldLandmarks A Landmark list representing world landmarks in the
 *     rectangle.
 * @param inputRect A normalized rectangle.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmark_projection_calculator.cc
function calculateWorldLandmarkProjection(worldLandmarks, inputRect) {
    var outputLandmarks = [];
    for (var _i = 0, worldLandmarks_1 = worldLandmarks; _i < worldLandmarks_1.length; _i++) {
        var worldLandmark = worldLandmarks_1[_i];
        var x = worldLandmark.x;
        var y = worldLandmark.y;
        var angle = inputRect.rotation;
        var newX = Math.cos(angle) * x - Math.sin(angle) * y;
        var newY = Math.sin(angle) * x + Math.cos(angle) * y;
        var newLandmark = __assign({}, worldLandmark);
        newLandmark.x = newX;
        newLandmark.y = newY;
        outputLandmarks.push(newLandmark);
    }
    return outputLandmarks;
}
exports.calculateWorldLandmarkProjection = calculateWorldLandmarkProjection;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/constants.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MILLISECOND_TO_MICRO_SECONDS = exports.SECOND_TO_MICRO_SECONDS = exports.MICRO_SECONDS_TO_SECOND = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
exports.MICRO_SECONDS_TO_SECOND = 1e-6;
exports.SECOND_TO_MICRO_SECONDS = 1e6;
exports.MILLISECOND_TO_MICRO_SECONDS = 1000;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/get_rotated_sub_rect_to_rect_transformation_matrix.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRotatedSubRectToRectTransformMatrix = void 0;
var calculate_inverse_matrix_1 = require("./calculate_inverse_matrix");
/**
 * Generates a 4x4 projective transform matrix M, so that for any point in the
 * subRect image p(x, y), we can use the matrix to calculate the projected point
 * in the original image p' (x', y'): p' = p * M;
 *
 * @param subRect Rotated sub rect in absolute coordinates.
 * @param rectWidth
 * @param rectHeight
 * @param flipHorizontaly Whether to flip the image horizontally.
 */
// Ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/tensor/image_to_tensor_utils.h
function getRotatedSubRectToRectTransformMatrix(subRect, rectWidth, rectHeight, flipHorizontally) {
    // The resulting matrix is multiplication of below commented out matrices:
    //   postScaleMatrix
    //     * translateMatrix
    //     * rotateMatrix
    //     * flipMatrix
    //     * scaleMatrix
    //     * initialTranslateMatrix
    // For any point in the transformed image p, we can use the above matrix to
    // calculate the projected point in the original image p'. So that:
    // p' = p * M;
    // Note: The transform matrix below assumes image coordinates is normalized
    // to [0, 1] range.
    // Matrix to convert X,Y to [-0.5, 0.5] range "initialTranslateMatrix"
    // [ 1.0,  0.0, 0.0, -0.5]
    // [ 0.0,  1.0, 0.0, -0.5]
    // [ 0.0,  0.0, 1.0,  0.0]
    // [ 0.0,  0.0, 0.0,  1.0]
    var a = subRect.width;
    var b = subRect.height;
    // Matrix to scale X,Y,Z to sub rect "scaleMatrix"
    // Z has the same scale as X.
    // [   a, 0.0, 0.0, 0.0]
    // [0.0,    b, 0.0, 0.0]
    // [0.0, 0.0,    a, 0.0]
    // [0.0, 0.0, 0.0, 1.0]
    var flip = flipHorizontally ? -1 : 1;
    // Matrix for optional horizontal flip around middle of output image.
    // [ fl  , 0.0, 0.0, 0.0]
    // [ 0.0, 1.0, 0.0, 0.0]
    // [ 0.0, 0.0, 1.0, 0.0]
    // [ 0.0, 0.0, 0.0, 1.0]
    var c = Math.cos(subRect.rotation);
    var d = Math.sin(subRect.rotation);
    // Matrix to do rotation around Z axis "rotateMatrix"
    // [    c,   -d, 0.0, 0.0]
    // [    d,    c, 0.0, 0.0]
    // [ 0.0, 0.0, 1.0, 0.0]
    // [ 0.0, 0.0, 0.0, 1.0]
    var e = subRect.xCenter;
    var f = subRect.yCenter;
    // Matrix to do X,Y translation of sub rect within parent rect
    // "translateMatrix"
    // [1.0, 0.0, 0.0, e   ]
    // [0.0, 1.0, 0.0, f   ]
    // [0.0, 0.0, 1.0, 0.0]
    // [0.0, 0.0, 0.0, 1.0]
    var g = 1.0 / rectWidth;
    var h = 1.0 / rectHeight;
    // Matrix to scale X,Y,Z to [0.0, 1.0] range "postScaleMatrix"
    // [g,    0.0, 0.0, 0.0]
    // [0.0, h,    0.0, 0.0]
    // [0.0, 0.0,    g, 0.0]
    // [0.0, 0.0, 0.0, 1.0]
    var matrix = new Array(16);
    // row 1
    matrix[0] = a * c * flip * g;
    matrix[1] = -b * d * g;
    matrix[2] = 0.0;
    matrix[3] = (-0.5 * a * c * flip + 0.5 * b * d + e) * g;
    // row 2
    matrix[4] = a * d * flip * h;
    matrix[5] = b * c * h;
    matrix[6] = 0.0;
    matrix[7] = (-0.5 * b * c - 0.5 * a * d * flip + f) * h;
    // row 3
    matrix[8] = 0.0;
    matrix[9] = 0.0;
    matrix[10] = a * g;
    matrix[11] = 0.0;
    // row 4
    matrix[12] = 0.0;
    matrix[13] = 0.0;
    matrix[14] = 0.0;
    matrix[15] = 1.0;
    return (0, calculate_inverse_matrix_1.arrayToMatrix4x4)(matrix);
}
exports.getRotatedSubRectToRectTransformMatrix = getRotatedSubRectToRectTransformMatrix;

},{"./calculate_inverse_matrix":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_inverse_matrix.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/shift_image_value.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftImageValue = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
var image_utils_1 = require("./image_utils");
function shiftImageValue(image, outputFloatRange) {
    // Calculate the scale and offset to shift from [0, 255] to [-1, 1].
    var valueRange = (0, image_utils_1.transformValueRange)(0, 255, outputFloatRange[0] /* min */, outputFloatRange[1] /* max */);
    // Shift value range.
    return tf.tidy(function () { return tf.add(tf.mul(image, valueRange.scale), valueRange.offset); });
}
exports.shiftImageValue = shiftImageValue;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/convert_image_to_tensor.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertImageToTensor = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
var get_rotated_sub_rect_to_rect_transformation_matrix_1 = require("./get_rotated_sub_rect_to_rect_transformation_matrix");
var image_utils_1 = require("./image_utils");
var shift_image_value_1 = require("./shift_image_value");
/**
 * Convert an image or part of it to an image tensor.
 *
 * @param image An image, video frame or image tensor.
 * @param config
 *      inputResolution: The target height and width.
 *      keepAspectRatio?: Whether target tensor should keep aspect ratio.
 * @param normRect A normalized rectangle, representing the subarea to crop from
 *      the image. If normRect is provided, the returned image tensor represents
 *      the subarea.
 * @returns A map with the following properties:
 *     - imageTensor
 *     - padding: Padding ratio of left, top, right, bottom, based on the output
 * dimensions.
 *     - transformationMatrix: Projective transform matrix used to transform
 * input image to transformed image.
 */
function convertImageToTensor(image, config, normRect) {
    var outputTensorSize = config.outputTensorSize, keepAspectRatio = config.keepAspectRatio, borderMode = config.borderMode, outputTensorFloatRange = config.outputTensorFloatRange;
    // Ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/calculators/tensor/image_to_tensor_calculator.cc
    var imageSize = (0, image_utils_1.getImageSize)(image);
    var roi = (0, image_utils_1.getRoi)(imageSize, normRect);
    var padding = (0, image_utils_1.padRoi)(roi, outputTensorSize, keepAspectRatio);
    var transformationMatrix = (0, get_rotated_sub_rect_to_rect_transformation_matrix_1.getRotatedSubRectToRectTransformMatrix)(roi, imageSize.width, imageSize.height, false);
    var imageTensor = tf.tidy(function () {
        var $image = (0, image_utils_1.toImageTensor)(image);
        var transformMatrix = tf.tensor2d((0, image_utils_1.getProjectiveTransformMatrix)(transformationMatrix, imageSize, outputTensorSize), [1, 8]);
        var fillMode = borderMode === 'zero' ? 'constant' : 'nearest';
        var imageTransformed = tf.image.transform(
        // tslint:disable-next-line: no-unnecessary-type-assertion
        tf.expandDims(tf.cast($image, 'float32')), transformMatrix, 'bilinear', fillMode, 0, [outputTensorSize.height, outputTensorSize.width]);
        var imageShifted = outputTensorFloatRange != null ?
            (0, shift_image_value_1.shiftImageValue)(imageTransformed, outputTensorFloatRange) :
            imageTransformed;
        return imageShifted;
    });
    return { imageTensor: imageTensor, padding: padding, transformationMatrix: transformationMatrix };
}
exports.convertImageToTensor = convertImageToTensor;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./get_rotated_sub_rect_to_rect_transformation_matrix":"node_modules/@tensorflow-models/pose-detection/shared/calculators/get_rotated_sub_rect_to_rect_transformation_matrix.js","./image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js","./shift_image_value":"node_modules/@tensorflow-models/pose-detection/shared/calculators/shift_image_value.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/create_ssd_anchors.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSsdAnchors = void 0;
// ref:
// https://github.com/google/mediapipe/blob/350fbb2100ad531bc110b93aaea23d96af5a5064/mediapipe/calculators/tflite/ssd_anchors_calculator.cc
function createSsdAnchors(config) {
    // Set defaults.
    if (config.reduceBoxesInLowestLayer == null) {
        config.reduceBoxesInLowestLayer = false;
    }
    if (config.interpolatedScaleAspectRatio == null) {
        config.interpolatedScaleAspectRatio = 1.0;
    }
    if (config.fixedAnchorSize == null) {
        config.fixedAnchorSize = false;
    }
    var anchors = [];
    var layerId = 0;
    while (layerId < config.numLayers) {
        var anchorHeight = [];
        var anchorWidth = [];
        var aspectRatios = [];
        var scales = [];
        // For same strides, we merge the anchors in the same order.
        var lastSameStrideLayer = layerId;
        while (lastSameStrideLayer < config.strides.length &&
            config.strides[lastSameStrideLayer] === config.strides[layerId]) {
            var scale = calculateScale(config.minScale, config.maxScale, lastSameStrideLayer, config.strides.length);
            if (lastSameStrideLayer === 0 && config.reduceBoxesInLowestLayer) {
                // For first layer, it can be specified to use predefined anchors.
                aspectRatios.push(1);
                aspectRatios.push(2);
                aspectRatios.push(0.5);
                scales.push(0.1);
                scales.push(scale);
                scales.push(scale);
            }
            else {
                for (var aspectRatioId = 0; aspectRatioId < config.aspectRatios.length; ++aspectRatioId) {
                    aspectRatios.push(config.aspectRatios[aspectRatioId]);
                    scales.push(scale);
                }
                if (config.interpolatedScaleAspectRatio > 0.0) {
                    var scaleNext = lastSameStrideLayer === config.strides.length - 1 ?
                        1.0 :
                        calculateScale(config.minScale, config.maxScale, lastSameStrideLayer + 1, config.strides.length);
                    scales.push(Math.sqrt(scale * scaleNext));
                    aspectRatios.push(config.interpolatedScaleAspectRatio);
                }
            }
            lastSameStrideLayer++;
        }
        for (var i = 0; i < aspectRatios.length; ++i) {
            var ratioSqrts = Math.sqrt(aspectRatios[i]);
            anchorHeight.push(scales[i] / ratioSqrts);
            anchorWidth.push(scales[i] * ratioSqrts);
        }
        var featureMapHeight = 0;
        var featureMapWidth = 0;
        if (config.featureMapHeight.length > 0) {
            featureMapHeight = config.featureMapHeight[layerId];
            featureMapWidth = config.featureMapWidth[layerId];
        }
        else {
            var stride = config.strides[layerId];
            featureMapHeight = Math.ceil(config.inputSizeHeight / stride);
            featureMapWidth = Math.ceil(config.inputSizeWidth / stride);
        }
        for (var y = 0; y < featureMapHeight; ++y) {
            for (var x = 0; x < featureMapWidth; ++x) {
                for (var anchorId = 0; anchorId < anchorHeight.length; ++anchorId) {
                    var xCenter = (x + config.anchorOffsetX) / featureMapWidth;
                    var yCenter = (y + config.anchorOffsetY) / featureMapHeight;
                    var newAnchor = { xCenter: xCenter, yCenter: yCenter, width: 0, height: 0 };
                    if (config.fixedAnchorSize) {
                        newAnchor.width = 1.0;
                        newAnchor.height = 1.0;
                    }
                    else {
                        newAnchor.width = anchorWidth[anchorId];
                        newAnchor.height = anchorHeight[anchorId];
                    }
                    anchors.push(newAnchor);
                }
            }
        }
        layerId = lastSameStrideLayer;
    }
    return anchors;
}
exports.createSsdAnchors = createSsdAnchors;
function calculateScale(minScale, maxScale, strideIndex, numStrides) {
    if (numStrides === 1) {
        return (minScale + maxScale) * 0.5;
    }
    else {
        return minScale + (maxScale - minScale) * strideIndex / (numStrides - 1);
    }
}

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/split_detection_result.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitDetectionResult = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
function splitDetectionResult(detectionResult) {
    return tf.tidy(function () {
        // logit is stored in the first element in each anchor data.
        var logits = tf.slice(detectionResult, [0, 0, 0], [1, -1, 1]);
        // Bounding box coords are stored in the next four elements for each anchor
        // point.
        var rawBoxes = tf.slice(detectionResult, [0, 0, 1], [1, -1, -1]);
        return [logits, rawBoxes];
    });
}
exports.splitDetectionResult = splitDetectionResult;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/detector_result.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectorResult = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
var split_detection_result_1 = require("./split_detection_result");
function detectorResult(detectionResult) {
    return tf.tidy(function () {
        var _a = (0, split_detection_result_1.splitDetectionResult)(detectionResult), logits = _a[0], rawBoxes = _a[1];
        // Shape [896, 12]
        var rawBoxes2d = tf.squeeze(rawBoxes);
        // Shape [896]
        var logits1d = tf.squeeze(logits);
        return { boxes: rawBoxes2d, logits: logits1d };
    });
}
exports.detectorResult = detectorResult;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./split_detection_result":"node_modules/@tensorflow-models/pose-detection/shared/calculators/split_detection_result.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/is_video.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVideo = void 0;
function isVideo(image) {
    return (image != null) && image.currentTime != null;
}
exports.isVideo = isVideo;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/landmarks_to_detection.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.landmarksToDetection = void 0;
/**
 * Converts normalized Landmark to `Detection`. A relative bounding box will
 * be created containing all landmarks exactly.
 * @param landmarks List of normalized landmarks.
 *
 * @returns A `Detection`.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmarks_to_detection_calculator.cc
function landmarksToDetection(landmarks) {
    var detection = { locationData: { relativeKeypoints: [] } };
    var xMin = Number.MAX_SAFE_INTEGER;
    var xMax = Number.MIN_SAFE_INTEGER;
    var yMin = Number.MAX_SAFE_INTEGER;
    var yMax = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < landmarks.length; ++i) {
        var landmark = landmarks[i];
        xMin = Math.min(xMin, landmark.x);
        xMax = Math.max(xMax, landmark.x);
        yMin = Math.min(yMin, landmark.y);
        yMax = Math.max(yMax, landmark.y);
        detection.locationData.relativeKeypoints.push({ x: landmark.x, y: landmark.y });
    }
    detection.locationData.relativeBoundingBox =
        { xMin: xMin, yMin: yMin, xMax: xMax, yMax: yMax, width: (xMax - xMin), height: (yMax - yMin) };
    return detection;
}
exports.landmarksToDetection = landmarksToDetection;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/non_max_suppression.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonMaxSuppression = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
function nonMaxSuppression(detections, maxDetections, iouThreshold, 
// Currently only IOU overap is supported.
overlapType) {
    return __awaiter(this, void 0, void 0, function () {
        var detectionsTensor, scoresTensor, selectedIdsTensor, selectedIds, selectedDetections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Sort to match NonMaxSuppresion calculator's decreasing detection score
                    // traversal.
                    // NonMaxSuppresionCalculator: RetainMaxScoringLabelOnly
                    detections.sort(function (detectionA, detectionB) {
                        return Math.max.apply(Math, detectionB.score) - Math.max.apply(Math, detectionA.score);
                    });
                    detectionsTensor = tf.tensor2d(detections.map(function (d) {
                        return [d.locationData.relativeBoundingBox.yMin,
                            d.locationData.relativeBoundingBox.xMin,
                            d.locationData.relativeBoundingBox.yMax,
                            d.locationData.relativeBoundingBox.xMax];
                    }));
                    scoresTensor = tf.tensor1d(detections.map(function (d) { return d.score[0]; }));
                    return [4 /*yield*/, tf.image.nonMaxSuppressionAsync(detectionsTensor, scoresTensor, maxDetections, iouThreshold)];
                case 1:
                    selectedIdsTensor = _a.sent();
                    return [4 /*yield*/, selectedIdsTensor.array()];
                case 2:
                    selectedIds = _a.sent();
                    selectedDetections = detections.filter(function (_, i) { return (selectedIds.indexOf(i) > -1); });
                    tf.dispose([detectionsTensor, scoresTensor, selectedIdsTensor]);
                    return [2 /*return*/, selectedDetections];
            }
        });
    });
}
exports.nonMaxSuppression = nonMaxSuppression;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/normalized_keypoints_to_keypoints.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizedKeypointsToKeypoints = void 0;
function normalizedKeypointsToKeypoints(normalizedKeypoints, imageSize) {
    return normalizedKeypoints.map(function (normalizedKeypoint) {
        var keypoint = __assign(__assign({}, normalizedKeypoint), { x: normalizedKeypoint.x * imageSize.width, y: normalizedKeypoint.y * imageSize.height });
        if (normalizedKeypoint.z != null) {
            // Scale z the same way as x (using image width).
            keypoint.z = normalizedKeypoint.z * imageSize.width;
        }
        return keypoint;
    });
}
exports.normalizedKeypointsToKeypoints = normalizedKeypointsToKeypoints;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/refine_landmarks_from_heatmap.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refineLandmarksFromHeatmap = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
/**
 * A calculator that refines landmarks using corresponding heatmap area.
 *
 * High level algorithm
 * For each landmark, we replace original value with a value calculated from the
 * area in heatmap close to original landmark position (the area is defined by
 * config.kernelSize). To calculate new coordinate from heatmap we calculate an
 * weighted average inside the kernel. We update the landmark if heatmap is
 * confident in it's prediction i.e. max(heatmap) in kernel is at least bigger
 * than config.minConfidenceToRefine.
 * @param landmarks List of lardmarks to refine.
 * @param heatmapTensor The heatmap for the landmarks with shape
 *     [height, width, channel]. The channel dimension has to be the same as
 *     the number of landmarks.
 * @param config The config for refineLandmarksFromHeap,
 *     see `RefineLandmarksFromHeatmapConfig` for detail.
 *
 * @returns Normalized landmarks.
 */
function refineLandmarksFromHeatmap(landmarks, heatmapTensor, config) {
    return __awaiter(this, void 0, void 0, function () {
        var $heatmapTensor, _a, hmHeight, hmWidth, hmChannels, outLandmarks, heatmapBuf, i, landmark, outLandmark, centerCol, centerRow, offset, beginCol, endCol, beginRow, endRow, sum, weightedCol, weightedRow, maxValue, row, col, confidence;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    $heatmapTensor = tf.squeeze(heatmapTensor, [0]);
                    _a = $heatmapTensor.shape, hmHeight = _a[0], hmWidth = _a[1], hmChannels = _a[2];
                    if (landmarks.length !== hmChannels) {
                        throw new Error('Expected heatmap to have same number of channels ' +
                            'as the number of landmarks. But got landmarks length: ' +
                            "".concat(landmarks.length, ", heatmap length: ").concat(hmChannels));
                    }
                    outLandmarks = [];
                    return [4 /*yield*/, $heatmapTensor.buffer()];
                case 1:
                    heatmapBuf = _b.sent();
                    for (i = 0; i < landmarks.length; i++) {
                        landmark = landmarks[i];
                        outLandmark = __assign({}, landmark);
                        outLandmarks.push(outLandmark);
                        centerCol = Math.trunc(outLandmark.x * hmWidth);
                        centerRow = Math.trunc(outLandmark.y * hmHeight);
                        // Point is outside of the image let's keep it intact.
                        if (centerCol < 0 || centerCol >= hmWidth || centerRow < 0 ||
                            centerCol >= hmHeight) {
                            continue;
                        }
                        offset = Math.trunc((config.kernelSize - 1) / 2);
                        beginCol = Math.max(0, centerCol - offset);
                        endCol = Math.min(hmWidth, centerCol + offset + 1);
                        beginRow = Math.max(0, centerRow - offset);
                        endRow = Math.min(hmHeight, centerRow + offset + 1);
                        sum = 0;
                        weightedCol = 0;
                        weightedRow = 0;
                        maxValue = 0;
                        // Main loop. Go over kernel and calculate weighted sum of coordinates,
                        // sum of weights and max weights.
                        for (row = beginRow; row < endRow; ++row) {
                            for (col = beginCol; col < endCol; ++col) {
                                confidence = heatmapBuf.get(row, col, i);
                                sum += confidence;
                                maxValue = Math.max(maxValue, confidence);
                                weightedCol += col * confidence;
                                weightedRow += row * confidence;
                            }
                        }
                        if (maxValue >= config.minConfidenceToRefine && sum > 0) {
                            outLandmark.x = weightedCol / hmWidth / sum;
                            outLandmark.y = weightedRow / hmHeight / sum;
                        }
                    }
                    $heatmapTensor.dispose();
                    return [2 /*return*/, outLandmarks];
            }
        });
    });
}
exports.refineLandmarksFromHeatmap = refineLandmarksFromHeatmap;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/remove_detection_letterbox.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDetectionLetterbox = void 0;
/**
 * Adjusts detection locations on the letterboxed image to the corresponding
 * locations on the same image with the letterbox removed (the input image to
 * the graph before image transformation).
 *
 * @param detections A list of detection boxes on an letterboxed image.
 * @param letterboxPadding A `padding` object representing the letterbox padding
 *     from the 4 sides: left, top, right, bottom, of the letterboxed image,
 *     normalized by the letterboxed image dimensions.
 * @returns detections: A list of detection boxes representing detections with
 *     their locations adjusted to the letterbox-removed (non-padded) image.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/detection_letterbox_removal_calculator.cc
function removeDetectionLetterbox(detections, letterboxPadding) {
    if (detections === void 0) { detections = []; }
    var left = letterboxPadding.left;
    var top = letterboxPadding.top;
    var leftAndRight = letterboxPadding.left + letterboxPadding.right;
    var topAndBottom = letterboxPadding.top + letterboxPadding.bottom;
    for (var i = 0; i < detections.length; i++) {
        var detection = detections[i];
        var relativeBoundingBox = detection.locationData.relativeBoundingBox;
        var xMin = (relativeBoundingBox.xMin - left) / (1 - leftAndRight);
        var yMin = (relativeBoundingBox.yMin - top) / (1 - topAndBottom);
        var width = relativeBoundingBox.width / (1 - leftAndRight);
        var height = relativeBoundingBox.height / (1 - topAndBottom);
        relativeBoundingBox.xMin = xMin;
        relativeBoundingBox.yMin = yMin;
        relativeBoundingBox.width = width;
        relativeBoundingBox.height = height;
        relativeBoundingBox.xMax = xMin + width;
        relativeBoundingBox.yMax = yMin + height;
        var relativeKeypoints = detection.locationData.relativeKeypoints;
        if (relativeKeypoints) {
            relativeKeypoints.forEach(function (keypoint) {
                var newX = (keypoint.x - left) / (1 - leftAndRight);
                var newY = (keypoint.y - top) / (1 - topAndBottom);
                keypoint.x = newX;
                keypoint.y = newY;
            });
        }
    }
    return detections;
}
exports.removeDetectionLetterbox = removeDetectionLetterbox;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/remove_landmark_letterbox.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLandmarkLetterbox = void 0;
/**
 * Adjusts landmark locations on a letterboxed image to the corresponding
 * locations on the same image with the letterbox removed.
 * @param rawLandmark A NormalizedLandmarkList representing landmarks on an
 * letterboxed image.
 * @param padding A `padding` representing the letterbox padding from the 4
 *     sides, left, top, right, bottom, of the letterboxed image, normalized by
 *     the letterboxed image dimensions.
 * @returns Normalized landmarks.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmark_letterbox_removal_calculator.cc
function removeLandmarkLetterbox(rawLandmark, padding) {
    var left = padding.left;
    var top = padding.top;
    var leftAndRight = padding.left + padding.right;
    var topAndBottom = padding.top + padding.bottom;
    var outLandmarks = rawLandmark.map(function (landmark) {
        return __assign(__assign({}, landmark), { x: (landmark.x - left) / (1 - leftAndRight), y: (landmark.y - top) / (1 - topAndBottom), z: landmark.z / (1 - leftAndRight) // Scale Z coordinate as X.
         });
    });
    return outLandmarks;
}
exports.removeLandmarkLetterbox = removeLandmarkLetterbox;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/segmentation_smoothing.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smoothSegmentation = void 0;
var tf = require("@tensorflow/tfjs-core");
/**
 * A calculator for mixing two segmentation masks together, based on an
 * uncertantity probability estimate.
 * @param prevMaks Segmentation mask from previous image.
 * @param newMask Segmentation mask of current image.
 * @param config Contains ratio of amount of previous mask to blend with
 *     current.
 *
 * @returns Image mask.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/image/segmentation_smoothing_calculator.cc
function smoothSegmentation(prevMask, newMask, config) {
    if (tf.getBackend() === 'webgl') {
        // Same as implementation in the else case but reduces number of shader
        // calls to 1 instead of 17.
        return smoothSegmentationWebGL(prevMask, newMask, config);
    }
    return tf.tidy(function () {
        /*
         * Assume p := newMaskValue
         * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)
         * uncertainty alpha(p) =
         *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the
         * uncertainty]
         *
         * The following polynomial approximates uncertainty alpha as a
         * function of (p + 0.5):
         */
        var c1 = 5.68842;
        var c2 = -0.748699;
        var c3 = -57.8051;
        var c4 = 291.309;
        var c5 = -624.717;
        var t = tf.sub(newMask, 0.5);
        var x = tf.square(t);
        // Per element calculation is: 1.0 - Math.min(1.0, x * (c1 + x * (c2 + x
        // * (c3 + x * (c4 + x * c5))))).
        var uncertainty = tf.sub(1, tf.minimum(1, tf.mul(x, tf.add(c1, tf.mul(x, tf.add(c2, tf.mul(x, tf.add(c3, tf.mul(x, tf.add(c4, tf.mul(x, c5)))))))))));
        // Per element calculation is: newMaskValue + (prevMaskValue -
        // newMaskValue) * (uncertainty * combineWithPreviousRatio).
        return tf.add(newMask, tf.mul(tf.sub(prevMask, newMask), tf.mul(uncertainty, config.combineWithPreviousRatio)));
    });
}
exports.smoothSegmentation = smoothSegmentation;
function smoothSegmentationWebGL(prevMask, newMask, config) {
    var ratio = config.combineWithPreviousRatio.toFixed(2);
    var program = {
        variableNames: ['prevMask', 'newMask'],
        outputShape: prevMask.shape,
        userCode: "\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * ".concat(ratio, ");\n\n      setOutput(outputValue);\n    }\n")
    };
    var webglBackend = tf.backend();
    return tf.tidy(function () {
        var outputTensorInfo = webglBackend.compileAndRun(program, [prevMask, newMask]);
        return tf.engine().makeTensorFromDataId(outputTensorInfo.dataId, outputTensorInfo.shape, outputTensorInfo.dtype);
    });
}

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_detections.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDetections = exports.tensorsToDetections = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
/**
 * Convert result Tensors from object detection models into Detection boxes.
 *
 * @param detectionTensors List of Tensors of type Float32. The list of tensors
 *     can have 2 or 3 tensors. First tensor is the predicted raw
 *     boxes/keypoints. The size of the values must be
 *     (num_boxes * num_predicted_values). Second tensor is the score tensor.
 *     The size of the valuse must be (num_boxes * num_classes). It's optional
 *     to pass in a third tensor for anchors (e.g. for SSD models) depend on the
 *     outputs of the detection model. The size of anchor tensor must be
 *     (num_boxes * 4).
 * @param anchor A tensor for anchors. The size of anchor tensor must be
 *     (num_boxes * 4).
 * @param config
 */
function tensorsToDetections(detectionTensors, anchor, config) {
    return __awaiter(this, void 0, void 0, function () {
        var rawScoreTensor, rawBoxTensor, boxes, normalizedScore, outputDetections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rawScoreTensor = detectionTensors[0];
                    rawBoxTensor = detectionTensors[1];
                    boxes = decodeBoxes(rawBoxTensor, anchor, config);
                    normalizedScore = tf.tidy(function () {
                        var normalizedScore = rawScoreTensor;
                        if (config.sigmoidScore) {
                            if (config.scoreClippingThresh != null) {
                                normalizedScore = tf.clipByValue(rawScoreTensor, -config.scoreClippingThresh, config.scoreClippingThresh);
                            }
                            normalizedScore = tf.sigmoid(normalizedScore);
                            return normalizedScore;
                        }
                        return normalizedScore;
                    });
                    return [4 /*yield*/, convertToDetections(boxes, normalizedScore, config)];
                case 1:
                    outputDetections = _a.sent();
                    tf.dispose([boxes, normalizedScore]);
                    return [2 /*return*/, outputDetections];
            }
        });
    });
}
exports.tensorsToDetections = tensorsToDetections;
function convertToDetections(detectionBoxes, detectionScore, config) {
    return __awaiter(this, void 0, void 0, function () {
        var outputDetections, detectionBoxesData, detectionScoresData, i, boxOffset, detection, bbox, locationData, totalIdx, kpId, keypointIndex, keypoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    outputDetections = [];
                    return [4 /*yield*/, detectionBoxes.data()];
                case 1:
                    detectionBoxesData = _a.sent();
                    return [4 /*yield*/, detectionScore.data()];
                case 2:
                    detectionScoresData = _a.sent();
                    for (i = 0; i < config.numBoxes; ++i) {
                        if (config.minScoreThresh != null &&
                            detectionScoresData[i] < config.minScoreThresh) {
                            continue;
                        }
                        boxOffset = i * config.numCoords;
                        detection = convertToDetection(detectionBoxesData[boxOffset + 0] /* boxYMin */, detectionBoxesData[boxOffset + 1] /* boxXMin */, detectionBoxesData[boxOffset + 2] /* boxYMax */, detectionBoxesData[boxOffset + 3] /* boxXMax */, detectionScoresData[i], config.flipVertically, i);
                        bbox = detection.locationData.relativeBoundingBox;
                        if (bbox.width < 0 || bbox.height < 0) {
                            // Decoded detection boxes could have negative values for width/height
                            // due to model prediction. Filter out those boxes since some
                            // downstream calculators may assume non-negative values.
                            continue;
                        }
                        // Add keypoints.
                        if (config.numKeypoints > 0) {
                            locationData = detection.locationData;
                            locationData.relativeKeypoints = [];
                            totalIdx = config.numKeypoints * config.numValuesPerKeypoint;
                            for (kpId = 0; kpId < totalIdx; kpId += config.numValuesPerKeypoint) {
                                keypointIndex = boxOffset + config.keypointCoordOffset + kpId;
                                keypoint = {
                                    x: detectionBoxesData[keypointIndex + 0],
                                    y: config.flipVertically ? 1 - detectionBoxesData[keypointIndex + 1] :
                                        detectionBoxesData[keypointIndex + 1]
                                };
                                locationData.relativeKeypoints.push(keypoint);
                            }
                        }
                        outputDetections.push(detection);
                    }
                    return [2 /*return*/, outputDetections];
            }
        });
    });
}
exports.convertToDetections = convertToDetections;
function convertToDetection(boxYMin, boxXMin, boxYMax, boxXMax, score, flipVertically, i) {
    return {
        score: [score],
        ind: i,
        locationData: {
            relativeBoundingBox: {
                xMin: boxXMin,
                yMin: flipVertically ? 1 - boxYMax : boxYMin,
                xMax: boxXMax,
                yMax: flipVertically ? 1 - boxYMin : boxYMax,
                width: boxXMax - boxXMin,
                height: boxYMax - boxYMin
            }
        }
    };
}
//[xCenter, yCenter, w, h, kp1, kp2, kp3, kp4]
//[yMin, xMin, yMax, xMax, kpX, kpY, kpX, kpY]
function decodeBoxes(rawBoxes, anchor, config) {
    return tf.tidy(function () {
        var yCenter;
        var xCenter;
        var h;
        var w;
        if (config.reverseOutputOrder) {
            // Shape [numOfBoxes, 1].
            xCenter = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 0], [-1, 1]));
            yCenter = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 1], [-1, 1]));
            w = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 2], [-1, 1]));
            h = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 3], [-1, 1]));
        }
        else {
            yCenter = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 0], [-1, 1]));
            xCenter = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 1], [-1, 1]));
            h = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 2], [-1, 1]));
            w = tf.squeeze(tf.slice(rawBoxes, [0, config.boxCoordOffset + 3], [-1, 1]));
        }
        xCenter =
            tf.add(tf.mul(tf.div(xCenter, config.xScale), anchor.w), anchor.x);
        yCenter =
            tf.add(tf.mul(tf.div(yCenter, config.yScale), anchor.h), anchor.y);
        if (config.applyExponentialOnBoxSize) {
            h = tf.mul(tf.exp(tf.div(h, config.hScale)), anchor.h);
            w = tf.mul(tf.exp(tf.div(w, config.wScale)), anchor.w);
        }
        else {
            h = tf.mul(tf.div(h, config.hScale), anchor.h);
            w = tf.mul(tf.div(w, config.wScale), anchor.h);
        }
        var yMin = tf.sub(yCenter, tf.div(h, 2));
        var xMin = tf.sub(xCenter, tf.div(w, 2));
        var yMax = tf.add(yCenter, tf.div(h, 2));
        var xMax = tf.add(xCenter, tf.div(w, 2));
        // Shape [numOfBoxes, 4].
        var boxes = tf.concat([
            tf.reshape(yMin, [config.numBoxes, 1]),
            tf.reshape(xMin, [config.numBoxes, 1]),
            tf.reshape(yMax, [config.numBoxes, 1]),
            tf.reshape(xMax, [config.numBoxes, 1])
        ], 1);
        if (config.numKeypoints) {
            for (var k = 0; k < config.numKeypoints; ++k) {
                var keypointOffset = config.keypointCoordOffset + k * config.numValuesPerKeypoint;
                var keypointX = void 0;
                var keypointY = void 0;
                if (config.reverseOutputOrder) {
                    keypointX =
                        tf.squeeze(tf.slice(rawBoxes, [0, keypointOffset], [-1, 1]));
                    keypointY =
                        tf.squeeze(tf.slice(rawBoxes, [0, keypointOffset + 1], [-1, 1]));
                }
                else {
                    keypointY =
                        tf.squeeze(tf.slice(rawBoxes, [0, keypointOffset], [-1, 1]));
                    keypointX =
                        tf.squeeze(tf.slice(rawBoxes, [0, keypointOffset + 1], [-1, 1]));
                }
                var keypointXNormalized = tf.add(tf.mul(tf.div(keypointX, config.xScale), anchor.w), anchor.x);
                var keypointYNormalized = tf.add(tf.mul(tf.div(keypointY, config.yScale), anchor.h), anchor.y);
                boxes = tf.concat([
                    boxes, tf.reshape(keypointXNormalized, [config.numBoxes, 1]),
                    tf.reshape(keypointYNormalized, [config.numBoxes, 1])
                ], 1);
            }
        }
        // Shape [numOfBoxes, 4] || [numOfBoxes, 12].
        return boxes;
    });
}

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/sigmoid.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigmoid = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function sigmoid(value) {
    return 1 / (1 + Math.exp(-value));
}
exports.sigmoid = sigmoid;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_landmarks.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tensorsToLandmarks = void 0;
var sigmoid_1 = require("./sigmoid");
function applyActivation(activation, value) {
    return activation === 'none' ? value : (0, sigmoid_1.sigmoid)(value);
}
/**
 * A calculator for converting Tensors from regression models into landmarks.
 * Note that if the landmarks in the tensor has more than 5 dimensions, only the
 * first 5 dimensions will be converted to [x,y,z, visibility, presence]. The
 * latter two fields may also stay unset if such attributes are not supported in
 * the model.
 * @param landmarkTensor List of Tensors of type float32. Only the first tensor
 * will be used. The size of the values must be (num_dimension x num_landmarks).
 * @param flipHorizontally Optional. Whether to flip landmarks horizontally or
 * not. Overrides corresponding field in config.
 * @param flipVertically Optional. Whether to flip landmarks vertically or not.
 * Overrides corresponding field in config.
 *
 * @param config
 *
 * @returns Normalized landmarks.
 */
function tensorsToLandmarks(landmarkTensor, config, flipHorizontally, flipVertically) {
    return __awaiter(this, void 0, void 0, function () {
        var numValues, numDimensions, rawLandmarks, outputLandmarks, ld, offset, landmark, i, landmark;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flipHorizontally = flipHorizontally || config.flipHorizontally || false;
                    flipVertically = flipVertically || config.flipVertically || false;
                    numValues = landmarkTensor.size;
                    numDimensions = numValues / config.numLandmarks;
                    return [4 /*yield*/, landmarkTensor.data()];
                case 1:
                    rawLandmarks = _a.sent();
                    outputLandmarks = [];
                    for (ld = 0; ld < config.numLandmarks; ++ld) {
                        offset = ld * numDimensions;
                        landmark = { x: 0, y: 0 };
                        if (flipHorizontally) {
                            landmark.x = config.inputImageWidth - rawLandmarks[offset];
                        }
                        else {
                            landmark.x = rawLandmarks[offset];
                        }
                        if (numDimensions > 1) {
                            if (flipVertically) {
                                landmark.y = config.inputImageHeight - rawLandmarks[offset + 1];
                            }
                            else {
                                landmark.y = rawLandmarks[offset + 1];
                            }
                        }
                        if (numDimensions > 2) {
                            landmark.z = rawLandmarks[offset + 2];
                        }
                        if (numDimensions > 3) {
                            landmark.score = applyActivation(config.visibilityActivation, rawLandmarks[offset + 3]);
                        }
                        // presence is in rawLandmarks[offset + 4], we don't expose it.
                        outputLandmarks.push(landmark);
                    }
                    for (i = 0; i < outputLandmarks.length; ++i) {
                        landmark = outputLandmarks[i];
                        landmark.x = landmark.x / config.inputImageWidth;
                        landmark.y = landmark.y / config.inputImageHeight;
                        // Scale Z coordinate as X + allow additional uniform normalization.
                        landmark.z = landmark.z / config.inputImageWidth / (config.normalizeZ || 1);
                    }
                    return [2 /*return*/, outputLandmarks];
            }
        });
    });
}
exports.tensorsToLandmarks = tensorsToLandmarks;

},{"./sigmoid":"node_modules/@tensorflow-models/pose-detection/shared/calculators/sigmoid.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_segmentation.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tensorsToSegmentation = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var tf = require("@tensorflow/tfjs-core");
/**
 * Converts a tensor from a segmentation model to an image mask.
 * @param segmentationTensor Output from segmentation model of shape (1, height,
 *     width, channels).
 * @param config Contains activation to apply.
 * @param outputSize Desired dimensions of output image mask.
 *
 * @returns Image mask.
 */
function tensorsToSegmentation(segmentationTensor, config, outputSize) {
    return tf.tidy(function () {
        // Remove batch dimension.
        var $segmentationTensor = 
        // tslint:disable-next-line: no-unnecessary-type-assertion
        tf.squeeze(segmentationTensor, [0]);
        var tensorChannels = $segmentationTensor.shape[2];
        // Process mask tensor and apply activation function.
        if (tensorChannels === 1) {
            // Create initial working mask.
            var smallMaskMat = $segmentationTensor;
            switch (config.activation) {
                case 'none':
                    break;
                case 'sigmoid':
                    smallMaskMat = tf.sigmoid(smallMaskMat);
                    break;
                case 'softmax':
                    throw new Error('Softmax activation requires two channels.');
                default:
                    throw new Error("Activation not supported (".concat(config.activation, ")"));
            }
            var outputMat = outputSize ?
                tf.image.resizeBilinear(smallMaskMat, [outputSize.height, outputSize.width]) :
                smallMaskMat;
            // Remove channel dimension.
            return tf.squeeze(outputMat, [2]);
        }
        else {
            throw new Error("Unsupported number of tensor channels ".concat(tensorChannels));
        }
    });
}
exports.tensorsToSegmentation = tensorsToSegmentation;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/transform_rect.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeNewRotation = exports.transformNormalizedRect = void 0;
var image_utils_1 = require("./image_utils");
/**
 * Performs geometric transformation to the input normalized rectangle,
 * correpsonding to input normalized rectangle respectively.
 * @param rect The normalized rectangle.
 * @param imageSize The original imageSize.
 * @param config See documentation in `RectTransformationConfig`.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/rect_transformation_calculator.cc
function transformNormalizedRect(rect, imageSize, config) {
    var width = rect.width;
    var height = rect.height;
    var rotation = rect.rotation;
    if (config.rotation != null || config.rotationDegree != null) {
        rotation = computeNewRotation(rotation, config);
    }
    if (rotation === 0) {
        rect.xCenter = rect.xCenter + width * config.shiftX;
        rect.yCenter = rect.yCenter + height * config.shiftY;
    }
    else {
        var xShift = (imageSize.width * width * config.shiftX * Math.cos(rotation) -
            imageSize.height * height * config.shiftY * Math.sin(rotation)) /
            imageSize.width;
        var yShift = (imageSize.width * width * config.shiftX * Math.sin(rotation) +
            imageSize.height * height * config.shiftY * Math.cos(rotation)) /
            imageSize.height;
        rect.xCenter = rect.xCenter + xShift;
        rect.yCenter = rect.yCenter + yShift;
    }
    if (config.squareLong) {
        var longSide = Math.max(width * imageSize.width, height * imageSize.height);
        width = longSide / imageSize.width;
        height = longSide / imageSize.height;
    }
    else if (config.squareShort) {
        var shortSide = Math.min(width * imageSize.width, height * imageSize.height);
        width = shortSide / imageSize.width;
        height = shortSide / imageSize.height;
    }
    rect.width = width * config.scaleX;
    rect.height = height * config.scaleY;
    return rect;
}
exports.transformNormalizedRect = transformNormalizedRect;
function computeNewRotation(rotation, config) {
    if (config.rotation != null) {
        rotation += config.rotation;
    }
    else if (config.rotationDegree != null) {
        rotation += Math.PI * config.rotationDegree / 180;
    }
    return (0, image_utils_1.normalizeRadians)(rotation);
}
exports.computeNewRotation = computeNewRotation;

},{"./image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js"}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/get_object_scale.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectScale = void 0;
/**
 * Estimate object scale to allow filter work similarly on nearer or futher
 * objects.
 * @param roi Normalized rectangle.
 * @param imageSize An object that contains width and height.
 * @returns A number representing the object scale.
 */
function getObjectScale(roi, imageSize) {
    var objectWidth = roi.width * imageSize.width;
    var objectHeight = roi.height * imageSize.height;
    return (objectWidth + objectHeight) / 2;
}
exports.getObjectScale = getObjectScale;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/calculators/keypoints_to_normalized_keypoints.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keypointsToNormalizedKeypoints = void 0;
function keypointsToNormalizedKeypoints(keypoints, imageSize) {
    return keypoints.map(function (keypoint) {
        var normalizedKeypoint = __assign(__assign({}, keypoint), { x: keypoint.x / imageSize.width, y: keypoint.y / imageSize.height });
        if (keypoint.z != null) {
            // Scale z the same way as x (using image width).
            keypoint.z = keypoint.z / imageSize.width;
        }
        return normalizedKeypoint;
    });
}
exports.keypointsToNormalizedKeypoints = keypointsToNormalizedKeypoints;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/filters/low_pass_filter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowPassFilter = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * A stateful filter that smoothes values overtime.
 *
 * More specifically, it stores the previous value, and when there's a new
 * value, a coefficient 'alpha' is applied to the new value, and `1 - alpha` is
 * applied to the previous value. The smaller the alpha is, the smoother result
 * and the bigger lag.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/util/filtering/low_pass_filter.cc
var LowPassFilter = /** @class */ (function () {
    function LowPassFilter(alpha) {
        this.alpha = alpha;
        this.initialized = false;
    }
    LowPassFilter.prototype.apply = function (value, threshold) {
        var result;
        if (this.initialized) {
            if (threshold == null) {
                // Regular lowpass filter.
                // result = this.alpha * value + (1 - this.alpha) * this.storedValue;
                result = this.storedValue + this.alpha * (value - this.storedValue);
            }
            else {
                // We need to reformat the formula to be able to conveniently apply
                // another optional non-linear function to the
                // (value - this.storedValue) part.
                // Add additional non-linearity to cap extreme value.
                // More specifically, assume x = (value - this.storedValue), when x is
                // close zero, the derived x is close to x, when x is several magnitudes
                // larger, the drived x grows much slower then x. It behaves like
                // sign(x)log(abs(x)).
                result = this.storedValue +
                    this.alpha * threshold *
                        Math.asinh((value - this.storedValue) / threshold);
            }
        }
        else {
            result = value;
            this.initialized = true;
        }
        this.rawValue = value;
        this.storedValue = result;
        return result;
    };
    LowPassFilter.prototype.applyWithAlpha = function (value, alpha, threshold) {
        this.alpha = alpha;
        return this.apply(value, threshold);
    };
    LowPassFilter.prototype.hasLastRawValue = function () {
        return this.initialized;
    };
    LowPassFilter.prototype.lastRawValue = function () {
        return this.rawValue;
    };
    LowPassFilter.prototype.reset = function () {
        this.initialized = false;
    };
    return LowPassFilter;
}());
exports.LowPassFilter = LowPassFilter;

},{}],"node_modules/@tensorflow-models/pose-detection/shared/filters/one_euro_filter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneEuroFilter = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var constants_1 = require("../calculators/constants");
var low_pass_filter_1 = require("./low_pass_filter");
/**
 * OneEuroFilter.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/util/filtering/one_euro_filter.cc
// Also ref original paper:
// https://cristal.univ-lille.fr/~casiez/1euro/
var OneEuroFilter = /** @class */ (function () {
    /**
     * Constructor of `OneEuroFilter` class.
     * @param config See documentation of `OneEuroFilterConfig`.
     */
    function OneEuroFilter(config) {
        this.frequency = config.frequency;
        this.minCutOff = config.minCutOff;
        this.beta = config.beta;
        this.thresholdCutOff = config.thresholdCutOff;
        this.thresholdBeta = config.thresholdBeta;
        this.derivateCutOff = config.derivateCutOff;
        this.x = new low_pass_filter_1.LowPassFilter(this.getAlpha(this.minCutOff));
        this.dx = new low_pass_filter_1.LowPassFilter(this.getAlpha(this.derivateCutOff));
        this.lastTimestamp = 0;
    }
    /**
     * Applies filter to the value.
     * @param value valueToFilter.
     * @param microSeconds timestamp associated with the value (for instance,
     *     timestamp of the frame where you got value from).
     */
    OneEuroFilter.prototype.apply = function (value, microSeconds, valueScale) {
        if (value == null) {
            return value;
        }
        var $microSeconds = Math.trunc(microSeconds);
        if (this.lastTimestamp >= $microSeconds) {
            // Results are unpreditable in this case, so nothing to do but return
            // same value.
            return value;
        }
        // Update the sampling frequency based on timestamps.
        if (this.lastTimestamp !== 0 && $microSeconds !== 0) {
            this.frequency =
                1 / (($microSeconds - this.lastTimestamp) * constants_1.MICRO_SECONDS_TO_SECOND);
        }
        this.lastTimestamp = $microSeconds;
        // Estimate the current variation per second.
        var dValue = this.x.hasLastRawValue() ?
            (value - this.x.lastRawValue()) * valueScale * this.frequency :
            0;
        var edValue = this.dx.applyWithAlpha(dValue, this.getAlpha(this.derivateCutOff));
        var cutOff = this.minCutOff + this.beta * Math.abs(edValue);
        var threshold = this.thresholdCutOff != null ?
            this.thresholdCutOff + this.thresholdBeta * Math.abs(edValue) :
            null;
        // filter the given value.
        return this.x.applyWithAlpha(value, this.getAlpha(cutOff), threshold);
    };
    OneEuroFilter.prototype.getAlpha = function (cutoff) {
        // te = 1.0 / this.frequency
        // tau = 1.0 / (2 * Math.PI * cutoff)
        // result = 1 / (1.0 + (tau / te))
        return 1.0 / (1.0 + (this.frequency / (2 * Math.PI * cutoff)));
    };
    return OneEuroFilter;
}());
exports.OneEuroFilter = OneEuroFilter;

},{"../calculators/constants":"node_modules/@tensorflow-models/pose-detection/shared/calculators/constants.js","./low_pass_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/low_pass_filter.js"}],"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_one_euro_filter.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeypointsOneEuroFilter = void 0;
var one_euro_filter_1 = require("./one_euro_filter");
/**
 * A stateful filter that smoothes keypoints values overtime.
 *
 * More specifically, it uses `OneEuroFilter` to smooth every x, y, z
 * coordinates over time, which as result gives us velocity of how these values
 * change over time. With higher velocity it weights new values higher.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmarks_smoothing_calculator.cc
var KeypointsOneEuroFilter = /** @class */ (function () {
    function KeypointsOneEuroFilter(config) {
        this.config = config;
    }
    KeypointsOneEuroFilter.prototype.apply = function (keypoints, microSeconds, objectScale) {
        var _this = this;
        if (keypoints == null) {
            this.reset();
            return null;
        }
        // Initialize filters once.
        this.initializeFiltersIfEmpty(keypoints);
        // Get value scale as inverse value of the object scale.
        // If value is too small smoothing will be disabled and keypoints will be
        // returned as is.
        var valueScale = 1;
        if (!this.config.disableValueScaling) {
            if (objectScale < this.config.minAllowedObjectScale) {
                return __spreadArray([], keypoints, true);
            }
            valueScale = 1.0 / objectScale;
        }
        // Filter keypoints. Every axis of every keypoint is filtered separately.
        return keypoints.map(function (keypoint, i) {
            var outKeypoint = __assign(__assign({}, keypoint), { x: _this.xFilters[i].apply(keypoint.x, microSeconds, valueScale), y: _this.yFilters[i].apply(keypoint.y, microSeconds, valueScale) });
            if (keypoint.z != null) {
                outKeypoint.z =
                    _this.zFilters[i].apply(keypoint.z, microSeconds, valueScale);
            }
            return outKeypoint;
        });
    };
    KeypointsOneEuroFilter.prototype.reset = function () {
        this.xFilters = null;
        this.yFilters = null;
        this.zFilters = null;
    };
    // Initializes filters for the first time or after reset. If initialized the
    // check the size.
    KeypointsOneEuroFilter.prototype.initializeFiltersIfEmpty = function (keypoints) {
        var _this = this;
        if (this.xFilters == null || this.xFilters.length !== keypoints.length) {
            this.xFilters = keypoints.map(function (_) { return new one_euro_filter_1.OneEuroFilter(_this.config); });
            this.yFilters = keypoints.map(function (_) { return new one_euro_filter_1.OneEuroFilter(_this.config); });
            this.zFilters = keypoints.map(function (_) { return new one_euro_filter_1.OneEuroFilter(_this.config); });
        }
    };
    return KeypointsOneEuroFilter;
}());
exports.KeypointsOneEuroFilter = KeypointsOneEuroFilter;

},{"./one_euro_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/one_euro_filter.js"}],"node_modules/@tensorflow-models/pose-detection/shared/filters/relative_velocity_filter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeVelocityFilter = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var constants_1 = require("../calculators/constants");
var low_pass_filter_1 = require("./low_pass_filter");
/**
 * This filter keeps track (on a window of specified size) of value changes
 * over time, which as result gives us velocity of how value changes over time.
 * With higher velocity it weights new values higher.
 *
 * Use `windowSize` and `velocityScale` to tweak this filter for your use case.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/util/filtering/relative_velocity_filter.cc
var RelativeVelocityFilter = /** @class */ (function () {
    /**
     * Constructor of `RelativeVelocityFilter` class.
     * @param config
     *        `windowSize`:  Higher windowSize adds to lag and to stability.
     *        `velocityScale`: Lower velocityScale adds to lag and to stability.
     */
    function RelativeVelocityFilter(config) {
        this.config = config;
        this.window = [];
        this.lowPassFilter = new low_pass_filter_1.LowPassFilter(1.0);
        this.lastValue = 0;
        this.lastValueScale = 1;
        this.lastTimestamp = -1;
    }
    /**
     * Applies filter to the value.
     * @param value valueToFilter.
     * @param microSeconds timestamp associated with the value (for instance,
     *     timestamp of the frame where you got value from).
     * @param valueScale value scale (for instance, if your value is a distance
     *     detected on a frame, it can look same on different devices but have
     *     quite different absolute values due to different resolution, you
     *     should come up with an appropriate parameter for your particular use
     *     case).
     */
    RelativeVelocityFilter.prototype.apply = function (value, microSeconds, valueScale) {
        if (value == null) {
            return value;
        }
        var $microSeconds = Math.trunc(microSeconds);
        if (this.lastTimestamp >= $microSeconds) {
            // Results are unpreditable in this case, so nothing to do but return
            // same value.
            return value;
        }
        var alpha;
        if (this.lastTimestamp === -1) {
            alpha = 1;
        }
        else {
            // Implement the DistanceEstimationMode.kLegacyTransition.
            // TODO(lina128): Change to kForceCurrentScale or at least add an option
            // that can be tweaked with parameter.
            var distance = value * valueScale - this.lastValue * this.lastValueScale;
            var duration = $microSeconds - this.lastTimestamp;
            var cumulativeDistance = distance;
            var cumulativeDuration = duration;
            // Define max cumulative duration assuming 30 frames per second is a good
            // frame rate, so assuming 30 values per second or 1 / 30 of a second is
            // a good duration per window element.
            var assumedMaxDuration = constants_1.SECOND_TO_MICRO_SECONDS / 30;
            var maxCumulativeDuration = (1 + this.window.length) * assumedMaxDuration;
            for (var _i = 0, _a = this.window; _i < _a.length; _i++) {
                var el = _a[_i];
                if (cumulativeDuration + el.duration > maxCumulativeDuration) {
                    // This helps in cases when durations are large and outdated
                    // window elements have bad impact on filtering results.
                    break;
                }
                cumulativeDistance += el.distance;
                cumulativeDuration += el.duration;
            }
            var velocity = cumulativeDistance / (cumulativeDuration * constants_1.MICRO_SECONDS_TO_SECOND);
            alpha = 1 - 1 / (1 + this.config.velocityScale * Math.abs(velocity));
            this.window.unshift({ distance: distance, duration: duration });
            if (this.window.length > this.config.windowSize) {
                this.window.pop();
            }
        }
        this.lastValue = value;
        this.lastValueScale = valueScale;
        this.lastTimestamp = $microSeconds;
        return this.lowPassFilter.applyWithAlpha(value, alpha);
    };
    return RelativeVelocityFilter;
}());
exports.RelativeVelocityFilter = RelativeVelocityFilter;

},{"../calculators/constants":"node_modules/@tensorflow-models/pose-detection/shared/calculators/constants.js","./low_pass_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/low_pass_filter.js"}],"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_velocity_filter.js":[function(require,module,exports) {
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeypointsVelocityFilter = void 0;
var relative_velocity_filter_1 = require("./relative_velocity_filter");
/**
 * A stateful filter that smoothes landmark values overtime.
 *
 * More specifically, it uses `RelativeVelocityFilter` to smooth every x, y, z
 * coordinates over time, which as result gives us velocity of how these values
 * change over time. With higher velocity it weights new values higher.
 */
// ref:
// https://github.com/google/mediapipe/blob/master/mediapipe/calculators/util/landmarks_smoothing_calculator.cc
var KeypointsVelocityFilter = /** @class */ (function () {
    function KeypointsVelocityFilter(config) {
        this.config = config;
    }
    KeypointsVelocityFilter.prototype.apply = function (keypoints, microSeconds, objectScale) {
        var _this = this;
        if (keypoints == null) {
            this.reset();
            return null;
        }
        // Get value scale as inverse value of the object scale.
        // If value is too small smoothing will be disabled and keypoints will be
        // returned as is.
        var valueScale = 1;
        if (!this.config.disableValueScaling) {
            if (objectScale < this.config.minAllowedObjectScale) {
                return __spreadArray([], keypoints, true);
            }
            valueScale = 1 / objectScale;
        }
        // Initialize filters once.
        this.initializeFiltersIfEmpty(keypoints);
        // Filter keypoints. Every axis of every keypoint is filtered separately.
        return keypoints.map(function (keypoint, i) {
            var outKeypoint = __assign(__assign({}, keypoint), { x: _this.xFilters[i].apply(keypoint.x, microSeconds, valueScale), y: _this.yFilters[i].apply(keypoint.y, microSeconds, valueScale) });
            if (keypoint.z != null) {
                outKeypoint.z =
                    _this.zFilters[i].apply(keypoint.z, microSeconds, valueScale);
            }
            return outKeypoint;
        });
    };
    KeypointsVelocityFilter.prototype.reset = function () {
        this.xFilters = null;
        this.yFilters = null;
        this.zFilters = null;
    };
    // Initializes filters for the first time or after reset. If initialized the
    // check the size.
    KeypointsVelocityFilter.prototype.initializeFiltersIfEmpty = function (keypoints) {
        var _this = this;
        if (this.xFilters == null || this.xFilters.length !== keypoints.length) {
            this.xFilters =
                keypoints.map(function (_) { return new relative_velocity_filter_1.RelativeVelocityFilter(_this.config); });
            this.yFilters =
                keypoints.map(function (_) { return new relative_velocity_filter_1.RelativeVelocityFilter(_this.config); });
            this.zFilters =
                keypoints.map(function (_) { return new relative_velocity_filter_1.RelativeVelocityFilter(_this.config); });
        }
    };
    return KeypointsVelocityFilter;
}());
exports.KeypointsVelocityFilter = KeypointsVelocityFilter;

},{"./relative_velocity_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/relative_velocity_filter.js"}],"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_smoothing.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeypointsSmoothingFilter = void 0;
var get_object_scale_1 = require("../calculators/get_object_scale");
var keypoints_to_normalized_keypoints_1 = require("../calculators/keypoints_to_normalized_keypoints");
var normalized_keypoints_to_keypoints_1 = require("../calculators/normalized_keypoints_to_keypoints");
var keypoints_one_euro_filter_1 = require("./keypoints_one_euro_filter");
var keypoints_velocity_filter_1 = require("./keypoints_velocity_filter");
/**
 * A Calculator to smooth keypoints over time.
 */
var KeypointsSmoothingFilter = /** @class */ (function () {
    function KeypointsSmoothingFilter(config) {
        if (config.velocityFilter != null) {
            this.keypointsFilter = new keypoints_velocity_filter_1.KeypointsVelocityFilter(config.velocityFilter);
        }
        else if (config.oneEuroFilter != null) {
            this.keypointsFilter = new keypoints_one_euro_filter_1.KeypointsOneEuroFilter(config.oneEuroFilter);
        }
        else {
            throw new Error('Either configure velocityFilter or oneEuroFilter, but got ' +
                "".concat(config, "."));
        }
    }
    /**
     * Apply one of the stateful `KeypointsFilter` to keypoints.
     *
     * Currently supports `OneEuroFilter` and `VelocityFilter`.
     * @param keypoints A list of 2D or 3D keypoints, can be normalized or
     *     non-normalized.
     * @param timestamp The timestamp of the video frame.
     * @param imageSize Optional. The imageSize is useful when keypoints are
     *     normalized.
     * @param normalized Optional. Whether the keypoints are normalized. Default
     *     to false.
     * @param objectScaleROI Optional. The auxiliary ROI to calculate object
     *     scale. If not set, objectScale defaults to 1.
     */
    KeypointsSmoothingFilter.prototype.apply = function (keypoints, timestamp, imageSize, normalized, objectScaleROI) {
        if (normalized === void 0) { normalized = false; }
        if (keypoints == null) {
            this.keypointsFilter.reset();
            return null;
        }
        var objectScale = objectScaleROI != null ? (0, get_object_scale_1.getObjectScale)(objectScaleROI, imageSize) : 1;
        var scaledKeypoints = normalized ?
            (0, normalized_keypoints_to_keypoints_1.normalizedKeypointsToKeypoints)(keypoints, imageSize) :
            keypoints;
        var scaledKeypointsFiltered = this.keypointsFilter.apply(scaledKeypoints, timestamp, objectScale);
        return normalized ?
            (0, keypoints_to_normalized_keypoints_1.keypointsToNormalizedKeypoints)(scaledKeypointsFiltered, imageSize) :
            scaledKeypointsFiltered;
    };
    return KeypointsSmoothingFilter;
}());
exports.KeypointsSmoothingFilter = KeypointsSmoothingFilter;

},{"../calculators/get_object_scale":"node_modules/@tensorflow-models/pose-detection/shared/calculators/get_object_scale.js","../calculators/keypoints_to_normalized_keypoints":"node_modules/@tensorflow-models/pose-detection/shared/calculators/keypoints_to_normalized_keypoints.js","../calculators/normalized_keypoints_to_keypoints":"node_modules/@tensorflow-models/pose-detection/shared/calculators/normalized_keypoints_to_keypoints.js","./keypoints_one_euro_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_one_euro_filter.js","./keypoints_velocity_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_velocity_filter.js"}],"node_modules/@tensorflow-models/pose-detection/shared/filters/visibility_smoothing.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowPassVisibilityFilter = void 0;
var low_pass_filter_1 = require("./low_pass_filter");
/**
 * Smoothing visibility using a `LowPassFilter` for each landmark.
 */
var LowPassVisibilityFilter = /** @class */ (function () {
    function LowPassVisibilityFilter(config) {
        this.alpha = config.alpha;
    }
    LowPassVisibilityFilter.prototype.apply = function (landmarks) {
        var _this = this;
        if (landmarks == null) {
            // Reset filters.
            this.visibilityFilters = null;
            return null;
        }
        if (this.visibilityFilters == null ||
            (this.visibilityFilters.length !== landmarks.length)) {
            // Initialize new filters.
            this.visibilityFilters =
                landmarks.map(function (_) { return new low_pass_filter_1.LowPassFilter(_this.alpha); });
        }
        var outLandmarks = [];
        // Filter visibilities.
        for (var i = 0; i < landmarks.length; ++i) {
            var landmark = landmarks[i];
            var outLandmark = __assign({}, landmark);
            outLandmark.score = this.visibilityFilters[i].apply(landmark.score);
            outLandmarks.push(outLandmark);
        }
        return outLandmarks;
    };
    return LowPassVisibilityFilter;
}());
exports.LowPassVisibilityFilter = LowPassVisibilityFilter;

},{"./low_pass_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/low_pass_filter.js"}],"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/constants.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLAZEPOSE_SEGMENTATION_SMOOTHING_CONFIG = exports.BLAZEPOSE_TENSORS_TO_SEGMENTATION_CONFIG = exports.BLAZEPOSE_WORLD_LANDMARKS_SMOOTHING_CONFIG_ACTUAL = exports.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_AUXILIARY = exports.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_ACTUAL = exports.BLAZEPOSE_VISIBILITY_SMOOTHING_CONFIG = exports.BLAZEPOSE_NUM_AUXILIARY_KEYPOINTS = exports.BLAZEPOSE_NUM_KEYPOINTS = exports.BLAZEPOSE_REFINE_LANDMARKS_FROM_HEATMAP_CONFIG = exports.BLAZEPOSE_TENSORS_TO_WORLD_LANDMARKS_CONFIG = exports.BLAZEPOSE_TENSORS_TO_LANDMARKS_CONFIG = exports.BLAZEPOSE_POSE_PRESENCE_SCORE = exports.BLAZEPOSE_LANDMARK_IMAGE_TO_TENSOR_CONFIG = exports.BLAZEPOSE_DETECTOR_IMAGE_TO_TENSOR_CONFIG = exports.BLAZEPOSE_DETECTOR_RECT_TRANSFORMATION_CONFIG = exports.BLAZEPOSE_DETECTOR_NON_MAX_SUPPRESSION_CONFIGURATION = exports.BLAZEPOSE_TENSORS_TO_DETECTION_CONFIGURATION = exports.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG = exports.DEFAULT_BLAZEPOSE_MODEL_CONFIG = exports.BLAZEPOSE_DETECTOR_ANCHOR_CONFIGURATION = exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_HEAVY = exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_LITE = exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_FULL = exports.DEFAULT_BLAZEPOSE_DETECTOR_MODEL_URL = void 0;
exports.DEFAULT_BLAZEPOSE_DETECTOR_MODEL_URL = 'https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1';
exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_FULL = 'https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2';
exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_LITE = 'https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2';
exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_HEAVY = 'https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2';
exports.BLAZEPOSE_DETECTOR_ANCHOR_CONFIGURATION = {
    reduceBoxesInLowestlayer: false,
    interpolatedScaleAspectRatio: 1.0,
    featureMapHeight: [],
    featureMapWidth: [],
    numLayers: 5,
    minScale: 0.1484375,
    maxScale: 0.75,
    inputSizeHeight: 224,
    inputSizeWidth: 224,
    anchorOffsetX: 0.5,
    anchorOffsetY: 0.5,
    strides: [8, 16, 32, 32, 32],
    aspectRatios: [1.0],
    fixedAnchorSize: true
};
exports.DEFAULT_BLAZEPOSE_MODEL_CONFIG = {
    runtime: 'tfjs',
    modelType: 'full',
    enableSmoothing: true,
    enableSegmentation: false,
    smoothSegmentation: true,
    detectorModelUrl: exports.DEFAULT_BLAZEPOSE_DETECTOR_MODEL_URL,
    landmarkModelUrl: exports.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_FULL
};
exports.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG = {
    maxPoses: 1,
    flipHorizontal: false
};
exports.BLAZEPOSE_TENSORS_TO_DETECTION_CONFIGURATION = {
    applyExponentialOnBoxSize: false,
    flipVertically: false,
    ignoreClasses: [],
    numClasses: 1,
    numBoxes: 2254,
    numCoords: 12,
    boxCoordOffset: 0,
    keypointCoordOffset: 4,
    numKeypoints: 4,
    numValuesPerKeypoint: 2,
    sigmoidScore: true,
    scoreClippingThresh: 100.0,
    reverseOutputOrder: true,
    xScale: 224.0,
    yScale: 224.0,
    hScale: 224.0,
    wScale: 224.0,
    minScoreThresh: 0.5
};
exports.BLAZEPOSE_DETECTOR_NON_MAX_SUPPRESSION_CONFIGURATION = {
    minSuppressionThreshold: 0.3,
    overlapType: 'intersection-over-union'
};
exports.BLAZEPOSE_DETECTOR_RECT_TRANSFORMATION_CONFIG = {
    shiftX: 0,
    shiftY: 0,
    scaleX: 1.25,
    scaleY: 1.25,
    squareLong: true
};
exports.BLAZEPOSE_DETECTOR_IMAGE_TO_TENSOR_CONFIG = {
    outputTensorSize: { width: 224, height: 224 },
    keepAspectRatio: true,
    outputTensorFloatRange: [-1, 1],
    borderMode: 'zero'
};
exports.BLAZEPOSE_LANDMARK_IMAGE_TO_TENSOR_CONFIG = {
    outputTensorSize: { width: 256, height: 256 },
    keepAspectRatio: true,
    outputTensorFloatRange: [0, 1],
    borderMode: 'zero'
};
exports.BLAZEPOSE_POSE_PRESENCE_SCORE = 0.5;
exports.BLAZEPOSE_TENSORS_TO_LANDMARKS_CONFIG = {
    numLandmarks: 39,
    inputImageWidth: 256,
    inputImageHeight: 256,
    visibilityActivation: 'sigmoid',
    flipHorizontally: false,
    flipVertically: false
};
exports.BLAZEPOSE_TENSORS_TO_WORLD_LANDMARKS_CONFIG = {
    numLandmarks: 39,
    inputImageWidth: 1,
    inputImageHeight: 1,
    visibilityActivation: 'sigmoid',
    flipHorizontally: false,
    flipVertically: false
};
exports.BLAZEPOSE_REFINE_LANDMARKS_FROM_HEATMAP_CONFIG = {
    kernelSize: 7,
    minConfidenceToRefine: 0.5
};
exports.BLAZEPOSE_NUM_KEYPOINTS = 33;
exports.BLAZEPOSE_NUM_AUXILIARY_KEYPOINTS = 35;
exports.BLAZEPOSE_VISIBILITY_SMOOTHING_CONFIG = {
    alpha: 0.1
};
exports.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_ACTUAL = {
    oneEuroFilter: {
        frequency: 30,
        minCutOff: 0.05,
        // filter when landmark is static.
        beta: 80,
        // alpha in landmark EMA filter when landmark is moving fast.
        derivateCutOff: 1.0,
        // landmark velocity EMA filter.,
        minAllowedObjectScale: 1e-6
    }
};
// Auxiliary landmarks are smoothed heavier than main landmarks to make ROI
// crop for pose landmarks prediction very stable when object is not moving but
// responsive enough in case of sudden movements.
exports.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_AUXILIARY = {
    oneEuroFilter: {
        frequency: 30,
        minCutOff: 0.01,
        // EMA filter when landmark is static.
        beta: 10.0,
        // ~0.68 alpha in landmark EMA filter when landmark is moving
        // fast.
        derivateCutOff: 1.0,
        // landmark velocity EMA filter.
        minAllowedObjectScale: 1e-6
    }
};
exports.BLAZEPOSE_WORLD_LANDMARKS_SMOOTHING_CONFIG_ACTUAL = {
    oneEuroFilter: {
        frequency: 30,
        minCutOff: 0.1,
        // filter when landmark is static.
        beta: 40,
        // alpha in landmark EMA filter when landmark is moving fast.
        derivateCutOff: 1.0,
        // landmark velocity EMA filter.
        minAllowedObjectScale: 1e-6,
        disableValueScaling: true // As world landmarks are predicted in real world 3D coordinates
        // in meters (rather than in pixels of input image) prediction
        // scale does not depend on the pose size in the image.
    }
};
exports.BLAZEPOSE_TENSORS_TO_SEGMENTATION_CONFIG = {
    activation: 'none', // Sigmoid is not needed since it is already part of the model.
};
exports.BLAZEPOSE_SEGMENTATION_SMOOTHING_CONFIG = {
    combineWithPreviousRatio: 0.7
};

},{}],"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/detector_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEstimationConfig = exports.validateModelConfig = void 0;
var constants_1 = require("./constants");
function validateModelConfig(modelConfig) {
    var config = modelConfig == null ?
        __assign({}, constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG) : __assign({}, modelConfig);
    if (config.enableSmoothing == null) {
        config.enableSmoothing = constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.enableSmoothing;
    }
    if (config.enableSegmentation == null) {
        config.enableSegmentation =
            constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.enableSegmentation;
    }
    if (config.smoothSegmentation == null) {
        config.smoothSegmentation =
            constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.smoothSegmentation;
    }
    if (config.modelType == null) {
        config.modelType = constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.modelType;
    }
    if (config.detectorModelUrl == null) {
        config.detectorModelUrl = constants_1.DEFAULT_BLAZEPOSE_MODEL_CONFIG.detectorModelUrl;
    }
    if (config.landmarkModelUrl == null) {
        switch (config.modelType) {
            case 'lite':
                config.landmarkModelUrl = constants_1.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_LITE;
                break;
            case 'heavy':
                config.landmarkModelUrl = constants_1.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_HEAVY;
                break;
            case 'full':
            default:
                config.landmarkModelUrl = constants_1.DEFAULT_BLAZEPOSE_LANDMARK_MODEL_URL_FULL;
                break;
        }
    }
    return config;
}
exports.validateModelConfig = validateModelConfig;
function validateEstimationConfig(estimationConfig) {
    var config;
    if (estimationConfig == null) {
        config = constants_1.DEFAULT_BLAZEPOSE_ESTIMATION_CONFIG;
    }
    else {
        config = __assign({}, estimationConfig);
    }
    if (config.maxPoses == null) {
        config.maxPoses = 1;
    }
    if (config.maxPoses <= 0) {
        throw new Error("Invalid maxPoses ".concat(config.maxPoses, ". Should be > 0."));
    }
    if (config.maxPoses > 1) {
        throw new Error('Multi-pose detection is not implemented yet. Please set maxPoses ' +
            'to 1.');
    }
    return config;
}
exports.validateEstimationConfig = validateEstimationConfig;

},{"./constants":"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/constants.js"}],"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/detector.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var tfconv = require("@tensorflow/tfjs-converter");
var tf = require("@tensorflow/tfjs-core");
var constants_1 = require("../constants");
var calculate_alignment_points_rects_1 = require("../shared/calculators/calculate_alignment_points_rects");
var calculate_inverse_matrix_1 = require("../shared/calculators/calculate_inverse_matrix");
var calculate_landmark_projection_1 = require("../shared/calculators/calculate_landmark_projection");
var calculate_score_copy_1 = require("../shared/calculators/calculate_score_copy");
var calculate_world_landmark_projection_1 = require("../shared/calculators/calculate_world_landmark_projection");
var constants_2 = require("../shared/calculators/constants");
var convert_image_to_tensor_1 = require("../shared/calculators/convert_image_to_tensor");
var create_ssd_anchors_1 = require("../shared/calculators/create_ssd_anchors");
var detector_result_1 = require("../shared/calculators/detector_result");
var image_utils_1 = require("../shared/calculators/image_utils");
var is_video_1 = require("../shared/calculators/is_video");
var landmarks_to_detection_1 = require("../shared/calculators/landmarks_to_detection");
var mask_util_1 = require("../shared/calculators/mask_util");
var non_max_suppression_1 = require("../shared/calculators/non_max_suppression");
var normalized_keypoints_to_keypoints_1 = require("../shared/calculators/normalized_keypoints_to_keypoints");
var refine_landmarks_from_heatmap_1 = require("../shared/calculators/refine_landmarks_from_heatmap");
var remove_detection_letterbox_1 = require("../shared/calculators/remove_detection_letterbox");
var remove_landmark_letterbox_1 = require("../shared/calculators/remove_landmark_letterbox");
var segmentation_smoothing_1 = require("../shared/calculators/segmentation_smoothing");
var tensors_to_detections_1 = require("../shared/calculators/tensors_to_detections");
var tensors_to_landmarks_1 = require("../shared/calculators/tensors_to_landmarks");
var tensors_to_segmentation_1 = require("../shared/calculators/tensors_to_segmentation");
var transform_rect_1 = require("../shared/calculators/transform_rect");
var keypoints_smoothing_1 = require("../shared/filters/keypoints_smoothing");
var visibility_smoothing_1 = require("../shared/filters/visibility_smoothing");
var constants = require("./constants");
var detector_utils_1 = require("./detector_utils");
var BlazePoseTfjsMask = /** @class */ (function () {
    function BlazePoseTfjsMask(mask) {
        this.mask = mask;
    }
    BlazePoseTfjsMask.prototype.toCanvasImageSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, mask_util_1.toHTMLCanvasElementLossy)(this.mask)];
            });
        });
    };
    BlazePoseTfjsMask.prototype.toImageData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, mask_util_1.toImageDataLossy)(this.mask)];
            });
        });
    };
    BlazePoseTfjsMask.prototype.toTensor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mask];
            });
        });
    };
    BlazePoseTfjsMask.prototype.getUnderlyingType = function () {
        return 'tensor';
    };
    return BlazePoseTfjsMask;
}());
function maskValueToLabel(maskValue) {
    (0, mask_util_1.assertMaskValue)(maskValue);
    return 'person';
}
/**
 * BlazePose detector class.
 */
var BlazePoseTfjsDetector = /** @class */ (function () {
    function BlazePoseTfjsDetector(detectorModel, landmarkModel, enableSmoothing, enableSegmentation, smoothSegmentation, modelType) {
        this.detectorModel = detectorModel;
        this.landmarkModel = landmarkModel;
        this.enableSmoothing = enableSmoothing;
        this.enableSegmentation = enableSegmentation;
        this.smoothSegmentation = smoothSegmentation;
        this.modelType = modelType;
        // Store global states.
        this.regionOfInterest = null;
        this.prevFilteredSegmentationMask = null;
        this.anchors =
            (0, create_ssd_anchors_1.createSsdAnchors)(constants.BLAZEPOSE_DETECTOR_ANCHOR_CONFIGURATION);
        var anchorW = tf.tensor1d(this.anchors.map(function (a) { return a.width; }));
        var anchorH = tf.tensor1d(this.anchors.map(function (a) { return a.height; }));
        var anchorX = tf.tensor1d(this.anchors.map(function (a) { return a.xCenter; }));
        var anchorY = tf.tensor1d(this.anchors.map(function (a) { return a.yCenter; }));
        this.anchorTensor = { x: anchorX, y: anchorY, w: anchorW, h: anchorH };
        this.prevFilteredSegmentationMask =
            this.enableSegmentation ? tf.tensor2d([], [0, 0]) : null;
    }
    /**
     * Estimates poses for an image or video frame.
     *
     * It returns a single pose or multiple poses based on the maxPose parameter
     * from the `config`.
     *
     * @param image
     * ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement The input
     * image to feed through the network.
     *
     * @param estimationConfig Optional. See `BlazePoseTfjsEstimationConfig`
     *       documentation for detail.
     *
     * @param timestamp Optional. In milliseconds. This is useful when image is
     *     a tensor, which doesn't have timestamp info. Or to override timestamp
     *     in a video.
     *
     * @return An array of `Pose`s.
     */
    // TF.js implementation of the mediapipe pose detection pipeline.
    // ref graph:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_landmark/pose_landmark_cpu.pbtxt
    BlazePoseTfjsDetector.prototype.estimatePoses = function (image, estimationConfig, timestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var config, imageSize, image3d, poseRect, detections, firstDetection, poseLandmarksByRoiResult, unfilteredPoseLandmarks, unfilteredAuxiliaryLandmarks, poseScore, unfilteredWorldLandmarks, unfilteredSegmentationMask, _a, poseLandmarks, auxiliaryLandmarks, poseWorldLandmarks, poseRectFromLandmarks, filteredSegmentationMask, keypoints, keypoints3D, pose, rgbaMask, segmentation;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        config = (0, detector_utils_1.validateEstimationConfig)(estimationConfig);
                        if (image == null) {
                            this.reset();
                            return [2 /*return*/, []];
                        }
                        this.maxPoses = config.maxPoses;
                        // User provided timestamp will override video's timestamp.
                        if (timestamp != null) {
                            this.timestamp = timestamp * constants_2.MILLISECOND_TO_MICRO_SECONDS;
                        }
                        else {
                            // For static images, timestamp should be null.
                            this.timestamp =
                                (0, is_video_1.isVideo)(image) ? image.currentTime * constants_2.SECOND_TO_MICRO_SECONDS : null;
                        }
                        imageSize = (0, image_utils_1.getImageSize)(image);
                        image3d = tf.tidy(function () { return tf.cast((0, image_utils_1.toImageTensor)(image), 'float32'); });
                        poseRect = this.regionOfInterest;
                        if (!(poseRect == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.detectPose(image3d)];
                    case 1:
                        detections = _b.sent();
                        if (detections.length === 0) {
                            this.reset();
                            image3d.dispose();
                            return [2 /*return*/, []];
                        }
                        firstDetection = detections[0];
                        // Calculates region of interest based on pose detection, so that can be
                        // used to detect landmarks.
                        poseRect = this.poseDetectionToRoi(firstDetection, imageSize);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.poseLandmarksByRoi(poseRect, image3d)];
                    case 3:
                        poseLandmarksByRoiResult = _b.sent();
                        image3d.dispose();
                        if (poseLandmarksByRoiResult == null) {
                            this.reset();
                            return [2 /*return*/, []];
                        }
                        unfilteredPoseLandmarks = poseLandmarksByRoiResult.landmarks, unfilteredAuxiliaryLandmarks = poseLandmarksByRoiResult.auxiliaryLandmarks, poseScore = poseLandmarksByRoiResult.poseScore, unfilteredWorldLandmarks = poseLandmarksByRoiResult.worldLandmarks, unfilteredSegmentationMask = poseLandmarksByRoiResult.segmentationMask;
                        _a = this.poseLandmarkFiltering(unfilteredPoseLandmarks, unfilteredAuxiliaryLandmarks, unfilteredWorldLandmarks, imageSize), poseLandmarks = _a.actualLandmarksFiltered, auxiliaryLandmarks = _a.auxiliaryLandmarksFiltered, poseWorldLandmarks = _a.actualWorldLandmarksFiltered;
                        poseRectFromLandmarks = this.poseLandmarksToRoi(auxiliaryLandmarks, imageSize);
                        // Cache roi for next image.
                        this.regionOfInterest = poseRectFromLandmarks;
                        filteredSegmentationMask = this.smoothSegmentation && unfilteredSegmentationMask != null ?
                            this.poseSegmentationFiltering(unfilteredSegmentationMask) :
                            unfilteredSegmentationMask;
                        keypoints = poseLandmarks != null ?
                            (0, normalized_keypoints_to_keypoints_1.normalizedKeypointsToKeypoints)(poseLandmarks, imageSize) :
                            null;
                        // Add keypoint name.
                        if (keypoints != null) {
                            keypoints.forEach(function (keypoint, i) {
                                keypoint.name = constants_1.BLAZEPOSE_KEYPOINTS[i];
                            });
                        }
                        keypoints3D = poseWorldLandmarks;
                        // Add keypoint name.
                        if (keypoints3D != null) {
                            keypoints3D.forEach(function (keypoint3D, i) {
                                keypoint3D.name = constants_1.BLAZEPOSE_KEYPOINTS[i];
                            });
                        }
                        pose = { score: poseScore, keypoints: keypoints, keypoints3D: keypoints3D };
                        if (filteredSegmentationMask !== null) {
                            rgbaMask = tf.tidy(function () {
                                var mask3D = 
                                // tslint:disable-next-line: no-unnecessary-type-assertion
                                tf.expandDims(filteredSegmentationMask, 2);
                                // Pads a pixel [r] to [r, 0].
                                var rgMask = tf.pad(mask3D, [[0, 0], [0, 0], [0, 1]]);
                                // Pads a pixel [r, 0] to [r, 0, 0, r].
                                return tf.mirrorPad(rgMask, [[0, 0], [0, 0], [0, 2]], 'symmetric');
                            });
                            if (!this.smoothSegmentation) {
                                tf.dispose(filteredSegmentationMask);
                            }
                            segmentation = {
                                maskValueToLabel: maskValueToLabel,
                                mask: new BlazePoseTfjsMask(rgbaMask)
                            };
                            pose.segmentation = segmentation;
                        }
                        return [2 /*return*/, [pose]];
                }
            });
        });
    };
    BlazePoseTfjsDetector.prototype.poseSegmentationFiltering = function (segmentationMask) {
        var prevMask = this.prevFilteredSegmentationMask;
        if (prevMask.size === 0) {
            this.prevFilteredSegmentationMask = segmentationMask;
        }
        else {
            this.prevFilteredSegmentationMask = (0, segmentation_smoothing_1.smoothSegmentation)(prevMask, segmentationMask, constants.BLAZEPOSE_SEGMENTATION_SMOOTHING_CONFIG);
            tf.dispose(segmentationMask);
        }
        tf.dispose(prevMask);
        return this.prevFilteredSegmentationMask;
    };
    BlazePoseTfjsDetector.prototype.dispose = function () {
        this.detectorModel.dispose();
        this.landmarkModel.dispose();
        tf.dispose([
            this.anchorTensor.x, this.anchorTensor.y, this.anchorTensor.w,
            this.anchorTensor.h, this.prevFilteredSegmentationMask
        ]);
    };
    BlazePoseTfjsDetector.prototype.reset = function () {
        this.regionOfInterest = null;
        if (this.enableSegmentation) {
            tf.dispose(this.prevFilteredSegmentationMask);
            this.prevFilteredSegmentationMask = tf.tensor2d([], [0, 0]);
        }
        this.visibilitySmoothingFilterActual = null;
        this.visibilitySmoothingFilterAuxiliary = null;
        this.landmarksSmoothingFilterActual = null;
        this.landmarksSmoothingFilterAuxiliary = null;
    };
    // Detects poses.
    // Subgraph: PoseDetectionCpu.
    // ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_detection/pose_detection_cpu.pbtxt
    BlazePoseTfjsDetector.prototype.detectPose = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, imageValueShifted, padding, detectionResult, _b, boxes, logits, detections, selectedDetections, newDetections;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (0, convert_image_to_tensor_1.convertImageToTensor)(image, constants.BLAZEPOSE_DETECTOR_IMAGE_TO_TENSOR_CONFIG), imageValueShifted = _a.imageTensor, padding = _a.padding;
                        detectionResult = this.detectorModel.predict(imageValueShifted);
                        _b = (0, detector_result_1.detectorResult)(detectionResult), boxes = _b.boxes, logits = _b.logits;
                        return [4 /*yield*/, (0, tensors_to_detections_1.tensorsToDetections)([logits, boxes], this.anchorTensor, constants.BLAZEPOSE_TENSORS_TO_DETECTION_CONFIGURATION)];
                    case 1:
                        detections = _c.sent();
                        if (detections.length === 0) {
                            tf.dispose([imageValueShifted, detectionResult, logits, boxes]);
                            return [2 /*return*/, detections];
                        }
                        return [4 /*yield*/, (0, non_max_suppression_1.nonMaxSuppression)(detections, this.maxPoses, constants.BLAZEPOSE_DETECTOR_NON_MAX_SUPPRESSION_CONFIGURATION
                                .minSuppressionThreshold, constants.BLAZEPOSE_DETECTOR_NON_MAX_SUPPRESSION_CONFIGURATION
                                .overlapType)];
                    case 2:
                        selectedDetections = _c.sent();
                        newDetections = (0, remove_detection_letterbox_1.removeDetectionLetterbox)(selectedDetections, padding);
                        tf.dispose([imageValueShifted, detectionResult, logits, boxes]);
                        return [2 /*return*/, newDetections];
                }
            });
        });
    };
    // Calculates region of interest from a detection.
    // Subgraph: PoseDetectionToRoi.
    // ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_landmark/pose_detection_to_roi.pbtxt
    // If detection is not null, imageSize should not be null either.
    BlazePoseTfjsDetector.prototype.poseDetectionToRoi = function (detection, imageSize) {
        var startKeypointIndex;
        var endKeypointIndex;
        // Converts pose detection into a rectangle based on center and scale
        // alignment points.
        startKeypointIndex = 0;
        endKeypointIndex = 1;
        // PoseDetectionToRoi: AlignmentPointsRectsCalculator.
        var rawRoi = (0, calculate_alignment_points_rects_1.calculateAlignmentPointsRects)(detection, imageSize, {
            rotationVectorEndKeypointIndex: endKeypointIndex,
            rotationVectorStartKeypointIndex: startKeypointIndex,
            rotationVectorTargetAngleDegree: 90
        });
        // Expands pose rect with margin used during training.
        // PoseDetectionToRoi: RectTransformationCalculation.
        var roi = (0, transform_rect_1.transformNormalizedRect)(rawRoi, imageSize, constants.BLAZEPOSE_DETECTOR_RECT_TRANSFORMATION_CONFIG);
        return roi;
    };
    // Predict pose landmarks  and optionally segmentation within an ROI
    // subgraph: PoseLandmarksByRoiCpu
    // ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_landmark/pose_landmark_by_roi_cpu.pbtxt
    // When poseRect is not null, image should not be null either.
    BlazePoseTfjsDetector.prototype.poseLandmarksByRoi = function (roi, image) {
        return __awaiter(this, void 0, void 0, function () {
            var imageSize, _a, imageValueShifted, letterboxPadding, transformationMatrix, outputs, outputTensor, tensorsToPoseLandmarksAndSegmentationResult, roiLandmarks, roiAuxiliaryLandmarks, poseScore, roiWorldLandmarks, roiSegmentationMask, poseLandmarksAndSegmentationInverseProjectionResults;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        imageSize = (0, image_utils_1.getImageSize)(image);
                        _a = (0, convert_image_to_tensor_1.convertImageToTensor)(image, constants.BLAZEPOSE_LANDMARK_IMAGE_TO_TENSOR_CONFIG, roi), imageValueShifted = _a.imageTensor, letterboxPadding = _a.padding, transformationMatrix = _a.transformationMatrix;
                        if (this.modelType !== 'lite' && this.modelType !== 'full' &&
                            this.modelType !== 'heavy') {
                            throw new Error('Model type must be one of lite, full or heavy,' +
                                "but got ".concat(this.modelType));
                        }
                        outputs = ['ld_3d', 'output_poseflag', 'activation_heatmap', 'world_3d'];
                        if (this.enableSegmentation) {
                            outputs.push('activation_segmentation');
                        }
                        outputTensor = this.landmarkModel.execute(imageValueShifted, outputs);
                        return [4 /*yield*/, this.tensorsToPoseLandmarksAndSegmentation(outputTensor)];
                    case 1:
                        tensorsToPoseLandmarksAndSegmentationResult = _b.sent();
                        if (tensorsToPoseLandmarksAndSegmentationResult == null) {
                            tf.dispose(outputTensor);
                            tf.dispose(imageValueShifted);
                            return [2 /*return*/, null];
                        }
                        roiLandmarks = tensorsToPoseLandmarksAndSegmentationResult.landmarks, roiAuxiliaryLandmarks = tensorsToPoseLandmarksAndSegmentationResult.auxiliaryLandmarks, poseScore = tensorsToPoseLandmarksAndSegmentationResult.poseScore, roiWorldLandmarks = tensorsToPoseLandmarksAndSegmentationResult.worldLandmarks, roiSegmentationMask = tensorsToPoseLandmarksAndSegmentationResult.segmentationMask;
                        return [4 /*yield*/, this.poseLandmarksAndSegmentationInverseProjection(imageSize, roi, letterboxPadding, transformationMatrix, roiLandmarks, roiAuxiliaryLandmarks, roiWorldLandmarks, roiSegmentationMask)];
                    case 2:
                        poseLandmarksAndSegmentationInverseProjectionResults = _b.sent();
                        tf.dispose(outputTensor);
                        tf.dispose(imageValueShifted);
                        return [2 /*return*/, __assign({ poseScore: poseScore }, poseLandmarksAndSegmentationInverseProjectionResults)];
                }
            });
        });
    };
    BlazePoseTfjsDetector.prototype.poseLandmarksAndSegmentationInverseProjection = function (imageSize, roi, letterboxPadding, transformationMatrix, roiLandmarks, roiAuxiliaryLandmarks, roiWorldLandmarks, roiSegmentationMask) {
        return __awaiter(this, void 0, void 0, function () {
            var adjustedLandmarks, adjustedAuxiliaryLandmarks, landmarks, auxiliaryLandmarks, worldLandmarks, segmentationMask;
            return __generator(this, function (_a) {
                adjustedLandmarks = (0, remove_landmark_letterbox_1.removeLandmarkLetterbox)(roiLandmarks, letterboxPadding);
                adjustedAuxiliaryLandmarks = (0, remove_landmark_letterbox_1.removeLandmarkLetterbox)(roiAuxiliaryLandmarks, letterboxPadding);
                landmarks = (0, calculate_landmark_projection_1.calculateLandmarkProjection)(adjustedLandmarks, roi);
                auxiliaryLandmarks = (0, calculate_landmark_projection_1.calculateLandmarkProjection)(adjustedAuxiliaryLandmarks, roi);
                worldLandmarks = (0, calculate_world_landmark_projection_1.calculateWorldLandmarkProjection)(roiWorldLandmarks, roi);
                segmentationMask = null;
                if (this.enableSegmentation) {
                    segmentationMask = tf.tidy(function () {
                        var _a = roiSegmentationMask.shape, inputHeight = _a[0], inputWidth = _a[1];
                        // Calculates the inverse transformation matrix.
                        // PoseLandmarksAndSegmentationInverseProjection:
                        // InverseMatrixCalculator.
                        var inverseTransformationMatrix = (0, calculate_inverse_matrix_1.calculateInverseMatrix)(transformationMatrix);
                        var projectiveTransform = tf.tensor2d((0, image_utils_1.getProjectiveTransformMatrix)(inverseTransformationMatrix, { width: inputWidth, height: inputHeight }, imageSize), [1, 8]);
                        // Projects the segmentation mask from the letterboxed ROI back to the
                        // full image.
                        // PoseLandmarksAndSegmentationInverseProjection: WarpAffineCalculator.
                        var shape4D = [1, inputHeight, inputWidth, 1];
                        return tf.squeeze(tf.image.transform(tf.reshape(roiSegmentationMask, shape4D), projectiveTransform, 'bilinear', 'constant', 0, [imageSize.height, imageSize.width]), [0, 3]);
                    });
                    tf.dispose(roiSegmentationMask);
                }
                return [2 /*return*/, { landmarks: landmarks, auxiliaryLandmarks: auxiliaryLandmarks, worldLandmarks: worldLandmarks, segmentationMask: segmentationMask }];
            });
        });
    };
    BlazePoseTfjsDetector.prototype.tensorsToPoseLandmarksAndSegmentation = function (tensors) {
        return __awaiter(this, void 0, void 0, function () {
            var landmarkTensor, poseFlagTensor, heatmapTensor, worldLandmarkTensor, segmentationTensor, poseScore, rawLandmarks, allLandmarks, landmarks, auxiliaryLandmarks, allWorldLandmarks, worldLandmarksWithoutVisibility, worldLandmarks, segmentationMask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        landmarkTensor = tensors[0], poseFlagTensor = tensors[1], heatmapTensor = tensors[2], worldLandmarkTensor = tensors[3], segmentationTensor = (this.enableSegmentation ? tensors[4] : null);
                        return [4 /*yield*/, poseFlagTensor.data()];
                    case 1:
                        poseScore = (_a.sent())[0];
                        // Applies a threshold to the confidence score to determine whether a pose
                        // is present.
                        if (poseScore < constants.BLAZEPOSE_POSE_PRESENCE_SCORE) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, (0, tensors_to_landmarks_1.tensorsToLandmarks)(landmarkTensor, constants.BLAZEPOSE_TENSORS_TO_LANDMARKS_CONFIG)];
                    case 2:
                        rawLandmarks = _a.sent();
                        return [4 /*yield*/, (0, refine_landmarks_from_heatmap_1.refineLandmarksFromHeatmap)(rawLandmarks, heatmapTensor, constants.BLAZEPOSE_REFINE_LANDMARKS_FROM_HEATMAP_CONFIG)];
                    case 3:
                        allLandmarks = _a.sent();
                        landmarks = allLandmarks.slice(0, constants.BLAZEPOSE_NUM_KEYPOINTS);
                        auxiliaryLandmarks = allLandmarks.slice(constants.BLAZEPOSE_NUM_KEYPOINTS, constants.BLAZEPOSE_NUM_AUXILIARY_KEYPOINTS);
                        return [4 /*yield*/, (0, tensors_to_landmarks_1.tensorsToLandmarks)(worldLandmarkTensor, constants.BLAZEPOSE_TENSORS_TO_WORLD_LANDMARKS_CONFIG)];
                    case 4:
                        allWorldLandmarks = _a.sent();
                        worldLandmarksWithoutVisibility = allWorldLandmarks.slice(0, constants.BLAZEPOSE_NUM_KEYPOINTS);
                        worldLandmarks = (0, calculate_score_copy_1.calculateScoreCopy)(landmarks, worldLandmarksWithoutVisibility, true);
                        segmentationMask = this.enableSegmentation ?
                            (0, tensors_to_segmentation_1.tensorsToSegmentation)(segmentationTensor, constants.BLAZEPOSE_TENSORS_TO_SEGMENTATION_CONFIG) :
                            null;
                        return [2 /*return*/, {
                                landmarks: landmarks,
                                auxiliaryLandmarks: auxiliaryLandmarks,
                                poseScore: poseScore,
                                worldLandmarks: worldLandmarks,
                                segmentationMask: segmentationMask
                            }];
                }
            });
        });
    };
    // Calculate region of interest (ROI) from landmarks.
    // Subgraph: PoseLandmarksToRoiCpu
    // ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_landmark/pose_landmarks_to_roi.pbtxt
    // When landmarks is not null, imageSize should not be null either.
    BlazePoseTfjsDetector.prototype.poseLandmarksToRoi = function (landmarks, imageSize) {
        // PoseLandmarksToRoi: LandmarksToDetectionCalculator.
        var detection = (0, landmarks_to_detection_1.landmarksToDetection)(landmarks);
        // Converts detection into a rectangle based on center and scale alignment
        // points.
        // PoseLandmarksToRoi: AlignmentPointsRectsCalculator.
        var rawRoi = (0, calculate_alignment_points_rects_1.calculateAlignmentPointsRects)(detection, imageSize, {
            rotationVectorStartKeypointIndex: 0,
            rotationVectorEndKeypointIndex: 1,
            rotationVectorTargetAngleDegree: 90
        });
        // Expands pose rect with margin used during training.
        // PoseLandmarksToRoi: RectTransformationCalculator.
        var roi = (0, transform_rect_1.transformNormalizedRect)(rawRoi, imageSize, constants.BLAZEPOSE_DETECTOR_RECT_TRANSFORMATION_CONFIG);
        return roi;
    };
    // Filter landmarks temporally to reduce jitter.
    // Subgraph: PoseLandmarkFiltering
    // ref:
    // https://github.com/google/mediapipe/blob/master/mediapipe/modules/pose_landmark/pose_landmark_filtering.pbtxt
    BlazePoseTfjsDetector.prototype.poseLandmarkFiltering = function (actualLandmarks, auxiliaryLandmarks, actualWorldLandmarks, imageSize) {
        var actualLandmarksFiltered;
        var auxiliaryLandmarksFiltered;
        var actualWorldLandmarksFiltered;
        if (this.timestamp == null || !this.enableSmoothing) {
            actualLandmarksFiltered = actualLandmarks;
            auxiliaryLandmarksFiltered = auxiliaryLandmarks;
            actualWorldLandmarksFiltered = actualWorldLandmarks;
        }
        else {
            var auxDetection = (0, landmarks_to_detection_1.landmarksToDetection)(auxiliaryLandmarks);
            var objectScaleROI = (0, calculate_alignment_points_rects_1.calculateAlignmentPointsRects)(auxDetection, imageSize, {
                rotationVectorEndKeypointIndex: 0,
                rotationVectorStartKeypointIndex: 1,
                rotationVectorTargetAngleDegree: 90
            });
            // Smoothes pose landmark visibilities to reduce jitter.
            if (this.visibilitySmoothingFilterActual == null) {
                this.visibilitySmoothingFilterActual = new visibility_smoothing_1.LowPassVisibilityFilter(constants.BLAZEPOSE_VISIBILITY_SMOOTHING_CONFIG);
            }
            actualLandmarksFiltered =
                this.visibilitySmoothingFilterActual.apply(actualLandmarks);
            if (this.visibilitySmoothingFilterAuxiliary == null) {
                this.visibilitySmoothingFilterAuxiliary = new visibility_smoothing_1.LowPassVisibilityFilter(constants.BLAZEPOSE_VISIBILITY_SMOOTHING_CONFIG);
            }
            auxiliaryLandmarksFiltered =
                this.visibilitySmoothingFilterAuxiliary.apply(auxiliaryLandmarks);
            actualWorldLandmarksFiltered =
                this.visibilitySmoothingFilterActual.apply(actualWorldLandmarks);
            // Smoothes pose landmark coordinates to reduce jitter.
            if (this.landmarksSmoothingFilterActual == null) {
                this.landmarksSmoothingFilterActual = new keypoints_smoothing_1.KeypointsSmoothingFilter(constants.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_ACTUAL);
            }
            actualLandmarksFiltered = this.landmarksSmoothingFilterActual.apply(actualLandmarksFiltered, this.timestamp, imageSize, true /* normalized */, objectScaleROI);
            if (this.landmarksSmoothingFilterAuxiliary == null) {
                this.landmarksSmoothingFilterAuxiliary = new keypoints_smoothing_1.KeypointsSmoothingFilter(constants.BLAZEPOSE_LANDMARKS_SMOOTHING_CONFIG_AUXILIARY);
            }
            auxiliaryLandmarksFiltered = this.landmarksSmoothingFilterAuxiliary.apply(auxiliaryLandmarksFiltered, this.timestamp, imageSize, true /* normalized */, objectScaleROI);
            // Smoothes pose world landmark coordinates to reduce jitter.
            if (this.worldLandmarksSmoothingFilterActual == null) {
                this.worldLandmarksSmoothingFilterActual = new keypoints_smoothing_1.KeypointsSmoothingFilter(constants.BLAZEPOSE_WORLD_LANDMARKS_SMOOTHING_CONFIG_ACTUAL);
            }
            actualWorldLandmarksFiltered =
                this.worldLandmarksSmoothingFilterActual.apply(actualWorldLandmarks, this.timestamp);
        }
        return {
            actualLandmarksFiltered: actualLandmarksFiltered,
            auxiliaryLandmarksFiltered: auxiliaryLandmarksFiltered,
            actualWorldLandmarksFiltered: actualWorldLandmarksFiltered
        };
    };
    return BlazePoseTfjsDetector;
}());
/**
 * Loads the BlazePose model.
 *
 * @param modelConfig ModelConfig object that contains parameters for
 * the BlazePose loading process. Please find more details of each parameters
 * in the documentation of the `BlazePoseTfjsModelConfig` interface.
 */
function load(modelConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var config, detectorFromTFHub, landmarkFromTFHub, _a, detectorModel, landmarkModel;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    config = (0, detector_utils_1.validateModelConfig)(modelConfig);
                    detectorFromTFHub = typeof config.detectorModelUrl === 'string' &&
                        (config.detectorModelUrl.indexOf('https://tfhub.dev') > -1);
                    landmarkFromTFHub = typeof config.landmarkModelUrl === 'string' &&
                        (config.landmarkModelUrl.indexOf('https://tfhub.dev') > -1);
                    return [4 /*yield*/, Promise.all([
                            tfconv.loadGraphModel(config.detectorModelUrl, { fromTFHub: detectorFromTFHub }),
                            tfconv.loadGraphModel(config.landmarkModelUrl, { fromTFHub: landmarkFromTFHub })
                        ])];
                case 1:
                    _a = _b.sent(), detectorModel = _a[0], landmarkModel = _a[1];
                    return [2 /*return*/, new BlazePoseTfjsDetector(detectorModel, landmarkModel, config.enableSmoothing, config.enableSegmentation, config.smoothSegmentation, config.modelType)];
            }
        });
    });
}
exports.load = load;

},{"@tensorflow/tfjs-converter":"node_modules/@tensorflow/tfjs-converter/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../shared/calculators/calculate_alignment_points_rects":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_alignment_points_rects.js","../shared/calculators/calculate_inverse_matrix":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_inverse_matrix.js","../shared/calculators/calculate_landmark_projection":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_landmark_projection.js","../shared/calculators/calculate_score_copy":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_score_copy.js","../shared/calculators/calculate_world_landmark_projection":"node_modules/@tensorflow-models/pose-detection/shared/calculators/calculate_world_landmark_projection.js","../shared/calculators/constants":"node_modules/@tensorflow-models/pose-detection/shared/calculators/constants.js","../shared/calculators/convert_image_to_tensor":"node_modules/@tensorflow-models/pose-detection/shared/calculators/convert_image_to_tensor.js","../shared/calculators/create_ssd_anchors":"node_modules/@tensorflow-models/pose-detection/shared/calculators/create_ssd_anchors.js","../shared/calculators/detector_result":"node_modules/@tensorflow-models/pose-detection/shared/calculators/detector_result.js","../shared/calculators/image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js","../shared/calculators/is_video":"node_modules/@tensorflow-models/pose-detection/shared/calculators/is_video.js","../shared/calculators/landmarks_to_detection":"node_modules/@tensorflow-models/pose-detection/shared/calculators/landmarks_to_detection.js","../shared/calculators/mask_util":"node_modules/@tensorflow-models/pose-detection/shared/calculators/mask_util.js","../shared/calculators/non_max_suppression":"node_modules/@tensorflow-models/pose-detection/shared/calculators/non_max_suppression.js","../shared/calculators/normalized_keypoints_to_keypoints":"node_modules/@tensorflow-models/pose-detection/shared/calculators/normalized_keypoints_to_keypoints.js","../shared/calculators/refine_landmarks_from_heatmap":"node_modules/@tensorflow-models/pose-detection/shared/calculators/refine_landmarks_from_heatmap.js","../shared/calculators/remove_detection_letterbox":"node_modules/@tensorflow-models/pose-detection/shared/calculators/remove_detection_letterbox.js","../shared/calculators/remove_landmark_letterbox":"node_modules/@tensorflow-models/pose-detection/shared/calculators/remove_landmark_letterbox.js","../shared/calculators/segmentation_smoothing":"node_modules/@tensorflow-models/pose-detection/shared/calculators/segmentation_smoothing.js","../shared/calculators/tensors_to_detections":"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_detections.js","../shared/calculators/tensors_to_landmarks":"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_landmarks.js","../shared/calculators/tensors_to_segmentation":"node_modules/@tensorflow-models/pose-detection/shared/calculators/tensors_to_segmentation.js","../shared/calculators/transform_rect":"node_modules/@tensorflow-models/pose-detection/shared/calculators/transform_rect.js","../shared/filters/keypoints_smoothing":"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_smoothing.js","../shared/filters/visibility_smoothing":"node_modules/@tensorflow-models/pose-detection/shared/filters/visibility_smoothing.js","./constants":"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/constants.js","./detector_utils":"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/detector_utils.js"}],"node_modules/@tensorflow-models/pose-detection/calculators/tracker_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrackerConfig = void 0;
function validateTrackerConfig(config) {
    if (config.maxTracks < 1) {
        throw new Error("Must specify 'maxTracks' to be at least 1, but " +
            "encountered ".concat(config.maxTracks));
    }
    if (config.maxAge <= 0) {
        throw new Error("Must specify 'maxAge' to be positive, but " +
            "encountered ".concat(config.maxAge));
    }
    if (config.keypointTrackerParams !== undefined) {
        if (config.keypointTrackerParams.keypointConfidenceThreshold < 0 ||
            config.keypointTrackerParams.keypointConfidenceThreshold > 1) {
            throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range " +
                "[0, 1], but encountered " +
                "".concat(config.keypointTrackerParams.keypointConfidenceThreshold));
        }
        if (config.keypointTrackerParams.minNumberOfKeypoints < 1) {
            throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but " +
                "encountered ".concat(config.keypointTrackerParams.minNumberOfKeypoints));
        }
        for (var _i = 0, _a = config.keypointTrackerParams.keypointFalloff; _i < _a.length; _i++) {
            var falloff = _a[_i];
            if (falloff <= 0.0) {
                throw new Error("Must specify each keypoint falloff parameterto be positive " +
                    "but encountered ".concat(falloff));
            }
        }
    }
}
exports.validateTrackerConfig = validateTrackerConfig;

},{}],"node_modules/@tensorflow-models/pose-detection/calculators/tracker.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var tracker_utils_1 = require("./tracker_utils");
/**
 * A stateful tracker for associating detections between frames. This is an
 * abstract base class that performs generic mechanics. Implementations must
 * inherit from this class.
 */
var Tracker = /** @class */ (function () {
    function Tracker(config) {
        (0, tracker_utils_1.validateTrackerConfig)(config);
        this.tracks = [];
        this.maxTracks = config.maxTracks;
        this.maxAge = config.maxAge * 1000; // Convert msec to usec.
        this.minSimilarity = config.minSimilarity;
        this.nextID = 1;
    }
    /**
     * Tracks person instances across frames based on detections.
     * @param poses An array of detected `Pose`s.
     * @param timestamp The timestamp associated with the incoming poses, in
     * microseconds.
     * @returns An updated array of `Pose`s with tracking id properties.
     */
    Tracker.prototype.apply = function (poses, timestamp) {
        this.filterOldTracks(timestamp);
        var simMatrix = this.computeSimilarity(poses);
        this.assignTracks(poses, simMatrix, timestamp);
        this.updateTracks(timestamp);
        return poses;
    };
    /**
     * Returns a copy of the stored tracks.
     */
    Tracker.prototype.getTracks = function () {
        return this.tracks.slice();
    };
    /**
     * Returns a Set of active track IDs.
     */
    Tracker.prototype.getTrackIDs = function () {
        return new Set(this.tracks.map(function (track) { return track.id; }));
    };
    /**
     * Filters tracks based on their age.
     * @param timestamp The current timestamp in microseconds.
     */
    Tracker.prototype.filterOldTracks = function (timestamp) {
        var _this = this;
        this.tracks = this.tracks.filter(function (track) {
            return timestamp - track.lastTimestamp <= _this.maxAge;
        });
    };
    /**
     * Performs a greedy optimization to link detections with tracks. The `poses`
     * array is updated in place by providing an `id` property. If incoming
     * detections are not linked with existing tracks, new tracks will be created.
     * @param poses An array of detected `Pose`s. It's assumed that poses are
     * sorted from most confident to least confident.
     * @param simMatrix A 2D array of shape [num_det, num_tracks] with pairwise
     * similarity scores between detections and tracks.
     * @param timestamp The current timestamp in microseconds.
     */
    Tracker.prototype.assignTracks = function (poses, simMatrix, timestamp) {
        var unmatchedTrackIndices = Array.from(Array(simMatrix[0].length).keys());
        var detectionIndices = Array.from(Array(poses.length).keys());
        var unmatchedDetectionIndices = [];
        for (var _i = 0, detectionIndices_1 = detectionIndices; _i < detectionIndices_1.length; _i++) {
            var detectionIndex = detectionIndices_1[_i];
            if (unmatchedTrackIndices.length === 0) {
                unmatchedDetectionIndices.push(detectionIndex);
                continue;
            }
            // Assign the detection to the track which produces the highest pairwise
            // similarity score, assuming the score exceeds the minimum similarity
            // threshold.
            var maxTrackIndex = -1;
            var maxSimilarity = -1;
            for (var _a = 0, unmatchedTrackIndices_1 = unmatchedTrackIndices; _a < unmatchedTrackIndices_1.length; _a++) {
                var trackIndex = unmatchedTrackIndices_1[_a];
                var similarity = simMatrix[detectionIndex][trackIndex];
                if (similarity >= this.minSimilarity && similarity > maxSimilarity) {
                    maxTrackIndex = trackIndex;
                    maxSimilarity = similarity;
                }
            }
            if (maxTrackIndex >= 0) {
                // Link the detection with the highest scoring track.
                var linkedTrack = this.tracks[maxTrackIndex];
                linkedTrack = Object.assign(linkedTrack, this.createTrack(poses[detectionIndex], timestamp, linkedTrack.id));
                poses[detectionIndex].id = linkedTrack.id;
                var index = unmatchedTrackIndices.indexOf(maxTrackIndex);
                unmatchedTrackIndices.splice(index, 1);
            }
            else {
                unmatchedDetectionIndices.push(detectionIndex);
            }
        }
        // Spawn new tracks for all unmatched detections.
        for (var _b = 0, unmatchedDetectionIndices_1 = unmatchedDetectionIndices; _b < unmatchedDetectionIndices_1.length; _b++) {
            var detectionIndex = unmatchedDetectionIndices_1[_b];
            var newTrack = this.createTrack(poses[detectionIndex], timestamp);
            this.tracks.push(newTrack);
            poses[detectionIndex].id = newTrack.id;
        }
    };
    /**
     * Updates the stored tracks in the tracker. Specifically, the following
     * operations are applied in order:
     * 1. Tracks are sorted based on freshness (i.e. the most recently linked
     *    tracks are placed at the beginning of the array and the most stale are
     *    at the end).
     * 2. The tracks array is sliced to only contain `maxTracks` tracks (i.e. the
     *    most fresh tracks).
     * @param timestamp The current timestamp in microseconds.
     */
    Tracker.prototype.updateTracks = function (timestamp) {
        // Sort tracks from most recent to most stale, and then only keep the top
        // `maxTracks` tracks.
        this.tracks.sort(function (ta, tb) { return tb.lastTimestamp - ta.lastTimestamp; });
        this.tracks = this.tracks.slice(0, this.maxTracks);
    };
    /**
     * Creates a track from information in a pose.
     * @param pose A `Pose`.
     * @param timestamp The current timestamp in microseconds.
     * @param trackID The id to assign to the new track. If not provided,
     * will assign the next available id.
     * @returns A `Track`.
     */
    Tracker.prototype.createTrack = function (pose, timestamp, trackID) {
        var track = {
            id: trackID || this.nextTrackID(),
            lastTimestamp: timestamp,
            keypoints: __spreadArray([], pose.keypoints, true).map(function (keypoint) { return (__assign({}, keypoint)); })
        };
        if (pose.box !== undefined) {
            track.box = __assign({}, pose.box);
        }
        return track;
    };
    /**
     * Returns the next free track ID.
     */
    Tracker.prototype.nextTrackID = function () {
        var nextID = this.nextID;
        this.nextID += 1;
        return nextID;
    };
    /**
     * Removes specific tracks, based on their ids.
     */
    Tracker.prototype.remove = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.tracks = this.tracks.filter(function (track) { return !ids.includes(track.id); });
    };
    /**
     * Resets tracks.
     */
    Tracker.prototype.reset = function () {
        this.tracks = [];
    };
    return Tracker;
}());
exports.Tracker = Tracker;

},{"./tracker_utils":"node_modules/@tensorflow-models/pose-detection/calculators/tracker_utils.js"}],"node_modules/@tensorflow-models/pose-detection/calculators/bounding_box_tracker.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundingBoxTracker = void 0;
var tracker_1 = require("./tracker");
/**
 * BoundingBoxTracker, which tracks objects based on bounding box similarity,
 * currently defined as intersection-over-union (IoU).
 */
var BoundingBoxTracker = /** @class */ (function (_super) {
    __extends(BoundingBoxTracker, _super);
    function BoundingBoxTracker(config) {
        return _super.call(this, config) || this;
    }
    /**
     * Computes similarity based on intersection-over-union (IoU). See `Tracker`
     * for more details.
     */
    BoundingBoxTracker.prototype.computeSimilarity = function (poses) {
        var _this = this;
        if (poses.length === 0 || this.tracks.length === 0) {
            return [[]];
        }
        var simMatrix = poses.map(function (pose) {
            return _this.tracks.map(function (track) {
                return _this.iou(pose, track);
            });
        });
        return simMatrix;
    };
    /**
     * Computes the intersection-over-union (IoU) between a pose and a track.
     * @param pose A `Pose`.
     * @param track A `Track`.
     * @returns The IoU  between the pose and the track. This number is
     * between 0 and 1, and larger values indicate more box similarity.
     */
    BoundingBoxTracker.prototype.iou = function (pose, track) {
        var xMin = Math.max(pose.box.xMin, track.box.xMin);
        var yMin = Math.max(pose.box.yMin, track.box.yMin);
        var xMax = Math.min(pose.box.xMax, track.box.xMax);
        var yMax = Math.min(pose.box.yMax, track.box.yMax);
        if (xMin >= xMax || yMin >= yMax) {
            return 0.0;
        }
        var intersection = (xMax - xMin) * (yMax - yMin);
        var areaPose = pose.box.width * pose.box.height;
        var areaTrack = track.box.width * track.box.height;
        return intersection / (areaPose + areaTrack - intersection);
    };
    return BoundingBoxTracker;
}(tracker_1.Tracker));
exports.BoundingBoxTracker = BoundingBoxTracker;

},{"./tracker":"node_modules/@tensorflow-models/pose-detection/calculators/tracker.js"}],"node_modules/@tensorflow-models/pose-detection/calculators/keypoint_tracker.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeypointTracker = void 0;
var tracker_1 = require("./tracker");
/**
 * KeypointTracker, which tracks poses based on keypoint similarity. This
 * tracker assumes that keypoints are provided in normalized image
 * coordinates.
 */
var KeypointTracker = /** @class */ (function (_super) {
    __extends(KeypointTracker, _super);
    function KeypointTracker(config) {
        var _this = _super.call(this, config) || this;
        _this.keypointThreshold =
            config.keypointTrackerParams.keypointConfidenceThreshold;
        _this.keypointFalloff = config.keypointTrackerParams.keypointFalloff;
        _this.minNumKeyoints = config.keypointTrackerParams.minNumberOfKeypoints;
        return _this;
    }
    /**
     * Computes similarity based on Object Keypoint Similarity (OKS). It's
     * assumed that the keypoints within each `Pose` are in normalized image
     * coordinates. See `Tracker` for more details.
     */
    KeypointTracker.prototype.computeSimilarity = function (poses) {
        if (poses.length === 0 || this.tracks.length === 0) {
            return [[]];
        }
        var simMatrix = [];
        for (var _i = 0, poses_1 = poses; _i < poses_1.length; _i++) {
            var pose = poses_1[_i];
            var row = [];
            for (var _a = 0, _b = this.tracks; _a < _b.length; _a++) {
                var track = _b[_a];
                row.push(this.oks(pose, track));
            }
            simMatrix.push(row);
        }
        return simMatrix;
    };
    /**
     * Computes the Object Keypoint Similarity (OKS) between a pose and track.
     * This is similar in spirit to the calculation used by COCO keypoint eval:
     * https://cocodataset.org/#keypoints-eval
     * In this case, OKS is calculated as:
     * (1/sum_i d(c_i, c_ti)) * \sum_i exp(-d_i^2/(2*a_ti*x_i^2))*d(c_i, c_ti)
     * where
     *   d(x, y) is an indicator function which only produces 1 if x and y
     *     exceed a given threshold (i.e. keypointThreshold), otherwise 0.
     *   c_i is the confidence of keypoint i from the new pose
     *   c_ti is the confidence of keypoint i from the track
     *   d_i is the Euclidean distance between the pose and track keypoint
     *   a_ti is the area of the track object (the box covering the keypoints)
     *   x_i is a constant that controls falloff in a Gaussian distribution,
     *    computed as 2*keypointFalloff[i].
     * @param pose A `Pose`.
     * @param track A `Track`.
     * @returns The OKS score between the pose and the track. This number is
     * between 0 and 1, and larger values indicate more keypoint similarity.
     */
    KeypointTracker.prototype.oks = function (pose, track) {
        var boxArea = this.area(track.keypoints) + 1e-6;
        var oksTotal = 0;
        var numValidKeypoints = 0;
        for (var i = 0; i < pose.keypoints.length; ++i) {
            var poseKpt = pose.keypoints[i];
            var trackKpt = track.keypoints[i];
            if (poseKpt.score < this.keypointThreshold ||
                trackKpt.score < this.keypointThreshold) {
                continue;
            }
            numValidKeypoints += 1;
            var dSquared = Math.pow(poseKpt.x - trackKpt.x, 2) +
                Math.pow(poseKpt.y - trackKpt.y, 2);
            var x = 2 * this.keypointFalloff[i];
            oksTotal += Math.exp(-1 * dSquared / (2 * boxArea * Math.pow(x, 2)));
        }
        if (numValidKeypoints < this.minNumKeyoints) {
            return 0.0;
        }
        return oksTotal / numValidKeypoints;
    };
    /**
     * Computes the area of a bounding box that tightly covers keypoints.
     * @param Keypoint[] An array of `Keypoint`s.
     * @returns The area of the object.
     */
    KeypointTracker.prototype.area = function (keypoints) {
        var _this = this;
        var validKeypoint = keypoints.filter(function (kpt) { return kpt.score > _this.keypointThreshold; });
        var minX = Math.min.apply(Math, __spreadArray([1.0], validKeypoint.map(function (kpt) { return kpt.x; }), false));
        var maxX = Math.max.apply(Math, __spreadArray([0.0], validKeypoint.map(function (kpt) { return kpt.x; }), false));
        var minY = Math.min.apply(Math, __spreadArray([1.0], validKeypoint.map(function (kpt) { return kpt.y; }), false));
        var maxY = Math.max.apply(Math, __spreadArray([0.0], validKeypoint.map(function (kpt) { return kpt.y; }), false));
        return (maxX - minX) * (maxY - minY);
    };
    return KeypointTracker;
}(tracker_1.Tracker));
exports.KeypointTracker = KeypointTracker;

},{"./tracker":"node_modules/@tensorflow-models/pose-detection/calculators/tracker.js"}],"node_modules/@tensorflow-models/pose-detection/calculators/types.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerType = void 0;
/**
 * All supported tracker types.
 */
var TrackerType;
(function (TrackerType) {
    TrackerType["Keypoint"] = "keypoint";
    TrackerType["BoundingBox"] = "boundingBox";
})(TrackerType = exports.TrackerType || (exports.TrackerType = {}));

},{}],"node_modules/@tensorflow-models/pose-detection/types.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedModels = void 0;
var SupportedModels;
(function (SupportedModels) {
    SupportedModels["MoveNet"] = "MoveNet";
    SupportedModels["BlazePose"] = "BlazePose";
    SupportedModels["PoseNet"] = "PoseNet";
})(SupportedModels = exports.SupportedModels || (exports.SupportedModels = {}));

},{}],"node_modules/@tensorflow-models/pose-detection/util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeypointIndexByName = exports.getAdjacentPairs = exports.getKeypointIndexBySide = void 0;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var constants = require("./constants");
var types_1 = require("./types");
function getKeypointIndexBySide(model) {
    switch (model) {
        case types_1.SupportedModels.BlazePose:
            return constants.BLAZEPOSE_KEYPOINTS_BY_SIDE;
        case types_1.SupportedModels.PoseNet:
        case types_1.SupportedModels.MoveNet:
            return constants.COCO_KEYPOINTS_BY_SIDE;
        default:
            throw new Error("Model ".concat(model, " is not supported."));
    }
}
exports.getKeypointIndexBySide = getKeypointIndexBySide;
function getAdjacentPairs(model) {
    switch (model) {
        case types_1.SupportedModels.BlazePose:
            return constants.BLAZEPOSE_CONNECTED_KEYPOINTS_PAIRS;
        case types_1.SupportedModels.PoseNet:
        case types_1.SupportedModels.MoveNet:
            return constants.COCO_CONNECTED_KEYPOINTS_PAIRS;
        default:
            throw new Error("Model ".concat(model, " is not supported."));
    }
}
exports.getAdjacentPairs = getAdjacentPairs;
function getKeypointIndexByName(model) {
    switch (model) {
        case types_1.SupportedModels.BlazePose:
            return constants.BLAZEPOSE_KEYPOINTS.reduce(function (map, name, i) {
                map[name] = i;
                return map;
            }, {});
        case types_1.SupportedModels.PoseNet:
        case types_1.SupportedModels.MoveNet:
            return constants.COCO_KEYPOINTS.reduce(function (map, name, i) {
                map[name] = i;
                return map;
            }, {});
        default:
            throw new Error("Model ".concat(model, " is not supported."));
    }
}
exports.getKeypointIndexByName = getKeypointIndexByName;

},{"./constants":"node_modules/@tensorflow-models/pose-detection/constants.js","./types":"node_modules/@tensorflow-models/pose-detection/types.js"}],"node_modules/@tensorflow-models/pose-detection/movenet/constants.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_BOUNDING_BOX_TRACKER_CONFIG = exports.DEFAULT_KEYPOINT_TRACKER_CONFIG = exports.MULTIPOSE_INSTANCE_SIZE = exports.MULTIPOSE_BOX_SCORE_IDX = exports.MULTIPOSE_BOX_IDX = exports.MULTIPOSE_BOX_SIZE = exports.NUM_KEYPOINT_VALUES = exports.NUM_KEYPOINTS = exports.DEFAULT_MIN_POSE_SCORE = exports.MIN_CROP_KEYPOINT_SCORE = exports.CROP_FILTER_ALPHA = exports.KEYPOINT_FILTER_CONFIG = exports.MOVENET_ESTIMATION_CONFIG = exports.MOVENET_CONFIG = exports.MOVENET_MULTIPOSE_DEFAULT_MAX_DIMENSION = exports.MOVENET_SINGLEPOSE_THUNDER_RESOLUTION = exports.MOVENET_SINGLEPOSE_LIGHTNING_RESOLUTION = exports.MOVENET_MULTIPOSE_LIGHTNING_URL = exports.MOVENET_SINGLEPOSE_THUNDER_URL = exports.MOVENET_SINGLEPOSE_LIGHTNING_URL = exports.VALID_MODELS = exports.MULTIPOSE_LIGHTNING = exports.SINGLEPOSE_THUNDER = exports.SINGLEPOSE_LIGHTNING = void 0;
exports.SINGLEPOSE_LIGHTNING = 'SinglePose.Lightning';
exports.SINGLEPOSE_THUNDER = 'SinglePose.Thunder';
exports.MULTIPOSE_LIGHTNING = 'MultiPose.Lightning';
exports.VALID_MODELS = [exports.SINGLEPOSE_LIGHTNING, exports.SINGLEPOSE_THUNDER, exports.MULTIPOSE_LIGHTNING];
exports.MOVENET_SINGLEPOSE_LIGHTNING_URL = 'https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4';
exports.MOVENET_SINGLEPOSE_THUNDER_URL = 'https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4';
exports.MOVENET_MULTIPOSE_LIGHTNING_URL = 'https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1';
exports.MOVENET_SINGLEPOSE_LIGHTNING_RESOLUTION = 192;
exports.MOVENET_SINGLEPOSE_THUNDER_RESOLUTION = 256;
exports.MOVENET_MULTIPOSE_DEFAULT_MAX_DIMENSION = 256;
// The default configuration for loading MoveNet.
exports.MOVENET_CONFIG = {
    modelType: exports.SINGLEPOSE_LIGHTNING,
    enableSmoothing: true
};
exports.MOVENET_ESTIMATION_CONFIG = {};
exports.KEYPOINT_FILTER_CONFIG = {
    frequency: 30,
    minCutOff: 2.5,
    beta: 300.0,
    derivateCutOff: 2.5,
    thresholdCutOff: 0.5,
    thresholdBeta: 5.0,
    disableValueScaling: true,
};
exports.CROP_FILTER_ALPHA = 0.9;
exports.MIN_CROP_KEYPOINT_SCORE = 0.2;
exports.DEFAULT_MIN_POSE_SCORE = 0.25;
exports.NUM_KEYPOINTS = 17;
exports.NUM_KEYPOINT_VALUES = 3; // [y, x, score]
exports.MULTIPOSE_BOX_SIZE = 5; // [ymin, xmin, ymax, xmax, score]
exports.MULTIPOSE_BOX_IDX = exports.NUM_KEYPOINTS * exports.NUM_KEYPOINT_VALUES;
exports.MULTIPOSE_BOX_SCORE_IDX = exports.MULTIPOSE_BOX_IDX + 4;
exports.MULTIPOSE_INSTANCE_SIZE = exports.NUM_KEYPOINTS * exports.NUM_KEYPOINT_VALUES + exports.MULTIPOSE_BOX_SIZE;
exports.DEFAULT_KEYPOINT_TRACKER_CONFIG = {
    maxTracks: 18,
    maxAge: 1000,
    minSimilarity: 0.2,
    keypointTrackerParams: {
        keypointConfidenceThreshold: 0.3,
        // From COCO:
        // https://cocodataset.org/#keypoints-eval
        keypointFalloff: [
            0.026, 0.025, 0.025, 0.035, 0.035, 0.079, 0.079, 0.072, 0.072, 0.062,
            0.062, 0.107, 0.107, 0.087, 0.087, 0.089, 0.089
        ],
        minNumberOfKeypoints: 4
    }
};
exports.DEFAULT_BOUNDING_BOX_TRACKER_CONFIG = {
    maxTracks: 18,
    maxAge: 1000,
    minSimilarity: 0.15,
    trackerParams: {}
};

},{}],"node_modules/@tensorflow-models/pose-detection/movenet/crop_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCropRegion = exports.determineNextCropRegion = exports.torsoVisible = void 0;
var constants_1 = require("../constants");
var constants_2 = require("./constants");
/**
 * Determines whether the torso of a person is visible.
 *
 * @param keypoints An array of `Keypoint`s associated with a person.
 * @param keypointIndexByName A map from keypoint name to index in the keypoints
 *     array.
 * @return A boolean indicating whether the torso is visible.
 */
function torsoVisible(keypoints, keypointIndexByName) {
    return ((keypoints[keypointIndexByName['left_hip']].score >
        constants_2.MIN_CROP_KEYPOINT_SCORE ||
        keypoints[keypointIndexByName['right_hip']].score >
            constants_2.MIN_CROP_KEYPOINT_SCORE) &&
        (keypoints[keypointIndexByName['left_shoulder']].score >
            constants_2.MIN_CROP_KEYPOINT_SCORE ||
            keypoints[keypointIndexByName['right_shoulder']].score >
                constants_2.MIN_CROP_KEYPOINT_SCORE));
}
exports.torsoVisible = torsoVisible;
/**
 * Calculates the maximum distance from each keypoint to the center location.
 * The function returns the maximum distances from the two sets of keypoints:
 * full 17 keypoints and 4 torso keypoints. The returned information will be
 * used to determine the crop size. See determineCropRegion for more detail.
 *
 * @param keypoints An array of `Keypoint`s associated with a person.
 * @param keypointIndexByName A map from keypoint name to index in the keypoints
 *     array.
 * @param targetKeypoints Maps from joint names to coordinates.
 * @param centerY The Y coordinate of the center of the person.
 * @param centerX The X coordinate of the center of the person.
 * @return An array containing information about the torso and body range in the
 *     image: [maxTorsoYrange, maxTorsoXrange, maxBodyYrange, maxBodyXrange].
 */
function determineTorsoAndBodyRange(keypoints, keypointIndexByName, targetKeypoints, centerY, centerX) {
    var torsoJoints = ['left_shoulder', 'right_shoulder', 'left_hip', 'right_hip'];
    var maxTorsoYrange = 0.0;
    var maxTorsoXrange = 0.0;
    for (var i = 0; i < torsoJoints.length; i++) {
        var distY = Math.abs(centerY - targetKeypoints[torsoJoints[i]][0]);
        var distX = Math.abs(centerX - targetKeypoints[torsoJoints[i]][1]);
        if (distY > maxTorsoYrange) {
            maxTorsoYrange = distY;
        }
        if (distX > maxTorsoXrange) {
            maxTorsoXrange = distX;
        }
    }
    var maxBodyYrange = 0.0;
    var maxBodyXrange = 0.0;
    for (var _i = 0, _a = Object.keys(targetKeypoints); _i < _a.length; _i++) {
        var key = _a[_i];
        if (keypoints[keypointIndexByName[key]].score < constants_2.MIN_CROP_KEYPOINT_SCORE) {
            continue;
        }
        var distY = Math.abs(centerY - targetKeypoints[key][0]);
        var distX = Math.abs(centerX - targetKeypoints[key][1]);
        if (distY > maxBodyYrange) {
            maxBodyYrange = distY;
        }
        if (distX > maxBodyXrange) {
            maxBodyXrange = distX;
        }
    }
    return [maxTorsoYrange, maxTorsoXrange, maxBodyYrange, maxBodyXrange];
}
/**
 * Determines the region to crop the image for the model to run inference on.
 * The algorithm uses the detected joints from the previous frame to estimate
 * the square region that encloses the full body of the target person and
 * centers at the midpoint of two hip joints. The crop size is determined by
 * the distances between each joint and the center point.
 * When the model is not confident with the four torso joint predictions, the
 * function returns a default crop which is the full image padded to square.
 *
 * @param currentCropRegion The crop region that was used for the current frame.
 *     Can be null for the very first frame that is handled by the detector.
 * @param keypoints An array of `Keypoint`s associated with a person.
 * @param keypointIndexByName A map from keypoint name to index in the keypoints
 *     array.
 * @param imageSize The size of the image that is being processed.
 * @return A `BoundingBox` that contains the new crop region.
 */
function determineNextCropRegion(currentCropRegion, keypoints, keypointIndexByName, imageSize) {
    var targetKeypoints = {};
    for (var _i = 0, COCO_KEYPOINTS_1 = constants_1.COCO_KEYPOINTS; _i < COCO_KEYPOINTS_1.length; _i++) {
        var key = COCO_KEYPOINTS_1[_i];
        targetKeypoints[key] = [
            keypoints[keypointIndexByName[key]].y * imageSize.height,
            keypoints[keypointIndexByName[key]].x * imageSize.width
        ];
    }
    if (torsoVisible(keypoints, keypointIndexByName)) {
        var centerY = (targetKeypoints['left_hip'][0] + targetKeypoints['right_hip'][0]) / 2;
        var centerX = (targetKeypoints['left_hip'][1] + targetKeypoints['right_hip'][1]) / 2;
        var _a = determineTorsoAndBodyRange(keypoints, keypointIndexByName, targetKeypoints, centerY, centerX), maxTorsoYrange = _a[0], maxTorsoXrange = _a[1], maxBodyYrange = _a[2], maxBodyXrange = _a[3];
        var cropLengthHalf = Math.max(maxTorsoXrange * 1.9, maxTorsoYrange * 1.9, maxBodyYrange * 1.2, maxBodyXrange * 1.2);
        cropLengthHalf = Math.min(cropLengthHalf, Math.max(centerX, imageSize.width - centerX, centerY, imageSize.height - centerY));
        var cropCorner = [centerY - cropLengthHalf, centerX - cropLengthHalf];
        if (cropLengthHalf > Math.max(imageSize.width, imageSize.height) / 2) {
            return initCropRegion(currentCropRegion == null, imageSize);
        }
        else {
            var cropLength = cropLengthHalf * 2;
            return {
                yMin: cropCorner[0] / imageSize.height,
                xMin: cropCorner[1] / imageSize.width,
                yMax: (cropCorner[0] + cropLength) / imageSize.height,
                xMax: (cropCorner[1] + cropLength) / imageSize.width,
                height: (cropCorner[0] + cropLength) / imageSize.height -
                    cropCorner[0] / imageSize.height,
                width: (cropCorner[1] + cropLength) / imageSize.width -
                    cropCorner[1] / imageSize.width
            };
        }
    }
    else {
        return initCropRegion(currentCropRegion == null, imageSize);
    }
}
exports.determineNextCropRegion = determineNextCropRegion;
/**
 * Provides initial crop region.
 *
 * The function provides the initial crop region when the algorithm cannot
 * reliably determine the crop region from the previous frame. There are two
 * scenarios:
 *   1) The very first frame: the function returns the best guess by cropping
 *      a square in the middle of the image.
 *   2) Not enough reliable keypoints detected from the previous frame: the
 *      function pads the full image from both sides to make it a square
 *      image.
 *
 * @param firstFrame A boolean indicating whether we are initializing a crop
 *     region for the very first frame.
 * @param imageSize The size of the image that is being processed.
 * @return A `BoundingBox` that contains the initial crop region.
 */
function initCropRegion(firstFrame, imageSize) {
    var boxHeight, boxWidth, yMin, xMin;
    if (firstFrame) {
        // If it is the first frame, perform a best guess by making the square
        // crop at the image center to better utilize the image pixels and
        // create higher chance to enter the cropping loop.
        if (imageSize.width > imageSize.height) {
            boxHeight = 1.0;
            boxWidth = imageSize.height / imageSize.width;
            yMin = 0.0;
            xMin = (imageSize.width / 2 - imageSize.height / 2) / imageSize.width;
        }
        else {
            boxHeight = imageSize.width / imageSize.height;
            boxWidth = 1.0;
            yMin = (imageSize.height / 2 - imageSize.width / 2) / imageSize.height;
            xMin = 0.0;
        }
    }
    else {
        // No cropRegion was available from a previous estimatePoses() call, so
        // run the model on the full image with padding on both sides.
        if (imageSize.width > imageSize.height) {
            boxHeight = imageSize.width / imageSize.height;
            boxWidth = 1.0;
            yMin = (imageSize.height / 2 - imageSize.width / 2) / imageSize.height;
            xMin = 0.0;
        }
        else {
            boxHeight = 1.0;
            boxWidth = imageSize.height / imageSize.width;
            yMin = 0.0;
            xMin = (imageSize.width / 2 - imageSize.height / 2) / imageSize.width;
        }
    }
    return {
        yMin: yMin,
        xMin: xMin,
        yMax: yMin + boxHeight,
        xMax: xMin + boxWidth,
        height: boxHeight,
        width: boxWidth
    };
}
exports.initCropRegion = initCropRegion;

},{"../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","./constants":"node_modules/@tensorflow-models/pose-detection/movenet/constants.js"}],"node_modules/@tensorflow-models/pose-detection/movenet/detector_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeBoundingBoxTrackerConfig = exports.mergeKeypointTrackerConfig = exports.validateEstimationConfig = exports.validateModelConfig = void 0;
var types_1 = require("../calculators/types");
var constants_1 = require("./constants");
function validateModelConfig(modelConfig) {
    var config = modelConfig == null ? constants_1.MOVENET_CONFIG : __assign({}, modelConfig);
    if (config.modelType == null) {
        config.modelType = 'SinglePose.Lightning';
    }
    else if (constants_1.VALID_MODELS.indexOf(config.modelType) < 0) {
        throw new Error("Invalid architecture ".concat(config.modelType, ". ") +
            "Should be one of ".concat(constants_1.VALID_MODELS));
    }
    if (config.enableSmoothing == null) {
        config.enableSmoothing = true;
    }
    if (config.minPoseScore != null &&
        (config.minPoseScore < 0.0 || config.minPoseScore > 1.0)) {
        throw new Error("minPoseScore should be between 0.0 and 1.0");
    }
    if (config.multiPoseMaxDimension != null &&
        (config.multiPoseMaxDimension % 32 !== 0 ||
            config.multiPoseMaxDimension < 32)) {
        throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");
    }
    if (config.modelType === constants_1.MULTIPOSE_LIGHTNING &&
        config.enableTracking == null) {
        config.enableTracking = true;
    }
    if (config.modelType === constants_1.MULTIPOSE_LIGHTNING &&
        config.enableTracking === true) {
        if (config.trackerType == null) {
            config.trackerType = types_1.TrackerType.BoundingBox;
        }
        if (config.trackerType === types_1.TrackerType.Keypoint) {
            if (config.trackerConfig != null) {
                config.trackerConfig = mergeKeypointTrackerConfig(config.trackerConfig);
            }
            else {
                config.trackerConfig = constants_1.DEFAULT_KEYPOINT_TRACKER_CONFIG;
            }
        }
        else if (config.trackerType === types_1.TrackerType.BoundingBox) {
            if (config.trackerConfig != null) {
                config.trackerConfig =
                    mergeBoundingBoxTrackerConfig(config.trackerConfig);
            }
            else {
                config.trackerConfig = constants_1.DEFAULT_BOUNDING_BOX_TRACKER_CONFIG;
            }
        }
        else {
            throw new Error('Tracker type not supported by MoveNet');
        }
        // We don't need to validate the trackerConfig here because the tracker will
        // take care of that.
    }
    return config;
}
exports.validateModelConfig = validateModelConfig;
function validateEstimationConfig(estimationConfig) {
    var config = estimationConfig == null ? constants_1.MOVENET_ESTIMATION_CONFIG : __assign({}, estimationConfig);
    return config;
}
exports.validateEstimationConfig = validateEstimationConfig;
function mergeBaseTrackerConfig(defaultConfig, userConfig) {
    var mergedConfig = {
        maxTracks: defaultConfig.maxTracks,
        maxAge: defaultConfig.maxAge,
        minSimilarity: defaultConfig.minSimilarity,
    };
    if (userConfig.maxTracks != null) {
        mergedConfig.maxTracks = userConfig.maxTracks;
    }
    if (userConfig.maxAge != null) {
        mergedConfig.maxAge = userConfig.maxAge;
    }
    if (userConfig.minSimilarity != null) {
        mergedConfig.minSimilarity = userConfig.minSimilarity;
    }
    return mergedConfig;
}
function mergeKeypointTrackerConfig(userConfig) {
    var mergedConfig = mergeBaseTrackerConfig(constants_1.DEFAULT_KEYPOINT_TRACKER_CONFIG, userConfig);
    mergedConfig.keypointTrackerParams = __assign({}, constants_1.DEFAULT_KEYPOINT_TRACKER_CONFIG.keypointTrackerParams);
    if (userConfig.keypointTrackerParams != null) {
        if (userConfig.keypointTrackerParams.keypointConfidenceThreshold != null) {
            mergedConfig.keypointTrackerParams.keypointConfidenceThreshold =
                userConfig.keypointTrackerParams.keypointConfidenceThreshold;
        }
        if (userConfig.keypointTrackerParams.keypointFalloff != null) {
            mergedConfig.keypointTrackerParams.keypointFalloff =
                userConfig.keypointTrackerParams.keypointFalloff;
        }
        if (userConfig.keypointTrackerParams.minNumberOfKeypoints != null) {
            mergedConfig.keypointTrackerParams.minNumberOfKeypoints =
                userConfig.keypointTrackerParams.minNumberOfKeypoints;
        }
    }
    return mergedConfig;
}
exports.mergeKeypointTrackerConfig = mergeKeypointTrackerConfig;
function mergeBoundingBoxTrackerConfig(userConfig) {
    var mergedConfig = mergeBaseTrackerConfig(constants_1.DEFAULT_BOUNDING_BOX_TRACKER_CONFIG, userConfig);
    return mergedConfig;
}
exports.mergeBoundingBoxTrackerConfig = mergeBoundingBoxTrackerConfig;

},{"../calculators/types":"node_modules/@tensorflow-models/pose-detection/calculators/types.js","./constants":"node_modules/@tensorflow-models/pose-detection/movenet/constants.js"}],"node_modules/@tensorflow-models/pose-detection/movenet/detector.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var tfc = require("@tensorflow/tfjs-converter");
var tf = require("@tensorflow/tfjs-core");
var bounding_box_tracker_1 = require("../calculators/bounding_box_tracker");
var keypoint_tracker_1 = require("../calculators/keypoint_tracker");
var types_1 = require("../calculators/types");
var constants_1 = require("../constants");
var constants_2 = require("../shared/calculators/constants");
var image_utils_1 = require("../shared/calculators/image_utils");
var is_video_1 = require("../shared/calculators/is_video");
var keypoints_one_euro_filter_1 = require("../shared/filters/keypoints_one_euro_filter");
var low_pass_filter_1 = require("../shared/filters/low_pass_filter");
var types_2 = require("../types");
var util_1 = require("../util");
var constants_3 = require("./constants");
var crop_utils_1 = require("./crop_utils");
var detector_utils_1 = require("./detector_utils");
/**
 * MoveNet detector class.
 */
var MoveNetDetector = /** @class */ (function () {
    function MoveNetDetector(moveNetModel, config) {
        this.moveNetModel = moveNetModel;
        this.modelInputResolution = { height: 0, width: 0 };
        this.keypointIndexByName = (0, util_1.getKeypointIndexByName)(types_2.SupportedModels.MoveNet);
        // Only single-pose models have a fixed input resolution.
        if (config.modelType === constants_3.SINGLEPOSE_LIGHTNING) {
            this.modelInputResolution.width = constants_3.MOVENET_SINGLEPOSE_LIGHTNING_RESOLUTION;
            this.modelInputResolution.height =
                constants_3.MOVENET_SINGLEPOSE_LIGHTNING_RESOLUTION;
        }
        else if (config.modelType === constants_3.SINGLEPOSE_THUNDER) {
            this.modelInputResolution.width = constants_3.MOVENET_SINGLEPOSE_THUNDER_RESOLUTION;
            this.modelInputResolution.height = constants_3.MOVENET_SINGLEPOSE_THUNDER_RESOLUTION;
        }
        this.multiPoseModel = config.modelType === constants_3.MULTIPOSE_LIGHTNING;
        if (!this.multiPoseModel) {
            this.keypointFilter = new keypoints_one_euro_filter_1.KeypointsOneEuroFilter(constants_3.KEYPOINT_FILTER_CONFIG);
            this.cropRegionFilterYMin = new low_pass_filter_1.LowPassFilter(constants_3.CROP_FILTER_ALPHA);
            this.cropRegionFilterXMin = new low_pass_filter_1.LowPassFilter(constants_3.CROP_FILTER_ALPHA);
            this.cropRegionFilterYMax = new low_pass_filter_1.LowPassFilter(constants_3.CROP_FILTER_ALPHA);
            this.cropRegionFilterXMax = new low_pass_filter_1.LowPassFilter(constants_3.CROP_FILTER_ALPHA);
        }
        this.enableSmoothing = config.enableSmoothing;
        if (config.minPoseScore) {
            this.minPoseScore = config.minPoseScore;
        }
        else {
            this.minPoseScore = constants_3.DEFAULT_MIN_POSE_SCORE;
        }
        if (config.multiPoseMaxDimension) {
            this.multiPoseMaxDimension = config.multiPoseMaxDimension;
        }
        else {
            this.multiPoseMaxDimension = constants_3.MOVENET_MULTIPOSE_DEFAULT_MAX_DIMENSION;
        }
        this.enableTracking = config.enableTracking;
        if (this.multiPoseModel && this.enableTracking) {
            if (config.trackerType === types_1.TrackerType.Keypoint) {
                this.tracker = new keypoint_tracker_1.KeypointTracker(config.trackerConfig);
            }
            else if (config.trackerType === types_1.TrackerType.BoundingBox) {
                this.tracker = new bounding_box_tracker_1.BoundingBoxTracker(config.trackerConfig);
            }
            if (this.enableSmoothing) {
                this.keypointFilterMap = new Map();
            }
        }
    }
    /**
     * Runs inference on an image using a model that is assumed to be a single
     * person keypoint model that outputs 17 keypoints.
     *
     * @param inputImage 4D tensor containing the input image. Should be of size
     * [1, modelHeight, modelWidth, 3].
     * @return A `Pose`.
     */
    MoveNetDetector.prototype.runSinglePersonPoseModel = function (inputImage) {
        return __awaiter(this, void 0, void 0, function () {
            var outputTensor, inferenceResult, pose, numValidKeypoints, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputTensor = this.moveNetModel.execute(inputImage);
                        // We expect an output tensor of shape [1, 1, 17, 3] (batch, person,
                        // keypoint, (y, x, score)).
                        if (outputTensor.shape.length !== 4 || outputTensor.shape[0] !== 1 ||
                            outputTensor.shape[1] !== 1 ||
                            outputTensor.shape[2] !== constants_3.NUM_KEYPOINTS ||
                            outputTensor.shape[3] !== constants_3.NUM_KEYPOINT_VALUES) {
                            outputTensor.dispose();
                            throw new Error("Unexpected output shape from model: [".concat(outputTensor.shape, "]"));
                        }
                        if (!(tf.getBackend() !== 'webgpu')) return [3 /*break*/, 1];
                        inferenceResult = outputTensor.dataSync();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, outputTensor.data()];
                    case 2:
                        inferenceResult = _a.sent();
                        _a.label = 3;
                    case 3:
                        outputTensor.dispose();
                        pose = { keypoints: [], score: 0.0 };
                        numValidKeypoints = 0;
                        for (i = 0; i < constants_3.NUM_KEYPOINTS; ++i) {
                            pose.keypoints[i] = {
                                y: inferenceResult[i * constants_3.NUM_KEYPOINT_VALUES],
                                x: inferenceResult[i * constants_3.NUM_KEYPOINT_VALUES + 1],
                                score: inferenceResult[i * constants_3.NUM_KEYPOINT_VALUES + 2]
                            };
                            if (pose.keypoints[i].score > constants_3.MIN_CROP_KEYPOINT_SCORE) {
                                ++numValidKeypoints;
                                pose.score += pose.keypoints[i].score;
                            }
                        }
                        if (numValidKeypoints > 0) {
                            pose.score /= numValidKeypoints;
                        }
                        return [2 /*return*/, pose];
                }
            });
        });
    };
    /**
     * Runs inference on an image using a model that is assumed to be a
     * multi-person keypoint model that outputs 17 keypoints and a box for a
     * multiple persons.
     *
     * @param inputImage 4D tensor containing the input image. Should be of size
     * [1, width, height, 3], where width and height are divisible by 32.
     * @return An array of `Pose`s.
     */
    MoveNetDetector.prototype.runMultiPersonPoseModel = function (inputImage) {
        return __awaiter(this, void 0, void 0, function () {
            var outputTensor, inferenceResult, poses, numInstances, i, boxIndex, scoreIndex, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputTensor = this.moveNetModel.execute(inputImage);
                        // Multi-pose model output is a [1, n, 56] tensor ([batch, num_instances,
                        // instance_keypoints_and_box]).
                        if (outputTensor.shape.length !== 3 || outputTensor.shape[0] !== 1 ||
                            outputTensor.shape[2] !== constants_3.MULTIPOSE_INSTANCE_SIZE) {
                            outputTensor.dispose();
                            throw new Error("Unexpected output shape from model: [".concat(outputTensor.shape, "]"));
                        }
                        if (!(tf.getBackend() !== 'webgpu')) return [3 /*break*/, 1];
                        inferenceResult = outputTensor.dataSync();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, outputTensor.data()];
                    case 2:
                        inferenceResult = _a.sent();
                        _a.label = 3;
                    case 3:
                        outputTensor.dispose();
                        poses = [];
                        numInstances = inferenceResult.length / constants_3.MULTIPOSE_INSTANCE_SIZE;
                        for (i = 0; i < numInstances; ++i) {
                            poses[i] = { keypoints: [] };
                            boxIndex = i * constants_3.MULTIPOSE_INSTANCE_SIZE + constants_3.MULTIPOSE_BOX_IDX;
                            poses[i].box = {
                                yMin: inferenceResult[boxIndex],
                                xMin: inferenceResult[boxIndex + 1],
                                yMax: inferenceResult[boxIndex + 2],
                                xMax: inferenceResult[boxIndex + 3],
                                width: inferenceResult[boxIndex + 3] - inferenceResult[boxIndex + 1],
                                height: inferenceResult[boxIndex + 2] - inferenceResult[boxIndex]
                            };
                            scoreIndex = i * constants_3.MULTIPOSE_INSTANCE_SIZE + constants_3.MULTIPOSE_BOX_SCORE_IDX;
                            poses[i].score = inferenceResult[scoreIndex];
                            poses[i].keypoints = [];
                            for (j = 0; j < constants_3.NUM_KEYPOINTS; ++j) {
                                poses[i].keypoints[j] = {
                                    y: inferenceResult[i * constants_3.MULTIPOSE_INSTANCE_SIZE + j * constants_3.NUM_KEYPOINT_VALUES],
                                    x: inferenceResult[i * constants_3.MULTIPOSE_INSTANCE_SIZE + j * constants_3.NUM_KEYPOINT_VALUES + 1],
                                    score: inferenceResult[i * constants_3.MULTIPOSE_INSTANCE_SIZE + j * constants_3.NUM_KEYPOINT_VALUES + 2]
                                };
                            }
                        }
                        return [2 /*return*/, poses];
                }
            });
        });
    };
    /**
     * Estimates poses for an image or video frame. This does standard ImageNet
     * pre-processing before inferring through the model. The image pixels should
     * have values [0-255]. It returns an array of poses.
     *
     * @param image ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement
     * The input image to feed through the network.
     * @param config Optional. Currently not used.
     * @param timestamp Optional. In milliseconds. This is useful when image is
     * a tensor, which doesn't have timestamp info. Or to override timestamp in a
     * video.
     * @return An array of `Pose`s.
     */
    MoveNetDetector.prototype.estimatePoses = function (image, estimationConfig, timestamp) {
        if (estimationConfig === void 0) { estimationConfig = constants_3.MOVENET_ESTIMATION_CONFIG; }
        return __awaiter(this, void 0, void 0, function () {
            var imageTensor3D, imageSize, imageTensor4D, poses, poseIdx, keypointIdx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        estimationConfig = (0, detector_utils_1.validateEstimationConfig)(estimationConfig);
                        if (image == null) {
                            this.reset();
                            return [2 /*return*/, []];
                        }
                        if (timestamp == null) {
                            if ((0, is_video_1.isVideo)(image)) {
                                timestamp = image.currentTime * constants_2.SECOND_TO_MICRO_SECONDS;
                            }
                        }
                        else {
                            timestamp = timestamp * constants_2.MILLISECOND_TO_MICRO_SECONDS;
                        }
                        imageTensor3D = (0, image_utils_1.toImageTensor)(image);
                        imageSize = (0, image_utils_1.getImageSize)(imageTensor3D);
                        imageTensor4D = tf.expandDims(imageTensor3D, 0);
                        // Make sure we don't dispose the input image if it's already a tensor.
                        if (!(image instanceof tf.Tensor)) {
                            imageTensor3D.dispose();
                        }
                        poses = [];
                        if (!!this.multiPoseModel) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.estimateSinglePose(imageTensor4D, imageSize, timestamp)];
                    case 1:
                        poses =
                            _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.estimateMultiplePoses(imageTensor4D, imageSize, timestamp)];
                    case 3:
                        poses =
                            _a.sent();
                        _a.label = 4;
                    case 4:
                        // Convert keypoint coordinates from normalized coordinates to image space
                        // and add keypoint names.
                        for (poseIdx = 0; poseIdx < poses.length; ++poseIdx) {
                            for (keypointIdx = 0; keypointIdx < poses[poseIdx].keypoints.length; ++keypointIdx) {
                                poses[poseIdx].keypoints[keypointIdx].name =
                                    constants_1.COCO_KEYPOINTS[keypointIdx];
                                poses[poseIdx].keypoints[keypointIdx].y *= imageSize.height;
                                poses[poseIdx].keypoints[keypointIdx].x *= imageSize.width;
                            }
                        }
                        return [2 /*return*/, poses];
                }
            });
        });
    };
    /**
     * Runs a single-person keypoint model on an image, including the image
     * cropping and keypoint filtering logic.
     *
     * @param imageTensor4D A tf.Tensor4D that contains the input image.
     * @param imageSize: The width and height of the input image.
     * @param timestamp Image timestamp in microseconds.
     * @return An array of `Pose`s.
     */
    MoveNetDetector.prototype.estimateSinglePose = function (imageTensor4D, imageSize, timestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var croppedImage, pose, i, nextCropRegion;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cropRegion) {
                            this.cropRegion = (0, crop_utils_1.initCropRegion)(this.cropRegion == null, imageSize);
                        }
                        croppedImage = tf.tidy(function () {
                            // Crop region is a [batch, 4] size tensor.
                            var cropRegionTensor = tf.tensor2d([[
                                    _this.cropRegion.yMin, _this.cropRegion.xMin, _this.cropRegion.yMax,
                                    _this.cropRegion.xMax
                                ]]);
                            // The batch index that the crop should operate on. A [batch] size
                            // tensor.
                            var boxInd = tf.zeros([1], 'int32');
                            // Target size of each crop.
                            var cropSize = [_this.modelInputResolution.height, _this.modelInputResolution.width];
                            return tf.cast(tf.image.cropAndResize(imageTensor4D, cropRegionTensor, boxInd, cropSize, 'bilinear', 0), 'int32');
                        });
                        imageTensor4D.dispose();
                        return [4 /*yield*/, this.runSinglePersonPoseModel(croppedImage)];
                    case 1:
                        pose = _a.sent();
                        croppedImage.dispose();
                        if (pose.score < this.minPoseScore) {
                            this.reset();
                            return [2 /*return*/, []];
                        }
                        // Convert keypoints from crop coordinates to image coordinates.
                        for (i = 0; i < pose.keypoints.length; ++i) {
                            pose.keypoints[i].y =
                                this.cropRegion.yMin + pose.keypoints[i].y * this.cropRegion.height;
                            pose.keypoints[i].x =
                                this.cropRegion.xMin + pose.keypoints[i].x * this.cropRegion.width;
                        }
                        // Apply the sequential filter before estimating the cropping area to make
                        // it more stable.
                        if (timestamp != null && this.enableSmoothing) {
                            pose.keypoints = this.keypointFilter.apply(pose.keypoints, timestamp, 1 /* objectScale */);
                        }
                        nextCropRegion = (0, crop_utils_1.determineNextCropRegion)(this.cropRegion, pose.keypoints, this.keypointIndexByName, imageSize);
                        this.cropRegion = this.filterCropRegion(nextCropRegion);
                        return [2 /*return*/, [pose]];
                }
            });
        });
    };
    /**
     * Runs a multi-person keypoint model on an image, including image
     * preprocessing.
     *
     * @param imageTensor4D A tf.Tensor4D that contains the input image.
     * @param imageSize: The width and height of the input image.
     * @param timestamp Image timestamp in microseconds.
     * @return An array of `Pose`s.
     */
    MoveNetDetector.prototype.estimateMultiplePoses = function (imageTensor4D, imageSize, timestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var resizedImage, resizedWidth, resizedHeight, paddedImage, paddedWidth, paddedHeight, dimensionDivisor, paddedImageInt32, poses, i, j, i, trackIDs_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dimensionDivisor = 32;
                        if (imageSize.width > imageSize.height) {
                            resizedWidth = this.multiPoseMaxDimension;
                            resizedHeight = Math.round(this.multiPoseMaxDimension * imageSize.height / imageSize.width);
                            resizedImage =
                                tf.image.resizeBilinear(imageTensor4D, [resizedHeight, resizedWidth]);
                            paddedWidth = resizedWidth;
                            paddedHeight =
                                Math.ceil(resizedHeight / dimensionDivisor) * dimensionDivisor;
                            paddedImage = tf.pad(resizedImage, [[0, 0], [0, paddedHeight - resizedHeight], [0, 0], [0, 0]]);
                        }
                        else {
                            resizedWidth = Math.round(this.multiPoseMaxDimension * imageSize.width / imageSize.height);
                            resizedHeight = this.multiPoseMaxDimension;
                            resizedImage =
                                tf.image.resizeBilinear(imageTensor4D, [resizedHeight, resizedWidth]);
                            paddedWidth =
                                Math.ceil(resizedWidth / dimensionDivisor) * dimensionDivisor;
                            paddedHeight = resizedHeight;
                            paddedImage = tf.pad(resizedImage, [[0, 0], [0, 0], [0, paddedWidth - resizedWidth], [0, 0]]);
                        }
                        resizedImage.dispose();
                        imageTensor4D.dispose();
                        paddedImageInt32 = tf.cast(paddedImage, 'int32');
                        paddedImage.dispose();
                        return [4 /*yield*/, this.runMultiPersonPoseModel(paddedImageInt32)];
                    case 1:
                        poses = _a.sent();
                        paddedImageInt32.dispose();
                        poses = poses.filter(function (pose) { return pose.score >= _this.minPoseScore; });
                        // Convert keypoints from padded coordinates to normalized coordinates.
                        for (i = 0; i < poses.length; ++i) {
                            for (j = 0; j < poses[i].keypoints.length; ++j) {
                                poses[i].keypoints[j].y *= paddedHeight / resizedHeight;
                                poses[i].keypoints[j].x *= paddedWidth / resizedWidth;
                            }
                        }
                        if (this.enableTracking) {
                            this.tracker.apply(poses, timestamp);
                            if (this.enableSmoothing) {
                                for (i = 0; i < poses.length; ++i) {
                                    if (!this.keypointFilterMap.has(poses[i].id)) {
                                        this.keypointFilterMap.set(poses[i].id, new keypoints_one_euro_filter_1.KeypointsOneEuroFilter(constants_3.KEYPOINT_FILTER_CONFIG));
                                    }
                                    poses[i].keypoints =
                                        this.keypointFilterMap.get(poses[i].id)
                                            .apply(poses[i].keypoints, timestamp, 1 /* objectScale */);
                                }
                                trackIDs_1 = this.tracker.getTrackIDs();
                                this.keypointFilterMap.forEach(function (_, trackID) {
                                    if (!trackIDs_1.has(trackID)) {
                                        _this.keypointFilterMap.delete(trackID);
                                    }
                                });
                            }
                        }
                        return [2 /*return*/, poses];
                }
            });
        });
    };
    MoveNetDetector.prototype.filterCropRegion = function (newCropRegion) {
        if (!newCropRegion) {
            this.cropRegionFilterYMin.reset();
            this.cropRegionFilterXMin.reset();
            this.cropRegionFilterYMax.reset();
            this.cropRegionFilterXMax.reset();
            return null;
        }
        else {
            var filteredYMin = this.cropRegionFilterYMin.apply(newCropRegion.yMin);
            var filteredXMin = this.cropRegionFilterXMin.apply(newCropRegion.xMin);
            var filteredYMax = this.cropRegionFilterYMax.apply(newCropRegion.yMax);
            var filteredXMax = this.cropRegionFilterXMax.apply(newCropRegion.xMax);
            return {
                yMin: filteredYMin,
                xMin: filteredXMin,
                yMax: filteredYMax,
                xMax: filteredXMax,
                height: filteredYMax - filteredYMin,
                width: filteredXMax - filteredXMin
            };
        }
    };
    MoveNetDetector.prototype.dispose = function () {
        this.moveNetModel.dispose();
    };
    MoveNetDetector.prototype.reset = function () {
        this.cropRegion = null;
        this.resetFilters();
    };
    MoveNetDetector.prototype.resetFilters = function () {
        this.keypointFilter.reset();
        this.cropRegionFilterYMin.reset();
        this.cropRegionFilterXMin.reset();
        this.cropRegionFilterYMax.reset();
        this.cropRegionFilterXMax.reset();
    };
    return MoveNetDetector;
}());
/**
 * Loads the MoveNet model instance from a checkpoint. The model to be loaded
 * is configurable using the config dictionary `ModelConfig`. Please find more
 * details in the documentation of the `ModelConfig`.
 *
 * @param config `ModelConfig` dictionary that contains parameters for
 * the MoveNet loading process. Please find more details of each parameter
 * in the documentation of the `ModelConfig` interface.
 */
function load(modelConfig) {
    if (modelConfig === void 0) { modelConfig = constants_3.MOVENET_CONFIG; }
    return __awaiter(this, void 0, void 0, function () {
        var config, model, fromTFHub, modelUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = (0, detector_utils_1.validateModelConfig)(modelConfig);
                    fromTFHub = true;
                    if (!!!config.modelUrl) return [3 /*break*/, 2];
                    fromTFHub = typeof config.modelUrl === 'string' &&
                        config.modelUrl.indexOf('https://tfhub.dev') > -1;
                    return [4 /*yield*/, tfc.loadGraphModel(config.modelUrl, { fromTFHub: fromTFHub })];
                case 1:
                    model = _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    modelUrl = void 0;
                    if (config.modelType === constants_3.SINGLEPOSE_LIGHTNING) {
                        modelUrl = constants_3.MOVENET_SINGLEPOSE_LIGHTNING_URL;
                    }
                    else if (config.modelType === constants_3.SINGLEPOSE_THUNDER) {
                        modelUrl = constants_3.MOVENET_SINGLEPOSE_THUNDER_URL;
                    }
                    else if (config.modelType === constants_3.MULTIPOSE_LIGHTNING) {
                        modelUrl = constants_3.MOVENET_MULTIPOSE_LIGHTNING_URL;
                    }
                    return [4 /*yield*/, tfc.loadGraphModel(modelUrl, { fromTFHub: fromTFHub })];
                case 3:
                    model = _a.sent();
                    _a.label = 4;
                case 4:
                    if (tf.getBackend() === 'webgl') {
                        // MoveNet has a top-k op that runs faster on GPU for the size of our last
                        // dimension (6400). There are three checks that could make the top-k op run
                        // on CPU (see
                        // https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-webgl/src/kernels/TopK.ts)
                        //
                        // 1. All input shapes < 128
                        // 2. lastDim < TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD
                        // 3. k > TOPK_K_CPU_HANDOFF_THRESHOLD
                        //
                        // In our case, setting TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD = 0 will
                        // will disable the CPU forwarding.
                        tf.env().set('TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD', 0);
                    }
                    return [2 /*return*/, new MoveNetDetector(model, config)];
            }
        });
    });
}
exports.load = load;

},{"@tensorflow/tfjs-converter":"node_modules/@tensorflow/tfjs-converter/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../calculators/bounding_box_tracker":"node_modules/@tensorflow-models/pose-detection/calculators/bounding_box_tracker.js","../calculators/keypoint_tracker":"node_modules/@tensorflow-models/pose-detection/calculators/keypoint_tracker.js","../calculators/types":"node_modules/@tensorflow-models/pose-detection/calculators/types.js","../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../shared/calculators/constants":"node_modules/@tensorflow-models/pose-detection/shared/calculators/constants.js","../shared/calculators/image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js","../shared/calculators/is_video":"node_modules/@tensorflow-models/pose-detection/shared/calculators/is_video.js","../shared/filters/keypoints_one_euro_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/keypoints_one_euro_filter.js","../shared/filters/low_pass_filter":"node_modules/@tensorflow-models/pose-detection/shared/filters/low_pass_filter.js","../types":"node_modules/@tensorflow-models/pose-detection/types.js","../util":"node_modules/@tensorflow-models/pose-detection/util.js","./constants":"node_modules/@tensorflow-models/pose-detection/movenet/constants.js","./crop_utils":"node_modules/@tensorflow-models/pose-detection/movenet/crop_utils.js","./detector_utils":"node_modules/@tensorflow-models/pose-detection/movenet/detector_utils.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/constants.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSE_CHAIN = exports.NUM_KEYPOINTS = exports.K_LOCAL_MAXIMUM_RADIUS = exports.RESNET_MEAN = exports.MULTI_PERSON_ESTIMATION_CONFIG = exports.SINGLE_PERSON_ESTIMATION_CONFIG = exports.VALID_QUANT_BYTES = exports.VALID_MULTIPLIER = exports.VALID_OUTPUT_STRIDES = exports.VALID_STRIDE = exports.VALID_ARCHITECTURE = exports.MOBILENET_V1_CONFIG = void 0;
// The default configuration for loading MobileNetV1 based PoseNet.
//
// (And for references, the default configuration for loading ResNet
// based PoseNet is also included).
//
// ```
// const RESNET_CONFIG = {
//   architecture: 'ResNet50',
//   outputStride: 32,
//   quantBytes: 2,
// } as ModelConfig;
// ```
exports.MOBILENET_V1_CONFIG = {
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.75,
    inputResolution: { height: 257, width: 257 }
};
exports.VALID_ARCHITECTURE = ['MobileNetV1', 'ResNet50'];
exports.VALID_STRIDE = {
    'MobileNetV1': [8, 16],
    'ResNet50': [16]
};
exports.VALID_OUTPUT_STRIDES = [8, 16, 32];
exports.VALID_MULTIPLIER = {
    'MobileNetV1': [0.50, 0.75, 1.0],
    'ResNet50': [1.0]
};
exports.VALID_QUANT_BYTES = [1, 2, 4];
exports.SINGLE_PERSON_ESTIMATION_CONFIG = {
    maxPoses: 1,
    flipHorizontal: false
};
exports.MULTI_PERSON_ESTIMATION_CONFIG = {
    maxPoses: 5,
    flipHorizontal: false,
    scoreThreshold: 0.5,
    nmsRadius: 20
};
exports.RESNET_MEAN = [-123.15, -115.90, -103.06];
// A point (y, x) is considered as root part candidate if its score is a
// maximum in a window |y - y'| <= kLocalMaximumRadius, |x - x'| <=
// kLocalMaximumRadius.
exports.K_LOCAL_MAXIMUM_RADIUS = 1;
exports.NUM_KEYPOINTS = 17;
/*
 * Define the skeleton. This defines the parent->child relationships of our
 * tree. Arbitrarily this defines the nose as the root of the tree, however
 * since we will infer the displacement for both parent->child and
 * child->parent, we can define the tree root as any node.
 */
exports.POSE_CHAIN = [
    ['nose', 'left_eye'], ['left_eye', 'left_ear'], ['nose', 'right_eye'],
    ['right_eye', 'right_ear'], ['nose', 'left_shoulder'],
    ['left_shoulder', 'left_elbow'], ['left_elbow', 'left_wrist'],
    ['left_shoulder', 'left_hip'], ['left_hip', 'left_knee'],
    ['left_knee', 'left_ankle'], ['nose', 'right_shoulder'],
    ['right_shoulder', 'right_elbow'], ['right_elbow', 'right_wrist'],
    ['right_shoulder', 'right_hip'], ['right_hip', 'right_knee'],
    ['right_knee', 'right_ankle']
];

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/max_heap.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = void 0;
// algorithm based on Coursera Lecture from Algorithms, Part 1:
// https://www.coursera.org/learn/algorithms-part1/lecture/ZjoSM/heapsort
function half(k) {
    return Math.floor(k / 2);
}
var MaxHeap = /** @class */ (function () {
    function MaxHeap(maxSize, getElementValue) {
        this.priorityQueue = new Array(maxSize);
        this.numberOfElements = -1;
        this.getElementValue = getElementValue;
    }
    MaxHeap.prototype.enqueue = function (x) {
        this.priorityQueue[++this.numberOfElements] = x;
        this.swim(this.numberOfElements);
    };
    MaxHeap.prototype.dequeue = function () {
        var max = this.priorityQueue[0];
        this.exchange(0, this.numberOfElements--);
        this.sink(0);
        this.priorityQueue[this.numberOfElements + 1] = null;
        return max;
    };
    MaxHeap.prototype.empty = function () {
        return this.numberOfElements === -1;
    };
    MaxHeap.prototype.size = function () {
        return this.numberOfElements + 1;
    };
    MaxHeap.prototype.all = function () {
        return this.priorityQueue.slice(0, this.numberOfElements + 1);
    };
    MaxHeap.prototype.max = function () {
        return this.priorityQueue[0];
    };
    MaxHeap.prototype.swim = function (k) {
        while (k > 0 && this.less(half(k), k)) {
            this.exchange(k, half(k));
            k = half(k);
        }
    };
    MaxHeap.prototype.sink = function (k) {
        while (2 * k <= this.numberOfElements) {
            var j = 2 * k;
            if (j < this.numberOfElements && this.less(j, j + 1)) {
                j++;
            }
            if (!this.less(k, j)) {
                break;
            }
            this.exchange(k, j);
            k = j;
        }
    };
    MaxHeap.prototype.getValueAt = function (i) {
        return this.getElementValue(this.priorityQueue[i]);
    };
    MaxHeap.prototype.less = function (i, j) {
        return this.getValueAt(i) < this.getValueAt(j);
    };
    MaxHeap.prototype.exchange = function (i, j) {
        var t = this.priorityQueue[i];
        this.priorityQueue[i] = this.priorityQueue[j];
        this.priorityQueue[j] = t;
    };
    return MaxHeap;
}());
exports.MaxHeap = MaxHeap;

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/build_part_with_score_queue.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPartWithScoreQueue = void 0;
var max_heap_1 = require("./max_heap");
function scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores) {
    var _a = scores.shape, height = _a[0], width = _a[1];
    var localMaximum = true;
    var yStart = Math.max(heatmapY - localMaximumRadius, 0);
    var yEnd = Math.min(heatmapY + localMaximumRadius + 1, height);
    for (var yCurrent = yStart; yCurrent < yEnd; ++yCurrent) {
        var xStart = Math.max(heatmapX - localMaximumRadius, 0);
        var xEnd = Math.min(heatmapX + localMaximumRadius + 1, width);
        for (var xCurrent = xStart; xCurrent < xEnd; ++xCurrent) {
            if (scores.get(yCurrent, xCurrent, keypointId) > score) {
                localMaximum = false;
                break;
            }
        }
        if (!localMaximum) {
            break;
        }
    }
    return localMaximum;
}
/**
 * Builds a priority queue with part candidate positions for a specific image in
 * the batch. For this we find all local maxima in the score maps with score
 * values above a threshold. We create a single priority queue across all parts.
 */
function buildPartWithScoreQueue(scoreThreshold, localMaximumRadius, scores) {
    var _a = scores.shape, height = _a[0], width = _a[1], numKeypoints = _a[2];
    var queue = new max_heap_1.MaxHeap(height * width * numKeypoints, function (_a) {
        var score = _a.score;
        return score;
    });
    for (var heatmapY = 0; heatmapY < height; ++heatmapY) {
        for (var heatmapX = 0; heatmapX < width; ++heatmapX) {
            for (var keypointId = 0; keypointId < numKeypoints; ++keypointId) {
                var score = scores.get(heatmapY, heatmapX, keypointId);
                // Only consider parts with score greater or equal to threshold as
                // root candidates.
                if (score < scoreThreshold) {
                    continue;
                }
                // Only consider keypoints whose score is maximum in a local window.
                if (scoreIsMaximumInLocalWindow(keypointId, score, heatmapY, heatmapX, localMaximumRadius, scores)) {
                    queue.enqueue({ score: score, part: { heatmapY: heatmapY, heatmapX: heatmapX, id: keypointId } });
                }
            }
        }
    }
    return queue;
}
exports.buildPartWithScoreQueue = buildPartWithScoreQueue;

},{"./max_heap":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/max_heap.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_multiple_poses_util.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstanceScore = exports.decodePose = exports.addVectors = exports.withinNmsRadiusOfCorrespondingPoint = exports.squaredDistance = exports.getImageCoords = exports.getOffsetPoint = exports.toTensorBuffers3D = void 0;
var constants_1 = require("../../constants");
var constants_2 = require("../constants");
function toTensorBuffers3D(tensors) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.all(tensors.map(function (tensor) { return tensor.buffer(); }))];
        });
    });
}
exports.toTensorBuffers3D = toTensorBuffers3D;
function getOffsetPoint(y, x, keypoint, offsets) {
    return {
        y: offsets.get(y, x, keypoint),
        x: offsets.get(y, x, keypoint + constants_2.NUM_KEYPOINTS)
    };
}
exports.getOffsetPoint = getOffsetPoint;
function getImageCoords(part, outputStride, offsets) {
    var heatmapY = part.heatmapY, heatmapX = part.heatmapX, keypoint = part.id;
    var _a = getOffsetPoint(heatmapY, heatmapX, keypoint, offsets), y = _a.y, x = _a.x;
    return {
        x: part.heatmapX * outputStride + x,
        y: part.heatmapY * outputStride + y
    };
}
exports.getImageCoords = getImageCoords;
function squaredDistance(y1, x1, y2, x2) {
    var dy = y2 - y1;
    var dx = x2 - x1;
    return dy * dy + dx * dx;
}
exports.squaredDistance = squaredDistance;
function withinNmsRadiusOfCorrespondingPoint(poses, squaredNmsRadius, _a, keypointId) {
    var x = _a.x, y = _a.y;
    return poses.some(function (_a) {
        var keypoints = _a.keypoints;
        return squaredDistance(y, x, keypoints[keypointId].y, keypoints[keypointId].x) <=
            squaredNmsRadius;
    });
}
exports.withinNmsRadiusOfCorrespondingPoint = withinNmsRadiusOfCorrespondingPoint;
var partIds = 
// tslint:disable-next-line: no-unnecessary-type-assertion
constants_1.COCO_KEYPOINTS.reduce(function (result, jointName, i) {
    result[jointName] = i;
    return result;
}, {});
var parentChildrenTuples = constants_2.POSE_CHAIN.map(function (_a) {
    var parentJoinName = _a[0], childJoinName = _a[1];
    return ([partIds[parentJoinName], partIds[childJoinName]]);
});
var parentToChildEdges = parentChildrenTuples.map(function (_a) {
    var childJointId = _a[1];
    return childJointId;
});
var childToParentEdges = parentChildrenTuples.map(function (_a) {
    var parentJointId = _a[0];
    return parentJointId;
});
function clamp(a, min, max) {
    if (a < min) {
        return min;
    }
    if (a > max) {
        return max;
    }
    return a;
}
function getStridedIndexNearPoint(point, outputStride, height, width) {
    return {
        y: clamp(Math.round(point.y / outputStride), 0, height - 1),
        x: clamp(Math.round(point.x / outputStride), 0, width - 1)
    };
}
function getDisplacement(edgeId, point, displacements) {
    var numEdges = displacements.shape[2] / 2;
    return {
        y: displacements.get(point.y, point.x, edgeId),
        x: displacements.get(point.y, point.x, numEdges + edgeId)
    };
}
function addVectors(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}
exports.addVectors = addVectors;
/**
 * We get a new keypoint along the `edgeId` for the pose instance, assuming
 * that the position of the `idSource` part is already known. For this, we
 * follow the displacement vector from the source to target part (stored in
 * the `i`-t channel of the displacement tensor). The displaced keypoint
 * vector is refined using the offset vector by `offsetRefineStep` times.
 */
function traverseToTargetKeypoint(edgeId, sourceKeypoint, targetKeypointId, scoresBuffer, offsets, outputStride, displacements, offsetRefineStep) {
    if (offsetRefineStep === void 0) { offsetRefineStep = 2; }
    var _a = scoresBuffer.shape, height = _a[0], width = _a[1];
    var point = { y: sourceKeypoint.y, x: sourceKeypoint.x };
    // Nearest neighbor interpolation for the source->target displacements.
    var sourceKeypointIndices = getStridedIndexNearPoint(point, outputStride, height, width);
    var displacement = getDisplacement(edgeId, sourceKeypointIndices, displacements);
    var displacedPoint = addVectors(point, displacement);
    var targetKeypoint = displacedPoint;
    for (var i = 0; i < offsetRefineStep; i++) {
        var targetKeypointIndices = getStridedIndexNearPoint(targetKeypoint, outputStride, height, width);
        var offsetPoint = getOffsetPoint(targetKeypointIndices.y, targetKeypointIndices.x, targetKeypointId, offsets);
        targetKeypoint = addVectors({
            x: targetKeypointIndices.x * outputStride,
            y: targetKeypointIndices.y * outputStride
        }, { x: offsetPoint.x, y: offsetPoint.y });
    }
    var targetKeyPointIndices = getStridedIndexNearPoint(targetKeypoint, outputStride, height, width);
    var score = scoresBuffer.get(targetKeyPointIndices.y, targetKeyPointIndices.x, targetKeypointId);
    return {
        y: targetKeypoint.y,
        x: targetKeypoint.x,
        name: constants_1.COCO_KEYPOINTS[targetKeypointId],
        score: score
    };
}
/**
 * Follows the displacement fields to decode the full pose of the object
 * instance given the position of a part that acts as root.
 *
 * @return An array of decoded keypoints and their scores for a single pose
 */
function decodePose(root, scores, offsets, outputStride, displacementsFwd, displacementsBwd) {
    var numParts = scores.shape[2];
    var numEdges = parentToChildEdges.length;
    var instanceKeypoints = new Array(numParts);
    // Start a new detection instance at the position of the root.
    var rootPart = root.part, rootScore = root.score;
    var rootPoint = getImageCoords(rootPart, outputStride, offsets);
    instanceKeypoints[rootPart.id] = {
        score: rootScore,
        name: constants_1.COCO_KEYPOINTS[rootPart.id],
        y: rootPoint.y,
        x: rootPoint.x
    };
    // Decode the part positions upwards in the tree, following the backward
    // displacements.
    for (var edge = numEdges - 1; edge >= 0; --edge) {
        var sourceKeypointId = parentToChildEdges[edge];
        var targetKeypointId = childToParentEdges[edge];
        if (instanceKeypoints[sourceKeypointId] &&
            !instanceKeypoints[targetKeypointId]) {
            instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsBwd);
        }
    }
    // Decode the part positions downwards in the tree, following the forward
    // displacements.
    for (var edge = 0; edge < numEdges; ++edge) {
        var sourceKeypointId = childToParentEdges[edge];
        var targetKeypointId = parentToChildEdges[edge];
        if (instanceKeypoints[sourceKeypointId] &&
            !instanceKeypoints[targetKeypointId]) {
            instanceKeypoints[targetKeypointId] = traverseToTargetKeypoint(edge, instanceKeypoints[sourceKeypointId], targetKeypointId, scores, offsets, outputStride, displacementsFwd);
        }
    }
    return instanceKeypoints;
}
exports.decodePose = decodePose;
/* Score the newly proposed object instance without taking into account
 * the scores of the parts that overlap with any previously detected
 * instance.
 */
function getInstanceScore(existingPoses, squaredNmsRadius, instanceKeypoints) {
    var notOverlappedKeypointScores = instanceKeypoints.reduce(function (result, _a, keypointId) {
        var y = _a.y, x = _a.x, score = _a.score;
        if (!withinNmsRadiusOfCorrespondingPoint(existingPoses, squaredNmsRadius, { y: y, x: x }, keypointId)) {
            result += score;
        }
        return result;
    }, 0.0);
    return notOverlappedKeypointScores /= instanceKeypoints.length;
}
exports.getInstanceScore = getInstanceScore;

},{"../../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../constants":"node_modules/@tensorflow-models/pose-detection/posenet/constants.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_multiple_poses.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMultiplePoses = void 0;
var constants_1 = require("../constants");
var build_part_with_score_queue_1 = require("./build_part_with_score_queue");
var decode_multiple_poses_util_1 = require("./decode_multiple_poses_util");
/**
 * Detects multiple poses and finds their parts from part scores and
 * displacement vectors. It returns up to `maxDetections` object instance
 * detections in decreasing root score order. It works as follows: We first
 * create a priority queue with local part score maxima above
 * `scoreThreshold`, considering all parts at the same time. Then we
 * iteratively pull the top  element of the queue (in decreasing score order)
 * and treat it as a root candidate for a new object instance. To avoid
 * duplicate detections, we reject the root candidate if it is within a disk
 * of `nmsRadius` pixels from the corresponding part of a previously detected
 * instance, which is a form of part-based non-maximum suppression (NMS). If
 * the root candidate passes the NMS check, we start a new object instance
 * detection, treating the corresponding part as root and finding the
 * positions of the remaining parts by following the displacement vectors
 * along the tree-structured part graph. We assign to the newly detected
 * instance a score equal to the sum of scores of its parts which have not
 * been claimed by a previous instance (i.e., those at least `nmsRadius`
 * pixels away from the corresponding part of all previously detected
 * instances), divided by the total number of parts `numParts`.
 *
 * @param heatmapScores 3-D tensor with shape `[height, width, numParts]`.
 * The value of heatmapScores[y, x, k]` is the score of placing the `k`-th
 * object part at position `(y, x)`.
 *
 * @param offsets 3-D tensor with shape `[height, width, numParts * 2]`.
 * The value of [offsets[y, x, k], offsets[y, x, k + numParts]]` is the
 * short range offset vector of the `k`-th  object part at heatmap
 * position `(y, x)`.
 *
 * @param displacementsFwd 3-D tensor of shape
 * `[height, width, 2 * num_edges]`, where `num_edges = num_parts - 1` is the
 * number of edges (parent-child pairs) in the tree. It contains the forward
 * displacements between consecutive part from the root towards the leaves.
 *
 * @param displacementsBwd 3-D tensor of shape
 * `[height, width, 2 * num_edges]`, where `num_edges = num_parts - 1` is the
 * number of edges (parent-child pairs) in the tree. It contains the backward
 * displacements between consecutive part from the root towards the leaves.
 *
 * @param outputStride The output stride that was used when feed-forwarding
 * through the PoseNet model.  Must be 32, 16, or 8.
 *
 * @param maxPoseDetections Maximum number of returned instance detections per
 * image.
 *
 * @param scoreThreshold Only return instance detections that have root part
 * score greater or equal to this value. Defaults to 0.5.
 *
 * @param nmsRadius Non-maximum suppression part distance. It needs to be
 * strictly positive. Two parts suppress each other if they are less than
 * `nmsRadius` pixels away. Defaults to 20.
 *
 * @return An array of poses and their scores, each containing keypoints and
 * the corresponding keypoint scores.
 */
function decodeMultiplePoses(heatmapScores, offsets, displacementFwd, displacementBwd, outputStride, maxPoseDetections, scoreThreshold, nmsRadius) {
    if (scoreThreshold === void 0) { scoreThreshold = 0.5; }
    if (nmsRadius === void 0) { nmsRadius = 20; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, scoresBuffer, offsetsBuffer, displacementsFwdBuffer, displacementsBwdBuffer, poses, queue, squaredNmsRadius, root, rootImageCoords, keypoints, score;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, decode_multiple_poses_util_1.toTensorBuffers3D)([heatmapScores, offsets, displacementFwd, displacementBwd])];
                case 1:
                    _a = _b.sent(), scoresBuffer = _a[0], offsetsBuffer = _a[1], displacementsFwdBuffer = _a[2], displacementsBwdBuffer = _a[3];
                    poses = [];
                    queue = (0, build_part_with_score_queue_1.buildPartWithScoreQueue)(scoreThreshold, constants_1.K_LOCAL_MAXIMUM_RADIUS, scoresBuffer);
                    squaredNmsRadius = nmsRadius * nmsRadius;
                    // Generate at most maxDetections object instances per image in
                    // decreasing root part score order.
                    while (poses.length < maxPoseDetections && !queue.empty()) {
                        root = queue.dequeue();
                        rootImageCoords = (0, decode_multiple_poses_util_1.getImageCoords)(root.part, outputStride, offsetsBuffer);
                        if ((0, decode_multiple_poses_util_1.withinNmsRadiusOfCorrespondingPoint)(poses, squaredNmsRadius, rootImageCoords, root.part.id)) {
                            continue;
                        }
                        keypoints = (0, decode_multiple_poses_util_1.decodePose)(root, scoresBuffer, offsetsBuffer, outputStride, displacementsFwdBuffer, displacementsBwdBuffer);
                        score = (0, decode_multiple_poses_util_1.getInstanceScore)(poses, squaredNmsRadius, keypoints);
                        poses.push({ keypoints: keypoints, score: score });
                    }
                    return [2 /*return*/, poses];
            }
        });
    });
}
exports.decodeMultiplePoses = decodeMultiplePoses;

},{"../constants":"node_modules/@tensorflow-models/pose-detection/posenet/constants.js","./build_part_with_score_queue":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/build_part_with_score_queue.js","./decode_multiple_poses_util":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_multiple_poses_util.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/ops/webgpu_util.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainHeaderString = void 0;
function getMainHeaderString() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var snippet;
    switch (params.length) {
        case 0:
            snippet = "fn main() ";
            break;
        case 1:
            snippet = "fn main(".concat(params[0], " : i32)");
            break;
        default:
            throw Error('Unreachable');
    }
    return snippet;
}
exports.getMainHeaderString = getMainHeaderString;

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_points_confidence_webgpu.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointsConfidenceWebGPU = void 0;
var tfwebgpu = require("@tensorflow/tfjs-backend-webgpu");
var tf = require("@tensorflow/tfjs-core");
var webgpu_util_1 = require("./webgpu_util");
var GetpointsConfidenceProgram = /** @class */ (function () {
    function GetpointsConfidenceProgram(bShape) {
        // A is heatmapScores, B is heatmapValues.
        this.variableNames = ['A', 'B'];
        this.size = true;
        var workgroupSizeX = 32;
        this.workgroupSize = [workgroupSizeX, 1, 1];
        this.outputShape = [bShape[0], 1];
        this.dispatchLayout =
            tfwebgpu.webgpu_util.flatDispatchLayout(this.outputShape);
        this.dispatch = tfwebgpu.webgpu_util.computeDispatch(this.dispatchLayout, this.outputShape, this.workgroupSize);
        this.shaderKey = 'getpointsConfidenceOp';
    }
    GetpointsConfidenceProgram.prototype.getUserCode = function () {
        return "\n        ".concat((0, webgpu_util_1.getMainHeaderString)('index'), " {\n          if (index < uniforms.size) {\n            let y = B[index * 2];\n            let x = B[index * 2 + 1];\n            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;\n            result[index] = A[outIndex];\n          }\n        }\n        ");
    };
    return GetpointsConfidenceProgram;
}());
function getPointsConfidenceWebGPU(a, b) {
    var webgpuBackend = tf.backend();
    var program = new GetpointsConfidenceProgram(b.shape);
    var outInfo = webgpuBackend.runWebGPUProgram(program, [a, b], 'float32');
    var value = tf.engine().makeTensorFromTensorInfo(outInfo);
    return value;
}
exports.getPointsConfidenceWebGPU = getPointsConfidenceWebGPU;

},{"@tensorflow/tfjs-backend-webgpu":"node_modules/@tensorflow/tfjs-backend-webgpu/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./webgpu_util":"node_modules/@tensorflow-models/pose-detection/posenet/ops/webgpu_util.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_points_confidence.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointsConfidenceGPU = void 0;
var tfwebgpu = require("@tensorflow/tfjs-backend-webgpu");
var tf = require("@tensorflow/tfjs-core");
var get_points_confidence_webgpu_1 = require("./get_points_confidence_webgpu");
function getPointsConfidenceGPU(a, b) {
    if (tf.backend() instanceof tfwebgpu.WebGPUBackend) {
        return (0, get_points_confidence_webgpu_1.getPointsConfidenceWebGPU)(a, b);
    }
    throw new Error('getPointsConfidenceWebGPU is not supported in this backend!');
}
exports.getPointsConfidenceGPU = getPointsConfidenceGPU;

},{"@tensorflow/tfjs-backend-webgpu":"node_modules/@tensorflow/tfjs-backend-webgpu/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./get_points_confidence_webgpu":"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_points_confidence_webgpu.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_offset_vectors_webgpu.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffsetVectorsWebGPU = void 0;
var tfwebgpu = require("@tensorflow/tfjs-backend-webgpu");
var tf = require("@tensorflow/tfjs-core");
var webgpu_util_1 = require("./webgpu_util");
var GetOffsetVectorsProgram = /** @class */ (function () {
    function GetOffsetVectorsProgram(outputShape) {
        // A is heatmapScores, B is heatMapCoords.
        this.variableNames = ['A', 'B'];
        this.size = true;
        this.supportedLastDimension = 2;
        // Only 2d tensor whose last dimension is 2 is supported.
        if (outputShape.length !== 2 ||
            outputShape[1] !== this.supportedLastDimension) {
            throw new Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension, "], but current shape is ").concat(outputShape));
        }
        var workgroupSizeX = 32;
        this.workgroupSize = [workgroupSizeX, 1, 1];
        this.outputShape = outputShape;
        var computeDispatchInfo = [outputShape[0], 1];
        this.dispatchLayout =
            tfwebgpu.webgpu_util.flatDispatchLayout(computeDispatchInfo);
        this.dispatch = tfwebgpu.webgpu_util.computeDispatch(this.dispatchLayout, computeDispatchInfo, this.workgroupSize);
        this.shaderKey = 'GetOffsetVectors';
    }
    GetOffsetVectorsProgram.prototype.getUserCode = function () {
        return "\n    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {\n      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;\n      let outIndexX = outIndexY + uniforms.bShape.z;\n      let outY = i32(B[outIndexY]);\n      let outX = i32(B[outIndexX]);\n      return vec2<i32>(outY, outX);\n    }\n\n    ".concat((0, webgpu_util_1.getMainHeaderString)('index'), " {\n      if (index < uniforms.size) {\n        let indexY = index * ").concat(this.supportedLastDimension, ";\n        let indexX = indexY + 1;\n        let heatmapY = A[indexY];\n        let heatmapX = A[indexX];\n        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);\n        result[indexY] = f32(out[0]);\n        result[indexX] = f32(out[1]);\n      }\n    }\n    ");
    };
    return GetOffsetVectorsProgram;
}());
function getOffsetVectorsWebGPU(a, b) {
    var webgpuBackend = tf.backend();
    var program = new GetOffsetVectorsProgram(a.shape);
    var outInfo = webgpuBackend.runWebGPUProgram(program, [a, b], 'float32');
    var value = tf.engine().makeTensorFromTensorInfo(outInfo);
    return value;
}
exports.getOffsetVectorsWebGPU = getOffsetVectorsWebGPU;

},{"@tensorflow/tfjs-backend-webgpu":"node_modules/@tensorflow/tfjs-backend-webgpu/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./webgpu_util":"node_modules/@tensorflow-models/pose-detection/posenet/ops/webgpu_util.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_offset_vectors.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffsetVectorsGPU = void 0;
var tfwebgpu = require("@tensorflow/tfjs-backend-webgpu");
var tf = require("@tensorflow/tfjs-core");
var get_offset_vectors_webgpu_1 = require("./get_offset_vectors_webgpu");
function getOffsetVectorsGPU(a, b) {
    if (tf.backend() instanceof tfwebgpu.WebGPUBackend) {
        return (0, get_offset_vectors_webgpu_1.getOffsetVectorsWebGPU)(a, b);
    }
    throw new Error('getOffsetVectorsGPU is not supported in this backend!');
}
exports.getOffsetVectorsGPU = getOffsetVectorsGPU;

},{"@tensorflow/tfjs-backend-webgpu":"node_modules/@tensorflow/tfjs-backend-webgpu/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./get_offset_vectors_webgpu":"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_offset_vectors_webgpu.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_single_pose_util.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffsetPointsGPU = exports.getOffsetVectors = exports.getOffsetPoints = exports.getPointsConfidence = exports.argmax2d = void 0;
var tf = require("@tensorflow/tfjs-core");
var constants_1 = require("../../constants");
var get_offset_vectors_1 = require("../ops/get_offset_vectors");
function mod(a, b) {
    return tf.tidy(function () {
        var floored = tf.div(a, tf.scalar(b, 'int32'));
        return tf.sub(a, tf.mul(floored, tf.scalar(b, 'int32')));
    });
}
function argmax2d(inputs) {
    var _a = inputs.shape, height = _a[0], width = _a[1], depth = _a[2];
    return tf.tidy(function () {
        var reshaped = tf.reshape(inputs, [height * width, depth]);
        var coords = tf.argMax(reshaped, 0);
        var yCoords = tf.expandDims(tf.div(coords, tf.scalar(width, 'int32')), 1);
        var xCoords = tf.expandDims(mod(coords, width), 1);
        return tf.concat([yCoords, xCoords], 1);
    });
}
exports.argmax2d = argmax2d;
function getPointsConfidence(heatmapScores, heatMapCoords) {
    var numKeypoints = heatMapCoords.shape[0];
    var result = new Float32Array(numKeypoints);
    for (var keypoint = 0; keypoint < numKeypoints; keypoint++) {
        var y = heatMapCoords.get(keypoint, 0);
        var x = heatMapCoords.get(keypoint, 1);
        result[keypoint] = heatmapScores.get(y, x, keypoint);
    }
    return result;
}
exports.getPointsConfidence = getPointsConfidence;
function getOffsetPoints(heatMapCoordsBuffer, outputStride, offsetsBuffer) {
    return tf.tidy(function () {
        var offsetVectors = getOffsetVectors(heatMapCoordsBuffer, offsetsBuffer);
        return tf.add(tf.cast(tf.mul(heatMapCoordsBuffer.toTensor(), tf.scalar(outputStride, 'int32')), 'float32'), offsetVectors);
    });
}
exports.getOffsetPoints = getOffsetPoints;
function getOffsetVectors(heatMapCoordsBuffer, offsetsBuffer) {
    var result = [];
    for (var keypoint = 0; keypoint < constants_1.COCO_KEYPOINTS.length; keypoint++) {
        var heatmapY = heatMapCoordsBuffer.get(keypoint, 0).valueOf();
        var heatmapX = heatMapCoordsBuffer.get(keypoint, 1).valueOf();
        var _a = getOffsetPoint(heatmapY, heatmapX, keypoint, offsetsBuffer), x = _a.x, y = _a.y;
        result.push(y);
        result.push(x);
    }
    return tf.tensor2d(result, [constants_1.COCO_KEYPOINTS.length, 2]);
}
exports.getOffsetVectors = getOffsetVectors;
function getOffsetPoint(y, x, keypoint, offsetsBuffer) {
    return {
        y: offsetsBuffer.get(y, x, keypoint),
        x: offsetsBuffer.get(y, x, keypoint + constants_1.COCO_KEYPOINTS.length)
    };
}
function getOffsetPointsGPU(heatMapCoordsBuffer, outputStride, offsetsBuffer) {
    return tf.tidy(function () {
        var offsetVectors = (0, get_offset_vectors_1.getOffsetVectorsGPU)(heatMapCoordsBuffer, offsetsBuffer);
        return tf.add(tf.cast(tf.mul(heatMapCoordsBuffer, tf.scalar(outputStride, 'int32')), 'float32'), offsetVectors);
    });
}
exports.getOffsetPointsGPU = getOffsetPointsGPU;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../ops/get_offset_vectors":"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_offset_vectors.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_single_pose.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSinglePoseGPU = exports.decodeSinglePose = void 0;
var constants_1 = require("../../constants");
var get_points_confidence_1 = require("../ops/get_points_confidence");
var decode_single_pose_util_1 = require("./decode_single_pose_util");
/**
 * Detects a single pose and finds its parts from part scores and offset
 * vectors. It returns a single pose detection. It works as follows:
 * argmax2d is done on the scores to get the y and x index in the heatmap
 * with the highest score for each part, which is essentially where the
 * part is most likely to exist. This produces a tensor of size 17x2, with
 * each row being the y and x index in the heatmap for each keypoint.
 * The offset vector for each part is retrieved by getting the
 * y and x from the offsets corresponding to the y and x index in the
 * heatmap for that part. This produces a tensor of size 17x2, with each
 * row being the offset vector for the corresponding keypoint.
 * To get the keypoint, each part’s heatmap y and x are multiplied
 * by the output stride then added to their corresponding offset vector,
 * which is in the same scale as the original image.
 *
 * @param heatmapScores 3-D tensor with shape `[height, width, numParts]`.
 * The value of heatmapScores[y, x, k]` is the score of placing the `k`-th
 * object part at position `(y, x)`.
 *
 * @param offsets 3-D tensor with shape `[height, width, numParts * 2]`.
 * The value of [offsets[y, x, k], offsets[y, x, k + numParts]]` is the
 * short range offset vector of the `k`-th  object part at heatmap
 * position `(y, x)`.
 *
 * @param outputStride The output stride that was used when feed-forwarding
 * through the PoseNet model.  Must be 32, 16, or 8.
 *
 * @return A promise that resolves with single pose with a confidence score,
 * which contains an array of keypoints indexed by part id, each with a score
 * and position.
 */
function decodeSinglePose(heatmapScores, offsets, outputStride) {
    return __awaiter(this, void 0, void 0, function () {
        var totalScore, heatmapValues, allTensorBuffers, scoresBuffer, offsetsBuffer, heatmapValuesBuffer, offsetPoints, offsetPointsBuffer, keypointConfidence, keypoints;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalScore = 0.0;
                    heatmapValues = (0, decode_single_pose_util_1.argmax2d)(heatmapScores);
                    return [4 /*yield*/, Promise.all([heatmapScores.buffer(), offsets.buffer(), heatmapValues.buffer()])];
                case 1:
                    allTensorBuffers = _a.sent();
                    scoresBuffer = allTensorBuffers[0];
                    offsetsBuffer = allTensorBuffers[1];
                    heatmapValuesBuffer = allTensorBuffers[2];
                    offsetPoints = (0, decode_single_pose_util_1.getOffsetPoints)(heatmapValuesBuffer, outputStride, offsetsBuffer);
                    return [4 /*yield*/, offsetPoints.buffer()];
                case 2:
                    offsetPointsBuffer = _a.sent();
                    keypointConfidence = Array.from((0, decode_single_pose_util_1.getPointsConfidence)(scoresBuffer, heatmapValuesBuffer));
                    keypoints = keypointConfidence.map(function (score, keypointId) {
                        totalScore += score;
                        return {
                            y: offsetPointsBuffer.get(keypointId, 0),
                            x: offsetPointsBuffer.get(keypointId, 1),
                            score: score,
                            name: constants_1.COCO_KEYPOINTS[keypointId]
                        };
                    });
                    heatmapValues.dispose();
                    offsetPoints.dispose();
                    return [2 /*return*/, { keypoints: keypoints, score: totalScore / keypoints.length }];
            }
        });
    });
}
exports.decodeSinglePose = decodeSinglePose;
/**
 * Detects a single pose and finds its parts from part scores and offset
 * vectors with GPU.
 */
function decodeSinglePoseGPU(heatmapScores, offsets, outputStride) {
    return __awaiter(this, void 0, void 0, function () {
        var heatmapValues, offsetPoints, keypointConfidence;
        return __generator(this, function (_a) {
            heatmapValues = (0, decode_single_pose_util_1.argmax2d)(heatmapScores);
            offsetPoints = (0, decode_single_pose_util_1.getOffsetPointsGPU)(heatmapValues, outputStride, offsets);
            keypointConfidence = (0, get_points_confidence_1.getPointsConfidenceGPU)(heatmapScores, heatmapValues);
            return [2 /*return*/, [offsetPoints, keypointConfidence]];
        });
    });
}
exports.decodeSinglePoseGPU = decodeSinglePoseGPU;

},{"../../constants":"node_modules/@tensorflow-models/pose-detection/constants.js","../ops/get_points_confidence":"node_modules/@tensorflow-models/pose-detection/posenet/ops/get_points_confidence.js","./decode_single_pose_util":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_single_pose_util.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/flip_poses.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipPosesHorizontal = void 0;
function flipPosesHorizontal(poses, imageSize) {
    for (var _i = 0, poses_1 = poses; _i < poses_1.length; _i++) {
        var pose = poses_1[_i];
        for (var _a = 0, _b = pose.keypoints; _a < _b.length; _a++) {
            var kp = _b[_a];
            kp.x = imageSize.width - 1 - kp.x;
        }
    }
    return poses;
}
exports.flipPosesHorizontal = flipPosesHorizontal;

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/calculators/scale_poses.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalePoses = void 0;
function scalePoses(poses, imageSize, inputResolution, padding) {
    var height = imageSize.height, width = imageSize.width;
    var scaleY = height / (inputResolution.height * (1 - padding.top - padding.bottom));
    var scaleX = width / (inputResolution.width * (1 - padding.left - padding.right));
    var offsetY = -padding.top * inputResolution.height;
    var offsetX = -padding.left * inputResolution.width;
    if (scaleX === 1 && scaleY === 1 && offsetY === 0 && offsetX === 0) {
        return poses;
    }
    for (var _i = 0, poses_1 = poses; _i < poses_1.length; _i++) {
        var pose = poses_1[_i];
        for (var _a = 0, _b = pose.keypoints; _a < _b.length; _a++) {
            var kp = _b[_a];
            kp.x = (kp.x + offsetX) * scaleX;
            kp.y = (kp.y + offsetY) * scaleY;
        }
    }
    return poses;
}
exports.scalePoses = scalePoses;

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/detector_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEstimationConfig = exports.assertValidResolution = exports.assertValidOutputStride = exports.validateModelConfig = void 0;
var tf = require("@tensorflow/tfjs-core");
var constants_1 = require("./constants");
function validateModelConfig(modelConfig) {
    var config = modelConfig || constants_1.MOBILENET_V1_CONFIG;
    if (config.architecture == null) {
        config.architecture = 'MobileNetV1';
    }
    if (constants_1.VALID_ARCHITECTURE.indexOf(config.architecture) < 0) {
        throw new Error("Invalid architecture ".concat(config.architecture, ". ") +
            "Should be one of ".concat(constants_1.VALID_ARCHITECTURE));
    }
    if (config.inputResolution == null) {
        config.inputResolution = { height: 257, width: 257 };
    }
    if (config.outputStride == null) {
        config.outputStride = 16;
    }
    if (constants_1.VALID_STRIDE[config.architecture].indexOf(config.outputStride) < 0) {
        throw new Error("Invalid outputStride ".concat(config.outputStride, ". ") +
            "Should be one of ".concat(constants_1.VALID_STRIDE[config.architecture], " ") +
            "for architecture ".concat(config.architecture, "."));
    }
    if (config.multiplier == null) {
        config.multiplier = 1.0;
    }
    if (constants_1.VALID_MULTIPLIER[config.architecture].indexOf(config.multiplier) < 0) {
        throw new Error("Invalid multiplier ".concat(config.multiplier, ". ") +
            "Should be one of ".concat(constants_1.VALID_MULTIPLIER[config.architecture], " ") +
            "for architecture ".concat(config.architecture, "."));
    }
    if (config.quantBytes == null) {
        config.quantBytes = 4;
    }
    if (constants_1.VALID_QUANT_BYTES.indexOf(config.quantBytes) < 0) {
        throw new Error("Invalid quantBytes ".concat(config.quantBytes, ". ") +
            "Should be one of ".concat(constants_1.VALID_QUANT_BYTES, " ") +
            "for architecture ".concat(config.architecture, "."));
    }
    if (config.architecture === 'MobileNetV1' && config.outputStride === 32 &&
        config.multiplier !== 1) {
        throw new Error("When using an output stride of 32, " +
            "you must select 1 as the multiplier.");
    }
    return config;
}
exports.validateModelConfig = validateModelConfig;
function assertValidOutputStride(outputStride) {
    tf.util.assert(constants_1.VALID_OUTPUT_STRIDES.indexOf(outputStride) >= 0, function () { return "outputStride of ".concat(outputStride, " is invalid. ") +
        "It must be either 8 or 16."; });
}
exports.assertValidOutputStride = assertValidOutputStride;
function isValidInputResolution(resolution, outputStride) {
    return (resolution - 1) % outputStride === 0;
}
function assertValidResolution(resolution, outputStride) {
    tf.util.assert(isValidInputResolution(resolution.height, outputStride), function () { return "height of ".concat(resolution.height, " is invalid for output stride ") +
        "".concat(outputStride, "."); });
    tf.util.assert(isValidInputResolution(resolution.width, outputStride), function () { return "width of ".concat(resolution.width, " is invalid for output stride ") +
        "".concat(outputStride, "."); });
}
exports.assertValidResolution = assertValidResolution;
function validateEstimationConfig(estimationConfig) {
    var config = estimationConfig;
    if (config.maxPoses == null) {
        config.maxPoses = 1;
    }
    if (config.maxPoses <= 0) {
        throw new Error("Invalid maxPoses ".concat(config.maxPoses, ". Should be > 0."));
    }
    if (config.maxPoses > 1) {
        // Multi-poses estimation, needs additional check for multi-poses
        // parameters.
        config = __assign(__assign({}, constants_1.MULTI_PERSON_ESTIMATION_CONFIG), config);
        if (config.scoreThreshold < 0.0 || config.scoreThreshold > 1.0) {
            throw new Error("Invalid scoreThreshold ".concat(config.scoreThreshold, ". ") +
                "Should be in range [0.0, 1.0]");
        }
        if (config.nmsRadius <= 0) {
            throw new Error("Invalid nmsRadius ".concat(config.nmsRadius, "."));
        }
    }
    return config;
}
exports.validateEstimationConfig = validateEstimationConfig;

},{"@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","./constants":"node_modules/@tensorflow-models/pose-detection/posenet/constants.js"}],"node_modules/@tensorflow-models/pose-detection/posenet/load_utils.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toValidInputResolution = exports.getValidInputResolutionDimensions = exports.mobileNetCheckpoint = exports.resNet50Checkpoint = void 0;
var MOBILENET_BASE_URL = 'https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/';
var RESNET50_BASE_URL = 'https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/';
// The PoseNet 2.0 ResNet50 models use the latest TensorFlow.js 1.0 model
// format.
function resNet50Checkpoint(stride, quantBytes) {
    var graphJson = "model-stride".concat(stride, ".json");
    // quantBytes=4 corresponding to the non-quantized full-precision checkpoints.
    if (quantBytes === 4) {
        return RESNET50_BASE_URL + "float/" + graphJson;
    }
    else {
        return RESNET50_BASE_URL + "quant".concat(quantBytes, "/") + graphJson;
    }
}
exports.resNet50Checkpoint = resNet50Checkpoint;
// The PoseNet 2.0 MobileNetV1 models use the latest TensorFlow.js 1.0 model
// format.
function mobileNetCheckpoint(stride, multiplier, quantBytes) {
    var toStr = { 1.0: '100', 0.75: '075', 0.50: '050' };
    var graphJson = "model-stride".concat(stride, ".json");
    // quantBytes=4 corresponding to the non-quantized full-precision checkpoints.
    if (quantBytes === 4) {
        return MOBILENET_BASE_URL + "float/".concat(toStr[multiplier], "/") + graphJson;
    }
    else {
        return MOBILENET_BASE_URL + "quant".concat(quantBytes, "/").concat(toStr[multiplier], "/") +
            graphJson;
    }
}
exports.mobileNetCheckpoint = mobileNetCheckpoint;
function getValidInputResolutionDimensions(inputResolution, outputStride) {
    return {
        height: toValidInputResolution(inputResolution.height, outputStride),
        width: toValidInputResolution(inputResolution.width, outputStride)
    };
}
exports.getValidInputResolutionDimensions = getValidInputResolutionDimensions;
function toValidInputResolution(inputResolution, outputStride) {
    if (isValidInputResolution(inputResolution, outputStride)) {
        return inputResolution;
    }
    return Math.floor(inputResolution / outputStride) * outputStride + 1;
}
exports.toValidInputResolution = toValidInputResolution;
function isValidInputResolution(resolution, outputStride) {
    return (resolution - 1) % outputStride === 0;
}

},{}],"node_modules/@tensorflow-models/pose-detection/posenet/detector.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var tfconv = require("@tensorflow/tfjs-converter");
var tf = require("@tensorflow/tfjs-core");
var convert_image_to_tensor_1 = require("../shared/calculators/convert_image_to_tensor");
var image_utils_1 = require("../shared/calculators/image_utils");
var shift_image_value_1 = require("../shared/calculators/shift_image_value");
var decode_multiple_poses_1 = require("./calculators/decode_multiple_poses");
var decode_single_pose_1 = require("./calculators/decode_single_pose");
var flip_poses_1 = require("./calculators/flip_poses");
var scale_poses_1 = require("./calculators/scale_poses");
var constants_1 = require("./constants");
var detector_utils_1 = require("./detector_utils");
var load_utils_1 = require("./load_utils");
/**
 * PoseNet detector class.
 */
var PosenetDetector = /** @class */ (function () {
    function PosenetDetector(posenetModel, config) {
        this.posenetModel = posenetModel;
        // validate params.
        var inputShape = this.posenetModel.inputs[0].shape;
        tf.util.assert((inputShape[1] === -1) && (inputShape[2] === -1), function () { return "Input shape [".concat(inputShape[1], ", ").concat(inputShape[2], "] ") +
            "must both be equal to or -1"; });
        var validInputResolution = (0, load_utils_1.getValidInputResolutionDimensions)(config.inputResolution, config.outputStride);
        (0, detector_utils_1.assertValidOutputStride)(config.outputStride);
        (0, detector_utils_1.assertValidResolution)(validInputResolution, config.outputStride);
        this.inputResolution = validInputResolution;
        this.outputStride = config.outputStride;
        this.architecture = config.architecture;
    }
    /**
     * Estimates poses for an image or video frame.
     *
     * This does standard ImageNet pre-processing before inferring through the
     * model. The image should pixels should have values [0-255]. It returns a
     * single pose or multiple poses based on the maxPose parameter from the
     * `config`.
     *
     * @param image
     * ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement The input
     * image to feed through the network.
     *
     * @param estimationConfig
     *       maxPoses: Optional. Max number of poses to estimate.
     *       When maxPoses = 1, a single pose is detected, it is usually much more
     *       efficient than maxPoses > 1. When maxPoses > 1, multiple poses are
     *       detected.
     *
     *       flipHorizontal: Optional. Default to false. When image data comes
     *       from camera, the result has to flip horizontally.
     *
     * @return An array of `Pose`s.
     */
    PosenetDetector.prototype.estimatePoses = function (image, estimationConfig) {
        if (estimationConfig === void 0) { estimationConfig = constants_1.SINGLE_PERSON_ESTIMATION_CONFIG; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.estimatePosesGPU(image, estimationConfig, false)];
            });
        });
    };
    /**
     * Estimates poses for an image or video frame, optionally supports gpu
     * rendering.
     *
     * This does standard ImageNet pre-processing before inferring through the
     * model. The image should pixels should have values [0-255]. It returns a
     * single pose or multiple poses based on the maxPose parameter from the
     * `config`.
     *
     * @param image
     * ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement The input
     * image to feed through the network.
     *
     * @param estimationConfig
     *       maxPoses: Optional. Max number of poses to estimate.
     *       When maxPoses = 1, a single pose is detected, it is usually much more
     *       efficient than maxPoses > 1. When maxPoses > 1, multiple poses are
     *       detected.
     *
     *       flipHorizontal: Optional. Default to false. When image data comes
     *       from camera, the result has to flip horizontally.
     *
     * @param useGpuRenderer
     *        Whether rendering predict results with gpu or not.
     *
     * @return If not rendering with gpu, an array of poses, each pose contains an
     *     array of `Keypoint`s. Otherwise an array of tensor, and canvas info.
     */
    PosenetDetector.prototype.estimatePosesGPU = function (image, estimationConfig, useGpuRenderer) {
        if (estimationConfig === void 0) { estimationConfig = constants_1.SINGLE_PERSON_ESTIMATION_CONFIG; }
        if (useGpuRenderer === void 0) { useGpuRenderer = false; }
        return __awaiter(this, void 0, void 0, function () {
            var config, _a, imageTensor, padding, imageValueShifted, results, offsets, heatmap, displacementFwd, displacementBwd, heatmapScores, poses, _b, pose, score, pose, canvasInfo, scaledPoses, imageSize;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        config = (0, detector_utils_1.validateEstimationConfig)(estimationConfig);
                        if (image == null) {
                            return [2 /*return*/, useGpuRenderer ? [[], []] : []];
                        }
                        this.maxPoses = config.maxPoses;
                        _a = (0, convert_image_to_tensor_1.convertImageToTensor)(image, {
                            outputTensorSize: this.inputResolution,
                            keepAspectRatio: true,
                            borderMode: 'replicate'
                        }), imageTensor = _a.imageTensor, padding = _a.padding;
                        imageValueShifted = this.architecture === 'ResNet50' ?
                            tf.add(imageTensor, constants_1.RESNET_MEAN) :
                            (0, shift_image_value_1.shiftImageValue)(imageTensor, [-1, 1]);
                        results = this.posenetModel.predict(imageValueShifted);
                        if (this.architecture === 'ResNet50') {
                            offsets = tf.squeeze(results[2], [0]);
                            heatmap = tf.squeeze(results[3], [0]);
                            displacementFwd = tf.squeeze(results[0], [0]);
                            displacementBwd = tf.squeeze(results[1], [0]);
                        }
                        else {
                            offsets = tf.squeeze(results[0], [0]);
                            heatmap = tf.squeeze(results[1], [0]);
                            displacementFwd = tf.squeeze(results[2], [0]);
                            displacementBwd = tf.squeeze(results[3], [0]);
                        }
                        heatmapScores = tf.sigmoid(heatmap);
                        if (!(this.maxPoses === 1)) return [3 /*break*/, 5];
                        if (!useGpuRenderer) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, decode_single_pose_1.decodeSinglePoseGPU)(heatmapScores, offsets, this.outputStride)];
                    case 1:
                        _b = _c.sent(), pose = _b[0], score = _b[1];
                        poses = [pose, score];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, decode_single_pose_1.decodeSinglePose)(heatmapScores, offsets, this.outputStride)];
                    case 3:
                        pose = _c.sent();
                        poses = [pose];
                        _c.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (useGpuRenderer) {
                            throw new Error('GPU renderer only supports single pose!');
                        }
                        return [4 /*yield*/, (0, decode_multiple_poses_1.decodeMultiplePoses)(heatmapScores, offsets, displacementFwd, displacementBwd, this.outputStride, this.maxPoses, config.scoreThreshold, config.nmsRadius)];
                    case 6:
                        poses = _c.sent();
                        _c.label = 7;
                    case 7:
                        if (useGpuRenderer) {
                            // TODO: handle flipPosesHorizontal in GPU.
                            if (config.flipHorizontal === true) {
                                throw new Error('flipHorizontal is not supported!');
                            }
                            canvasInfo = this.getCanvasInfo((0, image_utils_1.getImageSize)(image), this.inputResolution, padding);
                        }
                        else {
                            imageSize = (0, image_utils_1.getImageSize)(image);
                            scaledPoses =
                                (0, scale_poses_1.scalePoses)(poses, imageSize, this.inputResolution, padding);
                            if (config.flipHorizontal) {
                                scaledPoses = (0, flip_poses_1.flipPosesHorizontal)(scaledPoses, imageSize);
                            }
                        }
                        imageTensor.dispose();
                        imageValueShifted.dispose();
                        tf.dispose(results);
                        offsets.dispose();
                        heatmap.dispose();
                        displacementFwd.dispose();
                        displacementBwd.dispose();
                        heatmapScores.dispose();
                        return [2 /*return*/, useGpuRenderer ? [poses, canvasInfo] : scaledPoses];
                }
            });
        });
    };
    PosenetDetector.prototype.getCanvasInfo = function (imageSize, inputResolution, padding) {
        var height = imageSize.height, width = imageSize.width;
        var scaleY = height / (inputResolution.height * (1 - padding.top - padding.bottom));
        var scaleX = width / (inputResolution.width * (1 - padding.left - padding.right));
        var offsetY = -padding.top * inputResolution.height;
        var offsetX = -padding.left * inputResolution.width;
        return [
            offsetX, offsetY, scaleX, scaleY, imageSize.width, imageSize.height
        ];
    };
    PosenetDetector.prototype.dispose = function () {
        this.posenetModel.dispose();
    };
    PosenetDetector.prototype.reset = function () {
        // No-op. There's no global state.
    };
    return PosenetDetector;
}());
/**
 * Loads the PoseNet model instance from a checkpoint, with the ResNet
 * or MobileNet architecture. The model to be loaded is configurable using the
 * config dictionary ModelConfig. Please find more details in the
 * documentation of the ModelConfig.
 *
 * @param config ModelConfig dictionary that contains parameters for
 * the PoseNet loading process. Please find more details of each parameters
 * in the documentation of the ModelConfig interface. The predefined
 * `MOBILENET_V1_CONFIG` and `RESNET_CONFIG` can also be used as references
 * for defining your customized config.
 */
function load(modelConfig) {
    if (modelConfig === void 0) { modelConfig = constants_1.MOBILENET_V1_CONFIG; }
    return __awaiter(this, void 0, void 0, function () {
        var config, defaultUrl_1, model_1, defaultUrl, model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = (0, detector_utils_1.validateModelConfig)(modelConfig);
                    if (!(config.architecture === 'ResNet50')) return [3 /*break*/, 2];
                    defaultUrl_1 = (0, load_utils_1.resNet50Checkpoint)(config.outputStride, config.quantBytes);
                    return [4 /*yield*/, tfconv.loadGraphModel(config.modelUrl || defaultUrl_1)];
                case 1:
                    model_1 = _a.sent();
                    return [2 /*return*/, new PosenetDetector(model_1, config)];
                case 2:
                    defaultUrl = (0, load_utils_1.mobileNetCheckpoint)(config.outputStride, config.multiplier, config.quantBytes);
                    return [4 /*yield*/, tfconv.loadGraphModel(config.modelUrl || defaultUrl)];
                case 3:
                    model = _a.sent();
                    return [2 /*return*/, new PosenetDetector(model, config)];
            }
        });
    });
}
exports.load = load;

},{"@tensorflow/tfjs-converter":"node_modules/@tensorflow/tfjs-converter/dist/index.js","@tensorflow/tfjs-core":"node_modules/@tensorflow/tfjs-core/dist/index.js","../shared/calculators/convert_image_to_tensor":"node_modules/@tensorflow-models/pose-detection/shared/calculators/convert_image_to_tensor.js","../shared/calculators/image_utils":"node_modules/@tensorflow-models/pose-detection/shared/calculators/image_utils.js","../shared/calculators/shift_image_value":"node_modules/@tensorflow-models/pose-detection/shared/calculators/shift_image_value.js","./calculators/decode_multiple_poses":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_multiple_poses.js","./calculators/decode_single_pose":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/decode_single_pose.js","./calculators/flip_poses":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/flip_poses.js","./calculators/scale_poses":"node_modules/@tensorflow-models/pose-detection/posenet/calculators/scale_poses.js","./constants":"node_modules/@tensorflow-models/pose-detection/posenet/constants.js","./detector_utils":"node_modules/@tensorflow-models/pose-detection/posenet/detector_utils.js","./load_utils":"node_modules/@tensorflow-models/pose-detection/posenet/load_utils.js"}],"node_modules/@tensorflow-models/pose-detection/create_detector.js":[function(require,module,exports) {
"use strict";
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDetector = void 0;
var detector_1 = require("./blazepose_mediapipe/detector");
var detector_2 = require("./blazepose_tfjs/detector");
var detector_3 = require("./movenet/detector");
var detector_4 = require("./posenet/detector");
var types_1 = require("./types");
/**
 * Create a pose detector instance.
 *
 * @param model The name of the pipeline to load.
 */
function createDetector(model, modelConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var config, runtime;
        return __generator(this, function (_a) {
            switch (model) {
                case types_1.SupportedModels.PoseNet:
                    return [2 /*return*/, (0, detector_4.load)(modelConfig)];
                case types_1.SupportedModels.BlazePose:
                    config = modelConfig;
                    runtime = void 0;
                    if (config != null) {
                        if (config.runtime === 'tfjs') {
                            return [2 /*return*/, (0, detector_2.load)(modelConfig)];
                        }
                        if (config.runtime === 'mediapipe') {
                            return [2 /*return*/, (0, detector_1.load)(modelConfig)];
                        }
                        runtime = config.runtime;
                    }
                    throw new Error("Expect modelConfig.runtime to be either 'tfjs' " +
                        "or 'mediapipe', but got ".concat(runtime));
                case types_1.SupportedModels.MoveNet:
                    return [2 /*return*/, (0, detector_3.load)(modelConfig)];
                default:
                    throw new Error("".concat(model, " is not a supported model name."));
            }
            return [2 /*return*/];
        });
    });
}
exports.createDetector = createDetector;

},{"./blazepose_mediapipe/detector":"node_modules/@tensorflow-models/pose-detection/blazepose_mediapipe/detector.js","./blazepose_tfjs/detector":"node_modules/@tensorflow-models/pose-detection/blazepose_tfjs/detector.js","./movenet/detector":"node_modules/@tensorflow-models/pose-detection/movenet/detector.js","./posenet/detector":"node_modules/@tensorflow-models/pose-detection/posenet/detector.js","./types":"node_modules/@tensorflow-models/pose-detection/types.js"}],"node_modules/@tensorflow-models/pose-detection/index.js":[function(require,module,exports) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movenet = exports.calculators = exports.util = exports.TrackerType = exports.createDetector = void 0;
var create_detector_1 = require("./create_detector");
Object.defineProperty(exports, "createDetector", { enumerable: true, get: function () { return create_detector_1.createDetector; } });
// Supported models enum.
__exportStar(require("./types"), exports);
var types_1 = require("./calculators/types");
Object.defineProperty(exports, "TrackerType", { enumerable: true, get: function () { return types_1.TrackerType; } });
// Second level exports.
// Utils for rendering.
var util = require("./util");
exports.util = util;
// General calculators.
var keypoints_to_normalized_keypoints_1 = require("./shared/calculators/keypoints_to_normalized_keypoints");
var calculators = { keypointsToNormalizedKeypoints: keypoints_to_normalized_keypoints_1.keypointsToNormalizedKeypoints };
exports.calculators = calculators;
// MoveNet model types.
var constants_1 = require("./movenet/constants");
var movenet = {
    modelType: {
        'SINGLEPOSE_LIGHTNING': constants_1.SINGLEPOSE_LIGHTNING,
        'SINGLEPOSE_THUNDER': constants_1.SINGLEPOSE_THUNDER,
        'MULTIPOSE_LIGHTNING': constants_1.MULTIPOSE_LIGHTNING
    }
};
exports.movenet = movenet;

},{"./create_detector":"node_modules/@tensorflow-models/pose-detection/create_detector.js","./types":"node_modules/@tensorflow-models/pose-detection/types.js","./calculators/types":"node_modules/@tensorflow-models/pose-detection/calculators/types.js","./util":"node_modules/@tensorflow-models/pose-detection/util.js","./shared/calculators/keypoints_to_normalized_keypoints":"node_modules/@tensorflow-models/pose-detection/shared/calculators/keypoints_to_normalized_keypoints.js","./movenet/constants":"node_modules/@tensorflow-models/pose-detection/movenet/constants.js"}]},{},[], null)
//# sourceMappingURL=/pose-detection.0778846a.js.map