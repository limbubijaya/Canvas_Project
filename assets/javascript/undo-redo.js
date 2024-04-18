// Initialize variables
let undoRedoArr = [];
let index = -1;

$("#undo").on("click", Undo);
$("#redo").on("click", Redo);

// Saves Shape
function saveData() {
    index++;
    undoRedoArr.splice(index, undoRedoArr.length - index, canvasReal.toDataURL());
}

function Undo() {
    if (index >= 0) {
        index--;
        const canvasPic = new Image();
        canvasPic.src = undoRedoArr[index];
        canvasPic.onload = function () {
            contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            contextReal.drawImage(canvasPic, 0, 0);
        };
    }
}

function Redo() {
    if (index < undoRedoArr.length-1) {
        index++;
        const canvasPic = new Image();
        canvasPic.src = undoRedoArr[index];
        canvasPic.onload = function () {
            contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            contextReal.drawImage(canvasPic, 0, 0);
        };
    }
}