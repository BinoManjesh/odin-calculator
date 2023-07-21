'use strict';

let operand1, operand2, operator;

function onNumberPress(number) {
    if (operator) {
        operand2 += number;
    } else {
        operand1 += number;
    }
}

function onDotPress() {
    if (operator) {
        number2 = Number(operand2);
        if (Number.isInteger(number2)) {
            operand2 = number2 + '.';
        }
    } else {
        number1 = Number(operand1);
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

//TODO: Handle divide by zero.
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
