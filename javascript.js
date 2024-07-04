///////////////////////////////////////////////////////
//BUTTONS

const clearButton = document.querySelector("#clearButton"); //Clear button
clearButton.addEventListener("click", () => {
    const gridContainer = document.getElementById("gridContainer");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
})

const gridCountButton = document.querySelector("#gridCountButton"); //Grid # button
gridCountButton.addEventListener("click", () => {
    promptUser();
})

const colorRedButton = document.querySelector("#colorRedButton"); //Red button
colorRedButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.className = 'cellRedTheme';
    })
})

const colorBlueButton = document.querySelector("#colorBlueButton"); //Blue button
colorBlueButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.className = 'cellBlueTheme';
    })
})

const colorGreenButton = document.querySelector("#colorGreenButton"); //Green button
colorGreenButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.className = 'cellGreenTheme';
    })
})

const colorWhiteButton = document.querySelector("#colorWhiteButton"); //White button
colorWhiteButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.className = 'cellWhiteTheme';
    })
})

const colorBlackButton = document.querySelector("#colorBlackButton"); //White button
colorBlackButton.addEventListener("click", () => {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.className = 'cellBlackTheme';
    })
})


///////////////////////////////////////////////////////

function promptUser(){
    for(let i = 0; i < Infinity; i++) {
        let userChoice = prompt("Grid size? (Squared)")
        if (userChoice === null) {
            alert('Cancelled');
            return        
        } else if (userChoice >1 && userChoice <101) {
            createGrid(userChoice);   
            return;
        } else {
            alert("Choice must be between 1 and 100")
        }
    }
} 

function createGrid(userChoice){
    for(let i = 0; i < (userChoice ** 2); i++) {
    let cellSize = (900 / userChoice); //Below adjusts cell size and styles
    let cells = document.createElement("div");
    cells.style.width = `${cellSize}` + "px";
    cells.style.height = `${cellSize}` + "px";
    cells.classList.add("cellRedTheme")
    gridContainer.appendChild(cells); //Creates requested number of cells
    }    
}