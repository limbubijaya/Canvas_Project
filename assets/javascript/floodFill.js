class BucketFill extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown([xCord, yCord], event) {
        // Get the target color and convert the fill color to RGBA format
        const targetColor = this.contextReal.getImageData(xCord, yCord, 1, 1).data;
        const fillColor = hexToRgba(colorFill);

        // Initialize visited array and stack
        const visited = new Array(canvasReal.width * canvasReal.height).fill(false);
        const stack = [[xCord, yCord]];

        // Performs flood fill
        while (stack.length > 0) {
        const [x, y] = stack.pop();
        const index = y * canvasReal.width + x;

        // Skips the fill if the pixel is out of canvas bounds or already visited
        if (
            x < 0 ||
            x >= canvasReal.width ||
            y < 0 ||
            y >= canvasReal.height ||
            visited[index]
        ) {
            continue;
        }

        visited[index] = true;

        // Check if the pixel has the same color as the target color
        if (isSameColor(x, y, targetColor, this.contextReal)) {
            setPixelColor(x, y, fillColor, this.contextReal);

            // Pushes neighboring pixels to the stack
            stack.push([x - 1, y]);
            stack.push([x + 1, y]);
            stack.push([x, y - 1]);
            stack.push([x, y + 1]);
        }
        }

        // Function to check if the pixel has the same color as the target color
        function isSameColor(x, y, targetColor, context) {
        const pixelColor = context.getImageData(x, y, 1, 1).data;
        return (
            pixelColor[0] === targetColor[0] &&
            pixelColor[1] === targetColor[1] &&
            pixelColor[2] === targetColor[2] &&
            pixelColor[3] === targetColor[3]
        );
        }

        // Function to set the color of a pixel
        function setPixelColor(x, y, fillColor, context) {
            context.fillStyle = fillColor;
            context.fillRect(x, y, 1, 1);
        }

        // Saves the drawing
        saveData();
    }

    onDragging([xCord, yCord], event) {}
    onMouseMove([xCord, yCord], event) {}
    onMouseUp([xCord, yCord], event) {}
    onMouseLeave([xCord, yCord], event) {}
    onMouseEnter([xCord, yCord], event) {}
}

// Function to convert HEX color to RGBA format
function hexToRgba(hexColor) {
    const bigint = parseInt(hexColor.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, 255)`;
}