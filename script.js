let container = document.querySelector(".container");
let slider = document.querySelector("#size-slider");
let resetButton = document.querySelector(".reset")
let blackButton = document.querySelector(".black")
let rgbButton = document.querySelector(".rgb")
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

slider.addEventListener("input", () => {
    clearGrid();
    createGrid(slider.value);
})

function createGrid(sliderValue)
{
    for (let i = 0; i < (sliderValue * sliderValue); i++)
    {
        let containerSquare = document.createElement("div")
        containerSquare.classList.add("containerSquare")
        containerSquare.addEventListener("mouseover", () => {
            containerSquare.style.backgroundColor = "black"
        })
        container.appendChild(containerSquare)
    }
    container.setAttribute("style", `grid-template-columns: repeat(${sliderValue}, 2fr);
        grid-template-rows: repeat(${sliderValue}, 2fr);`)

}

function clearGrid()
{
    while (container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
}

resetButton.addEventListener("click", () => {
    let allSquares = Array.from(container.children)
    allSquares.forEach( (eachSquare) => {
        eachSquare.style.backgroundColor = "#ddd";
    })
})

blackButton.addEventListener("click", () => {
    clearGrid();
    createGrid(slider.value)
    let allSquares = Array.from(container.children)
    allSquares.forEach( (eachSquare) => {
        eachSquare.addEventListener("mouseover", () => {
            eachSquare.style.backgroundColor = "black"
        })
    })
})

rgbButton.addEventListener("click", () => {
    clearGrid();
    createGrid(slider.value)
    let allSquares = Array.from(container.children)
    allSquares.forEach( (eachSquare) => {
        eachSquare.addEventListener("mouseover", () => {
            eachSquare.style.backgroundColor = 
                colors[Math.floor(Math.random() * colors.length)]
        })
    })
})



createGrid(slider.value);



