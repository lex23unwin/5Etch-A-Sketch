let container = document.querySelector(".container");
let slider = document.querySelector("#size-slider");

slider.addEventListener("input", () => {
    let sliderValue = slider.value;
    clearGrid();
    createGrid(sliderValue);
})

function createGrid(sliderValue)
{
    for (let i = 0; i < (sliderValue * sliderValue); i++)
    {
        let containerSquare = document.createElement("div")
        containerSquare.classList.add("containerSquare")
        container.setAttribute("style", `grid-template-columns: repeat(${sliderValue}, 2fr);
        grid-template-rows: repeat(${sliderValue}, 2fr);`)
        containerSquare.addEventListener("mouseover", () => {
            containerSquare.style.backgroundColor = "black"
        })
        container.appendChild(containerSquare)
    }

}

function clearGrid()
{
    while (container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
}







createGrid();




