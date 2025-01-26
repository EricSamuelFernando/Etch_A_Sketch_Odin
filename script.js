const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset-button");
const clearButton = document.querySelector("#clear");

  
// Function to create the grid
function createGrid(squaresPerSide) {
    container.innerHTML = "";  
    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${100 / squaresPerSide}%`;
        square.style.height = `${100 / squaresPerSide}%`;
        container.appendChild(square);

        // Add hover effect on each square
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";  
        });
    }
}

// Event listener for reset button
resetButton.addEventListener("click", () => {
    const usersquares = parseInt(prompt("Enter number of squares per side (1-100):"), 10);
    if (!isNaN(usersquares) && usersquares > 0 && usersquares <= 100) {
        createGrid(usersquares);  
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});


clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";  
    });
});

createGrid(16);

