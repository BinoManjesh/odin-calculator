"use strict";

let display, operand1, operand2, operator, hasDot;

function onNumberPress(number) {

}

function onDotPress() {

}

function onOperatorPress(pressedOperator) {

}

function onEqualPress() {

}

function onClear() {
    display = "";
    operand1 = "";
    operand2 = "";
    operator = "";
    hasDot = false;
}

function onBackspace() {
    if (!display) {
        return;
    }
    display = display.slice(0, -1);
    if (operand2) {
        operand2 = operand2.slice(0, -1);
    } else if (operator) {
        operator = operator.slice(0, -1);
    } else {
        operand1 = operand1.slice(0, -1);
    }
}
