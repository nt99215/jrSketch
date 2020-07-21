let _tool = null;

export default class GameConfig {
    static get CURRENT_TOOL() { return _tool};
    static set CURRENT_TOOL(obj) { _tool = obj};

}