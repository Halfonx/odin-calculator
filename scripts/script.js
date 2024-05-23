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
        this.currentNumber = this.currentNumber.slice(0, -1).toString();
    }

    appendNumber(number) {
        if(number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber = this.currentNumber.toString() + number.toString();
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

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})