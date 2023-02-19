// Initializing variables
let displayValue = "0";
let operandOne;
let firstNumber;
let secondNumber;
let clearDigit;

// Populate initial display
const display = document.getElementById("display");
document.addEventListener("DOMContentLoaded", function() { updateDisplay(displayValue); });

// Update display function
function updateDisplay(input) {
    display.innerText = input;
}

// Events and functions for pushing a digit key
const digits = document.querySelectorAll("button.digit");
digits.forEach(digit => digit.addEventListener("click", pushDigit));

function pushDigit() {    
    if (operandOne === "=") {
        firstNumber = 0;
        displayValue = this.innerText;
        updateDisplay(displayValue);
    } else if (displayValue === "0" || clearDigit) {
        displayValue = this.innerText;
        updateDisplay(displayValue);
        clearDigit = false;
    } else {
    displayValue = displayValue + this.innerText;    
    updateDisplay(displayValue);
    };
}

// Events and functions for pushing an operand key
const operands = document.querySelectorAll("button.operand");
operands.forEach(operand => operand.addEventListener("click", pushOperand));

function pushOperand() {
    clearDigit = true;
    if (!operandOne || operandOne === "=") {
        firstNumber = +displayValue;        
        operandOne = this.innerText;        
    } else {
        secondNumber = +displayValue;        
        displayValue = operate(firstNumber, operandOne, secondNumber);
        firstNumber = +displayValue;       
        operandOne = this.innerText;
        updateDisplay(displayValue);        
    }
}

// Clear calculator function
const clear = document.getElementById("clear");
clear.addEventListener("click", clearCalculator)
clear.addEventListener("click", function () { updateDisplay(displayValue); });

function clearCalculator() {
    displayValue = "0";
    firstNumber = undefined;
    secondNumber = undefined;
    operandOne = null;    
}

// Basic arithmetic functions
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// Operate function
function operate (a, opt, b) {    
    if (opt === "+") return add (a, b);
    if (opt === "-") return subtract (a, b);
    if (opt === "*") return multiply (a, b);
    if (opt === "/") return divide (a, b);
}