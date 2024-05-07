const buttons = document.querySelectorAll('.button');
const calculatorBottom = document.querySelector('#calculator_bottom');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(button.value);
    })
})