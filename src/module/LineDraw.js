import GameConfig from "../data/GameConfig";
import {fabric} from "fabric";

let b, _canvas, _isDown;
export default class LineDraw {
    constructor(canvas = null, type='circle', color = '#ff4400', size = 30, alpha = 1,
                strokeLineCap = 'round', strokeLineJoin = 'round') {

    }


    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = false;
        _canvas.selection = false;
        GameConfig.IS_LINE_DRAWING = true;

        _isDown = false;
        let line;
        _canvas.on('mouse:down', function (o) {
            if (GameConfig.IS_LINE_DRAWING) {
                // _canvas.selection = false;
                _isDown = true;
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

    colorChange(color = '#000') {
        b.color = color;
    }
    sizeChange(size = 7) {
        b.width = size;
    }
}