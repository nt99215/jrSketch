import GameConfig from "../data/GameConfig";
import {fabric} from "fabric";

let b, _canvas;
export default class Crayon {
    constructor(canvas = null, type='circle', color = '#000', size = 30, alpha = 1,
                strokeLineCap = 'round', strokeLineJoin = 'round') {
        // this.canvas = canvas;
        // this.color = color;
        // this.size = size;
        // this.alpha = alpha;

        // this.canvas.isDrawingMode = true;
        // b = this.canvas.freeDrawingBrush;
        // b.color = this.color;
        // b.width = this.size;
        // b.alpha = this.alpha;
        /**
         * round, butt, square
         * @type {string}
         */
        // b.strokeLineCap = 'square';
        // b.strokeLineJoin = 'square';
        // b.strokeMiterLimit = 200;


    }

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
        _canvas.freeDrawingBrush.color = '#d000ff';
        _canvas.freeDrawingBrush.width = 20;
        _canvas.freeDrawingBrush.density = 12;
        _canvas.freeDrawingBrush.dotWidth = 2;
        _canvas.freeDrawingBrush.dotWidthVariance = 2;
        _canvas.freeDrawingBrush.randomOpacity = false;
        _canvas.freeDrawingBrush.optimizeOverlapping = true;

        GameConfig.IS_LINE_DRAWING = false;
        GameConfig.CURRENT_TOOL = _canvas.freeDrawingBrush;
    }

    colorChange(color = '#000') {
        b.color = color;
    }
    sizeChange(size = 7) {
        b.width = size;
    }
}