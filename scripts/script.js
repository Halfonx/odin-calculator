const buttons = document.querySelectorAll('.display');
const screen = document.querySelector('#screen');
const clearButton = document.querySelector('#clear');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        screen.innerText += button.value;
    })
})

clearButton.addEventListener('click', function () {
    screen.innerText = '';
});