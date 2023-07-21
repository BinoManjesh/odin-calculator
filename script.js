'use strict';

let operand1, operand2, operator;

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
