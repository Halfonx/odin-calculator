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
        if(this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    compute() {
        let computation;
        const previousCompute = parseFloat(this.previousNumber);
        const currentCompute = parseFloat(this.currentNumber);
        if (isNaN(previousCompute) || isNaN(currentCompute)) return;
        switch(this.operator) {
            case '+':
                computation = previousCompute + currentCompute;
                break;
            case '-':
                computation = previousCompute - currentCompute;
                break;
            case 'x':
                computation = previousCompute * currentCompute;
                break;
            case '÷':
                computation = previousCompute / currentCompute;
                break;
            default:
                return;
        }
        this.currentNumber = computation;
        this.operator = undefined;
        this.previousNumber = '';
    }

    updateDisplay() {
        this.currentNumberText.innerText = this.currentNumber;
        if (this.operator != null) {
            this.previousNumberText.innerText = `${this.previousNumber} ${this.operator}`;
        }
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

clearButton.addEventListener('click', (button) => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalButton.addEventListener('click', (button) => {
    calculator.compute();
    calculator.updateDisplay();
})