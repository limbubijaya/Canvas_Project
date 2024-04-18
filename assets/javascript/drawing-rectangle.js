class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        
    }

    onMouseDown([xCord, yCord], event) {
        // Set rectangle properties
        this.contextDraft.lineCap = lineCap;
        this.contextDraft.lineJoin = lineJoin;
        this.contextDraft.lineWidth = strokeSize;
        this.contextDraft.strokeStyle = colorStroke;
        this.contextDraft.fillStyle = colorFill;
        this.contextReal.lineCap = lineCap;
        this.contextReal.lineJoin = lineJoin;
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.strokeStyle = colorStroke;
        this.contextReal.fillStyle = colorFill;

        // Stores the starting coordinates
        this.startingX = xCord;
        this.startingY = yCord;
    }

    onDragging([xCord, yCord], event) {
        // Calculates the width and height of the rectangle
        let width = this.startingX - xCord;
        let height = this.startingY - yCord;

        // Shows a preview of the rectangle
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.rect(this.startingX, this.startingY, -width, -height);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove([xCord, yCord], event) {}

    onMouseUp([xCord, yCord], event) {
        // Calculates the width and height of the rectangle
        let width = this.startingX - xCord;
        let height = this.startingY - yCord;

        // Clears the preview and draws the rectangle on the real canvas
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath()
        this.contextReal.rect(this.startingX, this.startingY, -width, -height);
        this.contextReal.fill();
        this.contextReal.stroke();

        // Saves the drawing
        saveData();
    }

    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}