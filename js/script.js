let body = document.querySelector('.js-body');
let themeButton = document.querySelector('.js-theme-button');
let countButton = document.querySelector('.js-count-button');
let pressNumber = document.querySelector('.count-circle');
let counter = 0;
let display = document.querySelector('.js-display');

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
