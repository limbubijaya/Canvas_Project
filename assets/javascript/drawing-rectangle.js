class DrawingRectangle extends PaintFunction {
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
    let a = this.startingX - xCord;
    let b = this.startingY - yCord;
    let c = Math.sqrt( a*a + b*b );
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.rect(this.startingX, this.startingY, -a, -b);
    this.contextDraft.fill();
    this.contextDraft.stroke();
    }

    onMouseMove() {}

    onMouseUp([xCord, yCord], event) {
    let a = this.startingX - xCord;
    let b = this.startingY - yCord;
    let c = Math.sqrt( a*a + b*b );
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath()
    this.contextReal.rect(this.startingX, this.startingY, -a, -b);
    this.contextReal.fill();
    this.contextReal.stroke();
    }

    onMouseLeave() {}
    onMouseEnter() {}
}