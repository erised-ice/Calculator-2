const body = document.body;
const themeButton = document.querySelector('.js-theme-button');
const countButton = document.querySelector('.js-count-button');
const pressesNumberOutput = document.querySelector('.count-circle');
const display = document.querySelector('.js-display');
const digitButtons = document.querySelectorAll('.js-button-digit');
const operationButtons = document.querySelectorAll('.js-button-operations');
const clearButton = document.querySelector('.js-clear-button');
const resultButton = document.querySelector('.js-result-button');

/* Меняем тему */
const themeHandler = function () {
  body.classList.toggle('pink-theme');
}

themeButton.addEventListener("click", themeHandler);

/* Счетчик нажатий */
let counter = 0;

const increasePressesNumber = function () {
  counter++;
  pressesNumberOutput.textContent = counter;
}

const handleCountButtonView = function () {
  countButton.classList.toggle('pressed');
}

countButton.addEventListener("click", function (event) {
  event.preventDefault();
  increasePressesNumber();
  handleCountButtonView();
})

/* Калькулятор */

/* storage */
let operation = '';
let firstOperand = '';
let secondOperand = '';
/**/

const getOperationValue = function (element) {
  operation = element.value;
}

for (let operationButton of operationButtons) {
  operationButton.addEventListener("click", function (event) {
    event.preventDefault();
    getOperationValue(operationButton);
  })
}

resultButton.addEventListener("click", function (event) {
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
})

clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  operation = '';
})

for (let digitButton of digitButtons) {
  digitButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (operation !== '') {
      secondOperand = secondOperand + digitButton.value;
      display.value = secondOperand;
    } else {
      firstOperand = firstOperand + digitButton.value;
      display.value = firstOperand;
    }
  })
}
