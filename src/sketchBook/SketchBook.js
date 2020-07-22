import {fabric} from 'fabric';
import Brush from "../module/Brush";
import GameConfig from "../data/GameConfig";
import ClearCanvas from "../module/ClearCanvas";

let _id, _canvas;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5,7,10,20,30];
export default class SketchBook {
    constructor(id, width, height, layer = 1) {
        _id = id;
        _canvas = new fabric.Canvas(_id, {
            isDrawingMode: true
        });
        this.defaultTool = new Brush(_canvas, 'circle', '#ffcc00', 10, 0.3);
        GameConfig.CURRENT_TOOL = this.defaultTool;

        this._init();
    }

    _init() {
        let $ = function(id){return document.getElementById(id)};
        let drawingModeEl = $('drawing-mode'),
            drawingOptionsEl = $('drawing-mode-options'),
            drawingColorEl = $('drawing-color'),
            drawingLineWidthEl = $('drawing-line-width'),
            clearEl = $('clear-canvas');

        drawingModeEl.onclick =()=> {
            _canvas.isDrawingMode = !_canvas.isDrawingMode;
            if (_canvas.isDrawingMode) {
                drawingModeEl.innerHTML = 'Object-Move';
                drawingOptionsEl.style.display = '';
                drawingColorEl.style.display = '';
                drawingLineWidthEl.style.display = '';
            }
            else {
                drawingModeEl.innerHTML = 'Enter drawing mode';
                drawingOptionsEl.style.display = 'none';
                drawingColorEl.style.display = 'none';
                drawingLineWidthEl.style.display = 'none';
            }

        }
        drawingColorEl.onclick =()=> {
            // this.defaultTool.colorChange();
            let n = parseInt(Math.random() * _colorArr.length);
            let c = _colorArr[n];
            console.log(c);
            GameConfig.CURRENT_TOOL.colorChange(c);
        };

        drawingLineWidthEl.onclick =()=> {
            let n = parseInt(Math.random() * _sizeArr.length);
            let c = _sizeArr[n];
            console.log(c);
            GameConfig.CURRENT_TOOL.sizeChange(c)
        }
        clearEl.onclick = ()=> {
            _canvas.clear()
        };

    }

    _clearCanvas(canvas) {
        let a = new ClearCanvas(canvas);

    }



}