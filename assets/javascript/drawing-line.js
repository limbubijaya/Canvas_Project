class DrawingLine extends PaintFunction {
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
    this.contextReal.lineCap = lineCap;
    this.contextReal.lineJoin = lineJoin;
    this.contextReal.lineWidth = strokeSize;
    this.contextReal.strokeStyle = colorStroke;
    this.startingX = xCord;
    this.startingY = yCord;
  }
  onDragging([xCord, yCord], event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX, this.startingY);
    this.contextDraft.lineTo(xCord, yCord);
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp([xCord, yCord], event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.startingX, this.startingY);
    this.contextReal.lineTo(xCord, yCord);
    this.contextReal.stroke();
    
  }
  onMouseLeave() {}
  onMouseEnter() {}
}