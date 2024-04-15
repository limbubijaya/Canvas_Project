$("#undo").on("click", function(){
    Undo();
});

$("#redo").on("click", function(){
    Redo();
});

function saveData() {
    index++;
    if (index < undoRedoArr.length) { 
        undoRedoArr.length = index; 
    }
    let lastMove = canvasReal.toDataURL()
    undoRedoArr.push(lastMove);
    console.log(undoRedoArr);
}

function Undo() {
    if (index >= 0) {
        index--;
        var canvasPic = new Image();
        canvasPic.src = undoRedoArr[index];
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    }
}

function Redo() {
    if (index < undoRedoArr.length-1) {
        index++;
        var canvasPic = new Image();
        canvasPic.src = undoRedoArr[index];
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}



