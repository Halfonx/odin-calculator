const buttons = document.querySelectorAll('.display');
const calculatorBottom = document.querySelector('#calculator_bottom');
const screen = document.querySelector('#screen');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(button.value);
        screen.innerText = button.value;
    })
})