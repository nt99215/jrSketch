let _tool = null;
let _isDrawingMode = false;
let _isLineDrawing = false;

export default class GameConfig {
    static get CURRENT_TOOL() { return _tool};
    static set CURRENT_TOOL(obj) { _tool = obj};

    static get IS_DRAWING_MODE() { return _isDrawingMode};
    static set IS_DRAWING_MODE(bool) { _isDrawingMode = bool};

    static get IS_LINE_DRAWING() { return _isLineDrawing};
    static set IS_LINE_DRAWING(bool) { _isLineDrawing = bool};

}