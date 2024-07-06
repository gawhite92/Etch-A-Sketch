let selectedColor = "black"; //Default Pen Colour

function randomColorSelector(delay) {
    setInterval(()=> {
       console.log(colorWheel[(colorChoice = Math.floor(Math.random() * 7))]);
    }, delay)
}
 
const colorWheel = ["black", "white", "red", "green", "blue", "pink", "yellow"]


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

const redPen = document.querySelector("#redPen");
redPen.addEventListener("click", () => {
    return selectedColor = "red";
    })

const greenPen = document.querySelector("#greenPen");
greenPen.addEventListener("click", () => {
    return selectedColor = "green";
    })

const bluePen = document.querySelector("#bluePen");
bluePen.addEventListener("click", () => {
    return selectedColor = "blue";
    })

const blackPen = document.querySelector("#blackPen");
blackPen.addEventListener("click", () => {
     return selectedColor = "black";
     })

const whitePen = document.querySelector("#whitePen");
whitePen.addEventListener("click", () => {
    return selectedColor = "white";
    })

const randomColorPen = document.querySelector("#randomColorPen");
randomColorPen.addEventListener("click", () => {
    randomColorSelector(50)
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
    while (gridContainer.firstChild) {  //CLEARS ANY EXISTING GRID
        gridContainer.removeChild(gridContainer.firstChild);}
    for(let i = 0; i < (userChoice ** 2); i++) {
    let cellSize = (900 / userChoice); //Below adjusts cell size and styles
    let cell = document.createElement("div");
    cell.style.width = `${cellSize}` + "px";
    cell.style.height = `${cellSize}` + "px";
    cell.classList.add("cellRedTheme")
    gridContainer.appendChild(cell); //Creates requested number of cells
    }  
    hoverColor();  
}



//MOUSE OVER EFFECT
function hoverColor(){
const cells = gridContainer.querySelectorAll("div");
cells.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `${selectedColor}`;
    });
  });
}