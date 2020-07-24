let _tool = null;
let _isDrawingMode = false;
let _isLineDrawing = false;
let _selectedColor = '';
let _selectedSize = 0;

export default class GameConfig {
    static get CURRENT_TOOL() { return _tool};
    static set CURRENT_TOOL(obj) { _tool = obj};

    static get IS_DRAWING_MODE() { return _isDrawingMode};
    static set IS_DRAWING_MODE(bool) { _isDrawingMode = bool};

    static get IS_LINE_DRAWING() { return _isLineDrawing};
    static set IS_LINE_DRAWING(bool) { _isLineDrawing = bool};

    static get SELECTED_COLOR() { return _selectedColor};
    static set SELECTED_COLOR(str) { _selectedColor = str};

    static get SELECTED_SIZE() { return _selectedSize};
    static set SELECTED_SIZE(num) { _selectedSize = num};

}