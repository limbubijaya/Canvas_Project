class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        
    }

    onMouseDown([xCord, yCord], event) {
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
        this.startingX = xCord;
        this.startingY = yCord;
    }

    onDragging([xCord, yCord], event) {
        let distanceX = this.startingX-xCord;
        let distanceY = this.startingY-yCord;
        let radius = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.startingX, this.startingY, radius, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove() {}

    onMouseUp([xCord, yCord], event) {
        let distanceX = this.startingX-xCord;
        let distanceY = this.startingY-yCord;
        let radius = Math.sqrt(distanceX*distanceX + distanceY*distanceY);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.startingX, this.startingY, radius, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
    }

    onMouseLeave() {}
    onMouseEnter() {}
}