let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
let colorStroke = "black";
let colorFill = "white";
let lineCap = "round";
let lineJoin = "round";
$('#slider_value').html("10");
let strokeSize = 10; //size of pen [stroke width]
let undoRedoArr = new Array();
let index = -1;

var mouse = {x: 0, y: 0};
var previous = {x: 0, y: 0};

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvasReal.width = window_width-44;
canvasDraft.width = window_width-44;
canvasReal.height = window_height-68;
canvasDraft.height = window_height-68;

$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});
  
$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
};

$("#colorPickerFill").on("input", function(e){
  colorFill = e.target.value;
});

$("#colorPickerStroke").on("input", function(e){
  colorStroke = e.target.value;
});

$(document).on('input', '#slider',function(e){
  strokeSize = e.target.value;
  $('#slider_value').html(e.target.value);
});


