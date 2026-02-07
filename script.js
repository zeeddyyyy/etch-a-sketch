const container = document.querySelector('#container');
const gridSize = 16;
for(let i = 0; i < gridSize * gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}



addHoverEffect();

function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

