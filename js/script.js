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

for (let digitButton of digitButtons) {
  digitButton.onclick = function () {
    display.value = display.value + digitButton.value;
  }
}

clearButton.onclick = function () {
  display.value = 0;
}
