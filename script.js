const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");
const clearButton = document.querySelector("#clear");
function createGrid(squaresPerSide) {
    // Clear the container
    container.innerHTML = "";



    // Generate squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${100/squaresPerSide}%`;
        square.style.height = `${100/squaresPerSide}%`;
        container.appendChild(square);
        square.addEventListener('mouseover',()=>{
            square.classList.add("hovered");
        });
    }
}

// Event listener for reset button
resetButton.addEventListener("click", () => {
    const squaresPerSide = parseInt(prompt("Enter number of squares per side (1-100):"), 10);

    
    if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});
//Event Listener for Clear Button
clearButton.addEventListener("click",()=>{
    const sq = document.querySelectorAll(".square");
    sq.forEach(square =>{
    square.style.backgroundColor = "white";
        });
});


