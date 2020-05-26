function generateGrid(size = 16) {
  grid.innerHTML = null;
  let gridSize = size ** 2;
  for (gridSize; gridSize; gridSize--) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    toggleBorder(cell);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.appendChild(cell);
  }
}

function toggleBorder(cell) {
  if(border.checked) { cell.classList.add("cell--border"); }
  else { cell.classList.remove("cell--border"); }
}

function colorCell(cell) {
  cell.addEventListener("mouseover", $event => {
    if (random.checked) {
      $event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    } else {
      $event.target.style.backgroundColor = colorPicker.value
    }
  })
}

function addColorCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(colorCell);
}

function init() {
  generateGrid();
  addColorCells();
}

const grid = document.querySelector("#grid");
const colorPicker = document.querySelector("#color-picker");
const colorValue = document.querySelector("#color-value");
const size = document.querySelector("#size");
const random = document.querySelector("#random");
const border = document.querySelector("#border");

init()

size.onclick = function () {
  do { var newSize = parseInt(prompt("Enter a size from 1 to 128"));} 
  while (isNaN(newSize) || newSize > 128 || newSize < 1)
  generateGrid(newSize);
  addColorCells()
}

border.onchange = function() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(toggleBorder);
}

colorPicker.onchange = function () {
  colorValue.innerHTML = colorPicker.value;
  colorValue.style.color = colorPicker.value;
}