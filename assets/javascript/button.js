//** Clear Button **//
$("#home").on("click", function(){
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    saveData();
});

//** Save Image Button **//
$("#save").on("click", function() {
    // Draws the real canvas onto the canvas draft
    contextDraft.drawImage(canvasReal, 0, 0);

    let dataURL = canvasDraft.toDataURL();
    let link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas.png";
    link.click();
});

//** Brush/Shape Settings **//
$('#slider_value').html("10");
// Updates the stroke size value based on the slider
$(document).on('input', '#slider',function(e){
    strokeSize = e.target.value;
    $('#slider_value').html(e.target.value);
});

// Sets the line cap and line join to create a round stroke
$("#strokeCircle").on("click", function(){
    lineCap = "round";
    lineJoin = "round";
    $('#strokeSquare').css("background-color", "#535353");
    $('#strokeCircle').css("background-color", "white");
});

// Set the line cap and line join to create a square stroke
$("#strokeSquare").on("click", function(){
    lineCap = "square";
    lineJoin = "miter";
    $('#strokeCircle').css("background-color", "#535353");
    $('#strokeSquare').css("background-color", "white");
});

//** Tools **//
$( document ).ready(function() {
    currentFunction = new DrawingPen(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#pen').css("background-color", "#383838");
});

// Set the current drawing function to Pen
$("#pen").on("click", function(){
    currentFunction = new DrawingPen(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#pen').css("background-color", "#383838");
});

// Set the current drawing function to Line
$("#line").on("click", function(){
    currentFunction = new DrawingLine(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#line').css("background-color", "#383838");
});

// Set the current drawing function to Arc
$("#arc").on("click", function(){
    currentFunction = new DrawingArc(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#arc').css("background-color", "#383838");
});

// Set the current drawing function to Rectangle
$("#rectangle").on("click", function(){
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#rectangle').css("background-color", "#383838");
});

// Set the current drawing function to Circle
$("#circle").on("click", function(){
    currentFunction = new DrawingCircle(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#circle').css("background-color", "#383838");
});

// Set the current drawing function to Eraser
$("#eraser").on("click", function(){
    currentFunction = new Eraser(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#eraser').css("background-color", "#383838");
});

$("#fill").on("click", function(){
    currentFunction = new BucketFill(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#fill').css("background-color", "#383838");
});

//** Color Settings **//
// Updates the fill color value based on the color picker
$("#colorPickerFill").on("input", function(e){
    colorFill = e.target.value;
});

// Updates the stroke color value based on the color picker
$("#colorPickerStroke").on("input", function(e){
    colorStroke = e.target.value;
});

