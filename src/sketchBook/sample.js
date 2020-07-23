var Operations = {
    freeDrawing:0,
    selection:1,
    move:2,
    erease:3
};
var Options = {
    EraseBrush:"#ffffff",
    DrawingBrushColor:'#005E7A',
    DrawingBrushWidth:'16',
    PrushPattern:'pencil',
    EraserWidth:'24'
};
var BrushePatterns = {
    Pencil:'pencil',
    Circle:'circle',
    Spray:'spray',
    Pattern:'pattern',
    HLine:'hline',
    VLine:'vline',
    Square:'square',
    Diamond:'diamond',
    Texture:'texture'
};
var app = (function(){
    var application={};
    var canvas = window.__canvas = new fabric.Canvas('board',{defaultCursor :'crosshair',isDrawingMode:true,selection:true});
    fabric.Object.prototype.set({
        transparentCorners: false,
        cornerColor: 'rgba(102,153,255,0.5)',
        cornerSize: 12,
        padding:5});
    canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);
    if (canvas.freeDrawingBrush) {
        canvas.freeDrawingBrush.color = Options.DrawingBrushColor;
        canvas.freeDrawingBrush.width = Options.DrawingBrushWidth;
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: 0,
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: Options.DrawingBrushColor,
        });
    }
    canvas.on('mouse:down',function(e){
    });
    canvas.on('mouse:up',function(e){

    });
    canvas.on('mouse:move',function(e){

    });
    /*  function resizeCanvas() {
        setTimeout(()=>{
            var canvasContainer=document.getElementById('ccontainer');
            canvas.setHeight(canvasContainer.clientHeight);
            canvas.setWidth(canvasContainer.clientWidth);
            canvas.renderAll();
        },500);
    }*/
    application.activateDrawingMode=function(){
        toggleOperation(Operations.freeDrawing);
    }
    application.activateEraseMode = function(){
        toggleOperation(Operations.erease);
    }
    application.activateMousePointerMode = function(){
        toggleOperation(Operations.selection);
    }
    function toggleOperation(operation){
        if(operation === Operations.freeDrawing){
            /*canvas.isDrawingMode=true;
            canvas.selection = false;
            canvas.freeDrawingBrush.color = Options.DrawingBrushColor;
            canvas.freeDrawingBrush.width = Options.DrawingBrushWidth;*/
        }
        else if(operation === Operations.erease){
            canvas.selection = false;
            canvas.freeDrawingBrush.color = Options.EraseBrush;
            canvas.freeDrawingBrush.width = Options.EraserWidth;
        }
        else if(operation === Operations.selection){
            canvas.isDrawingMode = false;
            canvas.selection = true;
        }
    }
    //resize on init
    //resizeCanvas();
    application.canvas=canvas;
    return application;
})();
function freeDrawingButtonclicked(){
    app.activateDrawingMode();
}
function pointerButtonClicked(){
    app.activateMousePointerMode();
}
function eraserButtonClicked(){
    app.activateEraseMode();
}