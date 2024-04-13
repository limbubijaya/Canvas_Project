$("#home").on("click", function(){
    location.reload();
});

$("#strokeCircle").on("click", function(){
    lineCap = "round";
    lineJoin = "round";
    $('#strokeSquare').css("background-color", "#535353");
    $('#strokeCircle').css("background-color", "white");
});

$("#strokeSquare").on("click", function(){
    lineCap = "square";
    lineJoin = "miter";
    $('#strokeCircle').css("background-color", "#535353");
    $('#strokeSquare').css("background-color", "white");
});

$("#pen").on("click", function(){
    currentFunction = new DrawingPen(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#pen').css("background-color", "#383838");
});

$("#line").on("click", function(){
    currentFunction = new DrawingLine(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#line').css("background-color", "#383838");
});

$("#arc").on("click", function(){
    currentFunction = new DrawingArc(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#arc').css("background-color", "#383838");
});

$("#rectangle").on("click", function(){
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#rectangle').css("background-color", "#383838");
});

$("#circle").on("click", function(){
    currentFunction = new DrawingCircle(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#circle').css("background-color", "#383838");
});

$("#eraser").on("click", function(){
    currentFunction = new Eraser(contextReal, contextDraft);
    $('.strategies').css("background-color", "#535353");
    $('#eraser').css("background-color", "#383838");
});


