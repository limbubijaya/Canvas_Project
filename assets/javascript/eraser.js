class Eraser extends PaintFunction {
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    onMouseDown([xCord, yCord], event) {
        // Set eraser properties
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.fillStyle = canvasColor;

        // Erases a point
        this.contextReal.beginPath();
        this.contextReal.rect(xCord, yCord, this.contextReal.lineWidth, this.contextReal.lineWidth);
        this.contextReal.fill();
    }

    onDragging([xCord, yCord], event) {
        // Erases while dragging
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.beginPath();
        this.contextReal.rect(xCord, yCord, this.contextReal.lineWidth, this.contextReal.lineWidth);
        this.contextReal.fill();
    }

    onMouseMove([xCord, yCord], event) {}

    onMouseUp([xCord, yCord], event) {
        // Saves the drawing
        saveData();
    }

    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}