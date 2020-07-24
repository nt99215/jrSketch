import GameConfig from "../data/GameConfig";
import {fabric} from "fabric";

let _canvas;
let _color = '#ffffff';
let _size = 30;
export default class Eraser {

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        _canvas.freeDrawingBrush = new fabric.PencilBrush(_canvas);
        _canvas.freeDrawingBrush.color = this.getColor();
        _canvas.freeDrawingBrush.width = this.getSize();
        _canvas.freeDrawingBrush.strokeLineCap = 'round';
        _canvas.freeDrawingBrush.strokeLineJoin = 'round';

        GameConfig.IS_LINE_DRAWING = false;
        GameConfig.CURRENT_TOOL = this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        // _color = color;
    }
    getColor() { return _color;}

    /**
     *
     * @param size
     */
    setSize(size) { _size = size;}
    getSize() { return _size;}


    colorChange() {
        // _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        _canvas.freeDrawingBrush.width = this.getSize();
    }
}