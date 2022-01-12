const body = document.body;
const themeButton = document.querySelector('.js-theme-button');
const countButton = document.querySelector('.js-count-button');
const pressesCounterOutput = document.querySelector('.count-circle');
const display = document.querySelector('.js-display');
const digitButtons = document.querySelectorAll('.js-button-digit');
const operationButtons = document.querySelectorAll('.js-button-operations');
const clearButton = document.querySelector('.js-clear-button');
const resultButton = document.querySelector('.js-result-button');

/* Счетчик нажатий */
let counter = 0;

/* Меняем тему */
const setTheme = () => body.classList.toggle('pink-theme');

themeButton.addEventListener("click", setTheme);

/* Счетчик нажатий */

const increasePressesCounterValue = () => {
  counter++;
  pressesCounterOutput.textContent = counter;
}

const handleCountButtonView = () => countButton.classList.toggle('pressed');

const handleCountButtonClick = () => {
  increasePressesCounterValue();
  handleCountButtonView();
}

countButton.addEventListener("click", handleCountButtonClick);

/* Калькулятор */

/* storage */
let operation = '';
let firstOperand = '';
let secondOperand = '';
/**/

const getOperationValue = event => operation = event.target.value;

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", getOperationValue);
})

const handleClickDigitButton = event => {
  if (operation !== '') {
    secondOperand = secondOperand + event.target.value;
    display.value = secondOperand;
  } else {
    firstOperand = firstOperand + event.target.value;
    display.value = firstOperand;
  }
}

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", handleClickDigitButton);
});

const handleClickResultButton = () => {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  switch (operation) {
    case 'sum':
      display.value = firstOperand + secondOperand;
      break;
    case 'minus':
      display.value = firstOperand - secondOperand;
      break;
    case 'divide':
      display.value = firstOperand / secondOperand;
      break;
    case 'multiply':
      display.value = firstOperand * secondOperand;
      break;
    default: return;
  }
  
  firstOperand = '';
  secondOperand = '';
  operation = '';
}

resultButton.addEventListener("click", handleClickResultButton);

const resetCalculator = () => {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  operation = '';
};

clearButton.addEventListener("click", resetCalculator)
