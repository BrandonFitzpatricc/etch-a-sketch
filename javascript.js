const gridContainer = document.querySelector("#grid-container");
// Starting grid: 16x16
const initialSquaresPerSide = 16;
createGrid(initialSquaresPerSide);

function createGrid(squaresPerSide) {
    // The width property must be converted from a string ("{value}px") to a number.
    // Alternatively height could be used, since the container width and height are the same.
    // All measurements are in pixels.
    const gridMeasurements = Number(window
                            .getComputedStyle(gridContainer)
                            .getPropertyValue("width")
                            .slice(0, -2));

    const totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.style.width = gridMeasurements / squaresPerSide;
        square.style.height = gridMeasurements / squaresPerSide;

        square.addEventListener("mouseover", () => {
            if(!square.style.backgroundColor) {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`; 
                square.style.opacity = 0.1;
            } else {
                square.style.opacity = Number(square.style.opacity) + 0.1;
            }
        });

        gridContainer.appendChild(square);
    }
}