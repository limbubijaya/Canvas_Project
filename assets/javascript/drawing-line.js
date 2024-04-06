class DrawingLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown([xCord, yCord], event) {
      this.contextReal.fillStyle = colorFill;
      this.contextDraft.fillStyle = colorFill;
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

console.log("working");