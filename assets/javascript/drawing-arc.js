class DrawingArc extends PaintFunction{
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.endPointX = 0;
        this.endPointY = 0;
        this.click = 0;
    }

    // Step 1
    onMouseDown([xCord, yCord], event) {
        // Set arc properties
        this.contextDraft.lineCap = lineCap;
        this.contextDraft.lineJoin = lineJoin;
        this.contextDraft.lineWidth = strokeSize;
        this.contextDraft.strokeStyle = colorStroke;
        this.contextReal.lineCap = lineCap;
        this.contextReal.lineJoin = lineJoin;
        this.contextReal.lineWidth = strokeSize;
        this.contextReal.strokeStyle = colorStroke;

        // If it's the first click, stores the starting coordinates
        if (this.click == 0 ){
            this.startingX = xCord;
            this.startingY = yCord;
        }
    }

    // Step 2
    onDragging([xCord, yCord], event) {
        // Draws a line from starting coordinates to current coordinates on the draft canvas
        if(this.click == 0){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.startingX, this.startingY);
            this.contextDraft.lineTo(xCord, yCord);
            this.contextDraft.stroke();

            // Stores the current coordinates as the endpoint
            this.endPointX = xCord;
            this.endPointY = yCord;
        }
    }

    // Step 4
    onMouseMove([xCord, yCord], event) {
        if (this.click == 1){
            // Shows a preview of the arc
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.startingX, this.startingY);
            this.contextDraft.quadraticCurveTo(xCord, yCord, this.endPointX, this.endPointY);
            this.contextDraft.stroke();
        }
    }

    // Step 3 & 5
    onMouseUp([xCord, yCord], event) {   
        if(this.click == 1) {
            // Clears the preview and draws the arc on the real canvas
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.startingX, this.startingY);
            this.contextReal.quadraticCurveTo(xCord, yCord, this.endPointX, this.endPointY);
            this.contextReal.stroke();

            // Saves the drawing and resets the click count
            saveData();
            this.click = 0;
        } else {
            this.click++;
        }
    }
    
    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}
