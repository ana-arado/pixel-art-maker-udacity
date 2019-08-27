const grid = document.querySelector('#pixelCanvas');
let color = document.querySelector('#colorPicker').value;
const size = document.querySelector('#sizePicker');


function makeGrid(e){
  grid.innerHTML = "";
  e.preventDefault();
  // Selecting size input subimitted for the grid.
  // Inside the function because only this function needs access to it.
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  //Creating the grid
  for (h = 0 ; h < +height ; h++){
    const gridRow = document.createElement('tr');
    for (w = 0; w < +width ; w++){
      const gridBlock = document.createElement('td');
      gridRow.appendChild(gridBlock);
    }
    grid.appendChild(gridRow);
  }
}


//Listening for when the numbers are submitted.
size.addEventListener('submit', makeGrid);


//Allowing color change
function newColor(){
  color = document.querySelector('#colorPicker').value;
  //Changing the color of the css variable
  document.documentElement.style.setProperty('--color-selected', color);
}


function coloring(e){
  if(e.target.nodeName === 'TD'){
    e.target.style.backgroundColor = color;
  }
}


//Checking for color change
document.querySelector('#colorPicker').addEventListener('change', newColor );


//Painting
grid.addEventListener('click', coloring);
