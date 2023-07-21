'use strict';

let display, operand1, operand2, operator;

function onNumberPress(number) {

}

function onDotPress() {

}

function onOperatorPress(pressedOperator) {

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
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    operand1 = result.toString();
    operator = '';
    operand2 = '';
    display = operand1;
}

function onClear() {
    display = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function onBackspace() {
    if (!display) {
        return;
    }
    display = display.slice(0, -1);
    if (operand2) {
        operand2 = operand2.slice(0, -1);
    } else if (operator) {
        operator = '';
    } else {
        operand1 = operand1.slice(0, -1);
    }
}
