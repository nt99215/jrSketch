let _tool = null;
let _isDrawingMode = false;

export default class GameConfig {
    static get CURRENT_TOOL() { return _tool};
    static set CURRENT_TOOL(obj) { _tool = obj};

    static get IS_DRAWING_MODE() { return _isDrawingMode};
    static set IS_DRAWING_MODE(bool) { _isDrawingMode = bool};

}