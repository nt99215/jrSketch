import GameConfig from "../data/GameConfig";

let b, s;
export default class Brush {
    constructor(canvas = null, type='circle', color = '#000', size = 10, alpha = 1) {
        this.canvas = canvas;
        this.color = color;
        this.size = size;
        this.alpha = alpha;
        b = this.canvas.freeDrawingBrush;
        b.color = this.color;
        b.width = this.size;
        b.alpha = this.alpha;
        /**
         * round, butt, square
         * @type {string}
         */
        b.strokeLineCap = 'square';
        b.strokeLineJoin = 'square';
        // b.strokeMiterLimit = 200;


    }

    colorChange(color = '#000') {
        b.color = color;
    }
    sizeChange(size = 7) {
        b.width = size;
    }
}