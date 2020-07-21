/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

let b, s;
class Brush {
    constructor(canvas = null, type = 'circle', color = '#000', size = 10, alpha = 1) {
        this.canvas = canvas;
        this.color = color;
        this.size = size;
        this.alpha = alpha;
        b = this.canvas.freeDrawingBrush;
        b.color = this.color;
        b.width = this.size;
        b.alpha = this.alpha;
    }

    colorChange(color = '#000') {
        b.color = color;
    }
    sizeChange(size = 7) {
        b.width = size;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brush;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_Brush__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sketchBook_SketchBook__ = __webpack_require__(2);



let index;
index = function () {
    // console.log("A");
    // let canvas = document.getElementById('drawStage');
    // this.sketchBook = new SketchBook(canvas, 500, 500, 1);
    // this.addChild(this.sketchBook);
};

let s = new __WEBPACK_IMPORTED_MODULE_1__sketchBook_SketchBook__["a" /* default */]('drawStage');

/*export default class index {
    constructor() {

        this._init();

    }

    _init() {
        console.log("A")
        let canvas = document.getElementById('drawStage');
        this.sketchBook = new SketchBook(canvas, 500, 500, 1);
        // this.addChild(this.sketchBook);
    }


}*/
/*
jrBrush = function() {
    let $ = function(id){return document.getElementById(id)};

    let canvas = this.__canvas = new fabric.Canvas('drawStage', {
        isDrawingMode: true
    });

    fabric.Object.prototype.transparentCorners = false;

    let drawingModeEl = $('drawing-mode'),
        drawingOptionsEl = $('drawing-mode-options'),
        drawingColorEl = $('drawing-color'),
        drawingLineWidthEl = $('drawing-line-width'),
        clearEl = $('clear-canvas');

    // canvas.freeDrawingBrush.color = drawingColorEl.value;
    // canvas.freeDrawingBrush.color = (35,175,48);
    // canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.width = 20;
    canvas.freeDrawingBrush.color = "#308959"
    console.log(canvas.freeDrawingBrush);

    setTimeout(()=> {
        // canvas.freeDrawingBrush.width = 10;
        canvas.freeDrawingBrush.color = "#765730"
    }, 2000)
   /* canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        // blur: parseInt(drawingShadowWidth.value, 10) || 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        // color: drawingShadowColorEl.value,
    });*/

// canvas.freeDrawingBrush.color = '0xffcc00'

/*clearEl.onclick = function() {
    canvas.clear() };
  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
        drawingModeEl.innerHTML = 'Cancel drawing mode';
        drawingOptionsEl.style.display = '';
    }
    else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
        drawingOptionsEl.style.display = 'none';
    }
};
  if (fabric.PatternBrush) {
    let vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {
          let patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        let ctx = patternCanvas.getContext('2d');
          ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();
          return patternCanvas;
    };
      let hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {
          let patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        let ctx = patternCanvas.getContext('2d');
          ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.stroke();
          return patternCanvas;
    };
      let squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {
          let squareWidth = 10, squareDistance = 2;
          let patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
        let ctx = patternCanvas.getContext('2d');
          ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, squareWidth, squareWidth);
          return patternCanvas;
    };
      let diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {
          let squareWidth = 10, squareDistance = 5;
        let patternCanvas = fabric.document.createElement('canvas');
        let rect = new fabric.Rect({
            width: squareWidth,
            height: squareWidth,
            angle: 45,
            fill: this.color
        });
          let canvasWidth = rect.getBoundingRect().width;
          patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
        rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });
          let ctx = patternCanvas.getContext('2d');
        rect.render(ctx);
          return patternCanvas;
    };
      let img = new Image();
    img.src = '../assets/honey_im_subtle.png';
      let texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
}*/

/*$('drawing-mode-selector').onchange = function() {
      if (this.value === 'hline') {
        canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
        canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
        canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
        canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
        canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
        canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }
     /!* if (canvas.freeDrawingBrush) {
        canvas.freeDrawingBrush.color = drawingColorEl.value;
        canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: parseInt(drawingShadowWidth.value, 10) || 0,
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: drawingShadowColorEl.value,
        });
    }*!/
};*/

/*drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
};
drawingShadowColorEl.onchange = function() {
    canvas.freeDrawingBrush.shadow.color = this.value;
};
drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
};
drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
};
drawingShadowOffset.onchange = function() {
    canvas.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0;
    canvas.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
};*/

/* if (canvas.freeDrawingBrush) {
     canvas.freeDrawingBrush.color = drawingColorEl.value;
     canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
     canvas.freeDrawingBrush.shadow = new fabric.Shadow({
         // blur: parseInt(drawingShadowWidth.value, 10) || 0,
         offsetX: 0,
         offsetY: 0,
         affectStroke: true,
         // color: drawingShadowColorEl.value,
     });
 }
}
*/

// jrBrush();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_Brush__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_GameConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_ClearCanvas__ = __webpack_require__(4);



let _id, _canvas;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5, 7, 10, 20, 30];
class SketchBook {
    constructor(id, width, height, layer = 1) {
        _id = id;
        _canvas = new fabric.Canvas(_id, {
            isDrawingMode: true
        });
        this.defaultTool = new __WEBPACK_IMPORTED_MODULE_0__module_Brush__["a" /* default */](_canvas, 'circle', '#ffcc00', 10, 0.3);
        __WEBPACK_IMPORTED_MODULE_1__data_GameConfig__["a" /* default */].CURRENT_TOOL = this.defaultTool;

        this._init();
    }

    _init() {
        let $ = function (id) {
            return document.getElementById(id);
        };
        let drawingModeEl = $('drawing-mode'),
            drawingOptionsEl = $('drawing-mode-options'),
            drawingColorEl = $('drawing-color'),
            drawingLineWidthEl = $('drawing-line-width'),
            clearEl = $('clear-canvas');

        drawingModeEl.onclick = () => {
            _canvas.isDrawingMode = !_canvas.isDrawingMode;
            if (_canvas.isDrawingMode) {
                drawingModeEl.innerHTML = 'Object-Move';
                drawingOptionsEl.style.display = '';
                drawingColorEl.style.display = '';
                drawingLineWidthEl.style.display = '';
            } else {
                drawingModeEl.innerHTML = 'Enter drawing mode';
                drawingOptionsEl.style.display = 'none';
                drawingColorEl.style.display = 'none';
                drawingLineWidthEl.style.display = 'none';
            }
        };
        drawingColorEl.onclick = () => {
            // this.defaultTool.colorChange();
            let n = parseInt(Math.random() * _colorArr.length);
            let c = _colorArr[n];
            console.log(c);
            __WEBPACK_IMPORTED_MODULE_1__data_GameConfig__["a" /* default */].CURRENT_TOOL.colorChange(c);
        };

        drawingLineWidthEl.onclick = () => {
            let n = parseInt(Math.random() * _sizeArr.length);
            let c = _sizeArr[n];
            console.log(c);
            __WEBPACK_IMPORTED_MODULE_1__data_GameConfig__["a" /* default */].CURRENT_TOOL.sizeChange(c);
        };
        clearEl.onclick = () => {
            _canvas.clear();
        };
    }

    _clearCanvas(canvas) {
        let a = new __WEBPACK_IMPORTED_MODULE_2__module_ClearCanvas__["a" /* default */](canvas);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SketchBook;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _tool = null;

class GameConfig {
    static get CURRENT_TOOL() {
        return _tool;
    }
    static set CURRENT_TOOL(obj) {
        _tool = obj;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameConfig;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ClearCanvas {
    constructor(canvas) {
        canvas.clear();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClearCanvas;


/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map