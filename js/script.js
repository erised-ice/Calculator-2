let body = document.querySelector('.js-body');
let themeButton = document.querySelector('.js-theme-button');
let countButton = document.querySelector('.js-count-button');
let pressNumber = document.querySelector('.count-circle');
let counter = 0;
let display = document.querySelector('.js-display');
let digitButtons = document.querySelectorAll('.js-button-digit');
let clearButton = document.querySelector('.js-clear-button');

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

/* Вывод цифр */

/*for (let digitButton of digitButtons) {
  digitButton.onclick = function (event) {
    event.preventDefault();
    display.value = display.value + digitButton.value;
  }
}

clearButton.onclick = function () {
  display.value = 0;
}
*/

/* Сумма */

/* storage */
let operation = null;
let firstOperand = '';
let secondOperand = '';
let result = '';
/**/
let sumButton = document.querySelector('.js-button-sum');

sumButton.onclick = function (event) {
  event.preventDefault();
  operation = sumButton.value;
}

resultButton = document.querySelector('.result');
resultButton.onclick = function (event) {
  event.preventDefault();
  result = 'result';
  display.value = firstOperand + secondOperand;
}

for (let digitButton of digitButtons) {
  digitButton.onclick = function (event) {
    event.preventDefault();
    
    if (operation === 'sum') {
      secondOperand = secondOperand + digitButton.value;
      display.value = secondOperand;
    } else {
      firstOperand = firstOperand + digitButton.value;
      display.value = firstOperand;
    }
  }
}
