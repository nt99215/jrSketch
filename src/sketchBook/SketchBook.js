import {fabric} from 'fabric';
import Brush from "../module/Brush";
import GameConfig from "../data/GameConfig";
import ClearCanvas from "../module/ClearCanvas";
import MainMenu from "../ui/MainMenu";
import Airbrush from "../module/Airbrush";
import Crayon from "../module/Crayon";
import LineDraw from "../module/LineDraw";
import Eraser from "../module/Eraser";

let _id, _id2, _canvas, _menuCanvas;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5,7,10,20,30];
export default class SketchBook {
    constructor(id, width, height, layer = 1) {
        _id = id;
        _canvas = new fabric.Canvas(_id, {
            // isDrawingMode: true
        });

        this._init();
    }

    _init() {


        let $ = function(id){return document.getElementById(id)};
        let brushEl = $('brush'),
            airBrushEl = $('airBrush'),
            crayonEl = $('crayon'),
            // fillEl = $('fill'),
            lineEl = $('line'),
            screenToneEl = $('screenTone'),
            eraserEl = $('eraser'),
            textEl = $('text'),
            zoomEl= $('zoom'),
            // moveEl = $('move'),
            clearEl = $('clear'),
            colorEl = $('_color'),
            sizeEl = $('_size'),
            opacityEl = $('_opacity');

            // drawingModeEl = $('drawing-mode'),
            // drawingOptionsEl = $('drawing-mode-options'),
            // drawingColorEl = $('drawing-color'),
            // drawingLineWidthEl = $('drawing-line-width');


        colorEl.onchange = function() {
            console.log(this.value);
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.color = this.value;
        }

        opacityEl.onchange = function() {
            console.log(this.value);
            // GameConfig.CURRENT_TOOL.width = this.value;
        }

        sizeEl.onchange = function() {
            console.log(this.value);
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.width = this.value;
        }

        brushEl.onclick =()=> {

            Brush.prototype.draw(_canvas);
        }

        airBrushEl.onclick =()=> {

            Airbrush.prototype.draw(_canvas);
        }

        crayonEl.onclick =()=> {

            Crayon.prototype.draw(_canvas);
        }

        lineEl.onclick =()=> {

            LineDraw.prototype.draw(_canvas);
        }

       /* screenToneEl.onclick =()=> {

            // _canvas.freeDrawingBrush = new fabric.PatternBrush(_canvas);
            _canvas.freeDrawingBrush = this._makePattern();
            // this._makePattern();
        }*/

        eraserEl.onclick =()=> {

            Eraser.prototype.draw(_canvas);
        };

        clearEl.onclick = ()=> {
            _canvas.clear()
        };

        /*moveEl.onclick =()=> {
            _canvas.isDrawingMode = !_canvas.isDrawingMode;
            if (_canvas.isDrawingMode) move.innerHTML = 'move';
            else move.innerHTML = 'draw';
        };

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

        }*/

      /*  drawingColorEl.onclick =()=> {
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
        }*/


    }


    _makePattern() {
        let diamondPatternBrush = new fabric.PatternBrush(_canvas);
        diamondPatternBrush.getPatternSrc = function() {

            let squareWidth = 10, squareDistance = 5;
            let patternCanvas = fabric.document.createElement('canvas');
            let rect = new fabric.Rect({
                width: squareWidth,
                height: 10,
                angle: 45,
                fill: "rgba(0,136,255,0.85)"
            });

            let canvasWidth = rect.getBoundingRect().width;

            patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
            rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

            let ctx = patternCanvas.getContext('2d');
            rect.render(ctx);

            console.log(patternCanvas);
            return patternCanvas;
        };
    }

    _clearCanvas(canvas) {
        let a = new ClearCanvas(canvas);
        this.hexToRgb("ffcc00")

    }

    rgbToHex(r,g,b) {

        let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('');

        console.log(rgbToHex)
    }

    hexToRgb(hex) {
        console.log("A")
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))

        console.log(hex);
    }


}