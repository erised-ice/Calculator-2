const $buttonsDigitCollection = document.querySelectorAll('.js-button-digit');
function getValue($something) {
    return $something.value;
};

const $inputDisplay = document.querySelector('.js-display');

let $operand1 = $inputDisplay.value;
$buttonsDigitCollection.forEach(function($element) {
    $element.addEventListener('click', function(event) {
        event.preventDefault();
        $inputDisplay.value += getValue($element);
    });
});

console.log($operand1);