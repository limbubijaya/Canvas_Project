class DrawingArc extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.endPointX = 0;
        this.endPointY = 0;
        this.click = 0;
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
        if (this.click == 0 ){
            this.startingX = xCord;
            this.startingY = yCord;
        }
    }

    onDragging([xCord, yCord], event) {
        if(this.click == 0){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startingX, this.startingY);
        this.contextDraft.lineTo(xCord, yCord);
        this.contextDraft.stroke();
        this.endPointX = xCord;
        this.endPointY = yCord;
        }
    }

    onMouseMove([xCord, yCord], event) {
        if (this.click == 1){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.startingX, this.startingY);
            this.contextDraft.quadraticCurveTo(xCord, yCord, this.endPointX, this.endPointY);
            this.contextDraft.stroke();
        }
    }

    onMouseUp([xCord, yCord], event) {   
        if(this.click == 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.startingX, this.startingY);
            this.contextReal.quadraticCurveTo(xCord, yCord, this.endPointX, this.endPointY);
            this.contextReal.stroke();
            saveData();
            this.click = 0;
        } else {
            this.click++;
        }
    }
    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}
