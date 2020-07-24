import GameConfig from "../data/GameConfig";
import {fabric} from "fabric";

let _canvas, _isDown;
let _color = '#000000';
let _size = 7;
let _opacity = 100;
export default class LineDraw {

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = false;
        _canvas.selection = false;
        GameConfig.IS_LINE_DRAWING = true;
        GameConfig.CURRENT_TOOL = this;
        _isDown = false;
        _color = this.getColor();
        _size = this.getSize();

        let line;
        _canvas.on('mouse:down', function (o) {
            if (GameConfig.IS_LINE_DRAWING) {
                // _canvas.selection = false;
                _isDown = true;
                let pointer = _canvas.getPointer(o.e);
                let points = [pointer.x, pointer.y, pointer.x, pointer.y];


                line = new fabric.Line(points, {
                    strokeWidth: _size,
                    fill: _color,
                    stroke: _color,
                    originX: 'center',
                    originY: 'center'
                });
                _canvas.add(line);
            }
        });

        _canvas.on('mouse:move', function (o) {
            if (!_isDown)
                return;
            if (GameConfig.IS_LINE_DRAWING) {
                let pointer = _canvas.getPointer(o.e);
                line.set({x2: pointer.x, y2: pointer.y});
                _canvas.renderAll();
            }
        });

        _canvas.on('mouse:up', function (o) {
            _isDown = false;
        });

    }

    /**
     *
     * @param color
     */
    setColor(color) { _color = color;}
    getColor() { return _color;}

    /**
     *
     * @param size
     */
    setSize(size) { _size = size;}
    getSize() { return _size;}


    colorChange() {
        _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        _canvas.freeDrawingBrush.width = this.getSize();
    }
}