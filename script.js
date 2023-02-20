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
    // Check for error messages and length of answer
    if (typeof(input) != "string") {
    input.toString().length > 9 ? display.innerText = "Err: Size" : display.innerText = input;
    } else {
        display.innerText = input;
    }
}

// Events and functions for pushing a digit key
const digits = document.querySelectorAll("button.digit");
digits.forEach(digit => digit.addEventListener("click", pushDigit));

function pushDigit() {    
    if (!clearDigit && displayValue.length > 8) {
        updateDisplay(displayValue);        
    } else if (operandOne === "=") {
        firstNumber = 0;
        operandOne = null;
        displayValue = this.innerText;
        updateDisplay(displayValue);
    } else if (displayValue === "0" || clearDigit) {
        displayValue = this.innerText;
        updateDisplay(displayValue);        
    } else {
    displayValue = displayValue + this.innerText;    
    updateDisplay(displayValue);
    };
    clearDigit = false;
}

// Events and functions for pushing an operand key
const operands = document.querySelectorAll("button.operand");
operands.forEach(operand => operand.addEventListener("click", pushOperand));

function pushOperand() {   
    if (!operandOne || operandOne === "=") {
        firstNumber = +displayValue;        
        operandOne = this.innerText;        
    } else {
        secondNumber = +displayValue;        
        displayValue = operate(firstNumber, operandOne, secondNumber);
        if (displayValue === Infinity || Number.isNaN(displayValue)) {
            clearCalculator();
            displayValue = "Divide by 0";
            updateDisplay(displayValue);           
        } else {
            firstNumber = +displayValue;       
            operandOne = this.innerText;
            displayValue = Math.round((displayValue + Number.EPSILON) * 100000000) / 100000000;
            updateDisplay(displayValue); 
        }               
    }
    clearDigit = true;
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