
createGrid(16);

const button = document.createElement('button');
button.classList.add("change-button");
button.textContent = "change size";
button.addEventListener("click", () => {
    let input = prompt("Insert the size of the grid (max 100)");
    let size = parseInt(input);
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("This number is not allowed");
        return;
    }
    createGrid(size);
})
document.body.prepend(button);


function createGrid(size){
    container.innerHTML = "";
    const sizeInPercent = 100 / size;
    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add('square');
        div.style.width = `${sizeInPercent}%`;
        div.style.height = `${sizeInPercent}%`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    }
}





