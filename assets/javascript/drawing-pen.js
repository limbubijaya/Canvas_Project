class DrawingPen extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }

  onMouseDown([xCord, yCord], event) {
    // Set pen properties
    this.contextReal.lineCap = lineCap;
    this.contextReal.lineJoin = lineJoin;
    this.contextReal.lineWidth = strokeSize;
    this.contextReal.strokeStyle = colorStroke;

    // Draws a point
    this.contextReal.beginPath();
    this.contextReal.arc(xCord, yCord, 0, 0, 2 * Math.PI);
    this.contextReal.stroke();
  }

  onDragging([xCord, yCord], event) {
    // Draws while dragging
    this.contextReal.lineTo(xCord, yCord);
    this.contextReal.stroke();
  }

  onMouseMove([xCord, yCord], event) {}

  onMouseUp([xCord, yCord], event) {
    // Saves the drawing
    saveData();
  }

  onMouseLeave([xCord, yCord], event) {}
  onMouseEnter([xCord, yCord], event) {}
}