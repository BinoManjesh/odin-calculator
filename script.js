'use strict';

let operand1, operand2, operator;
let hasDividedByZero = false;

function onNumberPress(number) {
    if (operator) {
        operand2 += number;
    } else {
        operand1 += number;
    }
}

function onDotPress() {
    if (operator) {
        const number2 = Number(operand2);
        if (Number.isInteger(number2)) {
            operand2 = number2 + '.';
        }
    } else {
        const number1 = Number(operand1);
        if (Number.isInteger(number1)) {
            operand1 = number1 + '.';
        }
    }
}

function onOperatorPress(pressedOperator) {
    if (operand2) {
        onEqualPress();
    }
    operator = pressedOperator;
}

function onEqualPress() {
    const num1 = Number(operand1);
    const num2 = Number(operand2);
    let result = num1;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                operand1 = 'No. Ille. Nahi. Na. Non.';
                operator = '';
                operand2 = '';
                hasDividedByZero = true;
                return;
            }
            result = num1 / num2;
            break;
    }
    operand1 = result.toString();
    operator = '';
    operand2 = '';
}

function onClear() {
    operand1 = '';
    operand2 = '';
    operator = '';
    hasDividedByZero = false;
}

function onBackspace() {
    if (operand2) {
        operand2 = operand2.slice(0, -1);
    } else if (operator) {
        operator = '';
    } else if (operand1) {
        operand1 = operand1.slice(0, -1);
    }
}

onClear();
const buttons = document.querySelectorAll('button');
const functionMap = {
    number: onNumberPress, dot: onDotPress, operator: onOperatorPress,
    equal: onEqualPress, clear: onClear, backspace: onBackspace
};
const display = document.querySelector('.display');
for (const button of buttons) {
    for (const cssClass in functionMap) {
        if (button.classList.contains(cssClass)) {
            button.onclick = () => {
                if (!hasDividedByZero) {
                    (functionMap[cssClass])(button.textContent);
                } else {
                    onClear();
                }
                display.textContent = operand1 + operator + operand2;
            }
            break;
        }
    }
}
