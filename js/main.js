let currentVal = document.querySelector('h1');
let total = 0;  

document.querySelector('#add').addEventListener('click', addFunction)
document.querySelector('#minus').addEventListener('click', minusFunction)

function addFunction(evt) {
  let input = document.querySelector('.input').value;
  total += parseInt(input)
  currentVal.textContent = total
}

function minusFunction(evt) {
  let input = document.querySelector('.input').value;
  total -= parseInt(input)
  currentVal.textContent = total    
}