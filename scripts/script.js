class Calculator {
    constructor(previousNumberText, currentNumberText) {
        this.previousNumberText = previousNumberText;
        this.currentNumberText = currentNumberText;
        this.clear();
    }

    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operator = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.currentNumber = number;
    }

    chooseOperation(operator) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentNumberText.innerText = this.currentNumber;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const previousNumberText = document.querySelector('[data-previous-number]');
const currentNumberText = document.querySelector('[data-current-number]');

const calculator = new Calculator(previousNumberText, currentNumberText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})