import {fabric} from 'fabric';
import Brush from "../module/Brush";
import GameConfig from "../data/GameConfig";
import ClearCanvas from "../module/ClearCanvas";
import MainMenu from "../ui/MainMenu";

let _id, _id2, _canvas, _menuCanvas;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5,7,10,20,30];
export default class SketchBook {
    constructor(id, width, height, layer = 1) {
        _id = id;
        _canvas = new fabric.Canvas(_id, {
            isDrawingMode: true
        });
        this.defaultTool = new Brush(_canvas, 'circle', '#ffcc00', 30, 0.3);
        GameConfig.CURRENT_TOOL = this.defaultTool;

        this._init();
    }

    _aaa() {

    }
    _init() {


        let $ = function(id){return document.getElementById(id)};
        let brush = $('brush'),
            airBrush = $('airBrush'),
            crayon = $('crayon'),
            fill = $('fill'),
            line = $('line'),
            screenTone = $('screenTone'),
            eraser = $('eraser'),
            text = $('text'),
            zoom = $('zoom'),
            move = $('move'),

            drawingModeEl = $('drawing-mode'),
            drawingOptionsEl = $('drawing-mode-options'),
            drawingColorEl = $('drawing-color'),
            drawingLineWidthEl = $('drawing-line-width'),
            clearEl = $('clear-canvas');

        brush.onclick =()=> {
            _canvas.isDrawingMode = true;
            GameConfig.IS_LINE_DRAWING = false;
            _canvas.freeDrawingBrush = new fabric.PencilBrush(_canvas);
            _canvas.freeDrawingBrush.color = '#ff4400';
            _canvas.freeDrawingBrush.width = 40;
            _canvas.freeDrawingBrush.strokeLineCap = 'round';
            _canvas.freeDrawingBrush.strokeLineJoin = 'round';
        }

        airBrush.onclick =()=> {
            _canvas.isDrawingMode = true;
            GameConfig.IS_LINE_DRAWING = false;
            _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
            _canvas.freeDrawingBrush.color = '#ffcc00';
            _canvas.freeDrawingBrush.width = 40;
            _canvas.freeDrawingBrush.density = 7;
            _canvas.freeDrawingBrush.dotWidth = 1;
            _canvas.freeDrawingBrush.dotWidthVariance = 1;
            _canvas.freeDrawingBrush.randomOpacity = false;
            _canvas.freeDrawingBrush.optimizeOverlapping = true;
        }

        crayon.onclick =()=> {
            _canvas.isDrawingMode = true;
            GameConfig.IS_LINE_DRAWING = false;
            _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
            _canvas.freeDrawingBrush.color = '#d000ff';
            _canvas.freeDrawingBrush.width = 20;
            _canvas.freeDrawingBrush.density = 12;
            _canvas.freeDrawingBrush.dotWidth = 2;
            _canvas.freeDrawingBrush.dotWidthVariance = 2;
            _canvas.freeDrawingBrush.randomOpacity = false;
            _canvas.freeDrawingBrush.optimizeOverlapping = true;

        }

        line.onclick =()=> {
            // _canvas.freeDrawingBrush = new fabric.Line(_canvas);
            _canvas.isDrawingMode = false;
            _canvas.selection = false;
            GameConfig.IS_LINE_DRAWING = true;
            let isDown = false;

            function drawLine() {
                let line;
                _canvas.on('mouse:down', function (o) {
                    if (GameConfig.IS_LINE_DRAWING) {
                        // _canvas.selection = false;
                        isDown = true;
                        let pointer = _canvas.getPointer(o.e);
                        let points = [pointer.x, pointer.y, pointer.x, pointer.y];

                        line = new fabric.Line(points, {
                            strokeWidth: 7,
                            fill: '#b65858',
                            stroke: '#931717',
                            originX: 'center',
                            originY: 'center'
                        });
                        _canvas.add(line);
                    }
                });

                _canvas.on('mouse:move', function (o) {
                    if (!isDown)
                        return;
                    if (GameConfig.IS_LINE_DRAWING) {
                        let pointer = _canvas.getPointer(o.e);
                        line.set({x2: pointer.x, y2: pointer.y});
                        _canvas.renderAll();
                    }
                });

                _canvas.on('mouse:up', function (o) {
                    isDown = false;
                });
            }

            drawLine();
        }

        screenTone.onclick =()=> {

            // _canvas.freeDrawingBrush = new fabric.PatternBrush(_canvas);
            _canvas.freeDrawingBrush = this._makePattern();
            // this._makePattern();

        }

        eraser.onclick =()=> {
            _canvas.selection = false;
            _canvas.isDrawingMode = true;
            GameConfig.IS_LINE_DRAWING = false;
            _canvas.freeDrawingBrush = new fabric.PencilBrush(_canvas);
            _canvas.freeDrawingBrush.color = '#ffffff';
            _canvas.freeDrawingBrush.width = 50;
            _canvas.freeDrawingBrush.strokeLineCap = 'round';
            _canvas.freeDrawingBrush.strokeLineJoin = 'round';
        };

        move.onclick =()=> {
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


    _makePattern() {
        let diamondPatternBrush = new fabric.PatternBrush(_canvas);
        console.log('aaa');
        diamondPatternBrush.getPatternSrc = function() {
            console.log(diamondPatternBrush);
            console.log('bbb');

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

    }



}