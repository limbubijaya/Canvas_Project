class Eraser extends PaintFunction {
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    onMouseDown([xCord, yCord], event) {
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.clearRect(xCord, yCord, this.contextReal.lineWidth, this.contextReal.lineWidth);
    }

    onDragging([xCord, yCord], event) {
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.clearRect(xCord, yCord, this.contextReal.lineWidth, this.contextReal.lineWidth);
    }

    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}