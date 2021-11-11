let body = document.querySelector('.js-body');
let themeButton = document.querySelector('.js-theme-button');
let countButton = document.querySelector('.js-count-button');
let pressNumber = document.querySelector('.count-circle');
let counter = 0;
let display = document.querySelector('.js-display');
let digitButtons = document.querySelectorAll('.js-button-digit');
let operationButtons = document.querySelectorAll('.js-button-operations');
let clearButton = document.querySelector('.js-clear-button');
let resultButton = document.querySelector('.js-result-button');

/* Меняем тему */
themeButton.onclick = function () {
  body.classList.toggle('pink-theme');
}

/* Счетчик нажатий */
countButton.onclick = function () {
  counter++;
  pressNumber.textContent = counter;
  countButton.classList.toggle('pressed');
}

/* Калькулятор */

/* storage */
let operation = '';
let firstOperand = '';
let secondOperand = '';
/**/

for (let operationButton of operationButtons) {
  operationButton.onclick = function (event) {
    event.preventDefault();
    operation = operationButton.value;
  }
}

resultButton.onclick = function (event) {
  event.preventDefault();
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  
  if (operation === 'sum') {
    display.value = firstOperand + secondOperand;
  } else if (operation === 'minus') {
    display.value = firstOperand - secondOperand;
  } else if (operation === 'divide') {
    display.value = firstOperand / secondOperand;
  } else if (operation === 'multiply') {
    display.value = firstOperand * secondOperand;
  }
  
  firstOperand = '';
  secondOperand = '';
  operation = '';
}

clearButton.onclick = function (event) {
  event.preventDefault();
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  operation = '';
}

for (let digitButton of digitButtons) {
  digitButton.onclick = function (event) {
    event.preventDefault();
    
    if (operation !== '') {
      secondOperand = secondOperand + digitButton.value;
      display.value = secondOperand;
    } else {
      firstOperand = firstOperand + digitButton.value;
      display.value = firstOperand;
    }
  }
}
