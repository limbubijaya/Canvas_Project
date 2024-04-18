class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown([xCord, yCord], event) {
        // Set circle properties
        this.contextDraft.lineCap = 'round';
        this.contextDraft.lineWidth = strokeSize;
        this.contextDraft.strokeStyle = colorStroke;
        this.contextDraft.fillStyle = colorFill;
        this.contextReal.lineCap = 'round';
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.strokeStyle = colorStroke;
        this.contextReal.fillStyle = colorFill;
        
        // Stores the starting coordinates
        this.startingX = xCord;
        this.startingY = yCord;
    }

    onDragging([xCord, yCord], event) {
        // Calculate distance and radius
        let distanceX = this.startingX - xCord;
        let distanceY = this.startingY - yCord;
        let radius = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Shows a preview of the circle
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.startingX, this.startingY, radius, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove([xCord, yCord], event) {}

    onMouseUp([xCord, yCord], event) {
        // Calculate distance and radius
        let distanceX = this.startingX - xCord;
        let distanceY = this.startingY - yCord;
        let radius = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Clears the preview and draws the circle on the real canvas
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.startingX, this.startingY, radius, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        
        // Saves the drawing
        saveData();
    }

    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}