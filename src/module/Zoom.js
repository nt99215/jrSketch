import GameConfig from "../data/GameConfig";

const _defaultViewPort = 1;
const _minimumViewPort = 100;
const _maximumViewPort = 500;
let _currentViewPort = 100;
let _canvas;
export default class Zoom {

    init(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        GameConfig.CURRENT_TOOL = this;
    }
    sizeChange() {
        /*canvas.on('mouse:wheel', function(opt) {
         var delta = opt.e.deltaY;
         var zoom = canvas.getZoom();
         zoom *= 0.999 ** delta;
         if (zoom > 20) zoom = 20;
         if (zoom < 0.01) zoom = 0.01;
         canvas.setZoom(zoom);
         opt.e.preventDefault();
         opt.e.stopPropagation();
     })*/
        // _canvas.setZoom(this.getSize() * 0.01);
        _canvas.zoomToPoint({ x: _canvas.width/2, y: _canvas.height/2 }, this.getSize() * 0.01);
    }

    /**
     *
     * @param size
     */
    setSize(point) {
        console.log(point)
        if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
        _currentViewPort = point;
    }
    getSize() { return _currentViewPort;}

}