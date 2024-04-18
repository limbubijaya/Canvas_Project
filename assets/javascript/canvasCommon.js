// Get the canvas elements and their contexts
let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");

// Initialize variables
let currentFunction;
let dragging = false;
let colorStroke = "black";
let colorFill = "white";
let canvasColor = "white";
let lineCap = "round";
let lineJoin = "round";
let strokeSize = 10;

// Set initial canvas & div size based on window dimensions
var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvasReal.width = window_width - 44;
canvasDraft.width = window_width - 44;
canvasReal.height = window_height - 68;
canvasDraft.height = window_height - 68;
$(".leftArea").css("height", window_height - 65);
$(".topArea").css("width", window_width);

// Update canvas & div size when window is resized
$(window).on("resize", function () {
  window_height = window.innerHeight;
  window_width = window.innerWidth;

  canvasReal.width = window_width - 44;
  canvasDraft.width = window_width - 44;
  canvasReal.height = window_height - 68;
  canvasDraft.height = window_height - 68;
  $(".leftArea").css("height", window_height - 65);
  $(".topArea").css("width", window_width);
});

// Mouse Events
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

// Template for all of the paint functions
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
};