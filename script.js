let displayValue = "0";

const display = document.getElementById("display");
document.addEventListener("DOMContentLoaded", function() { updateDisplay(displayValue); });

function updateDisplay(input) {
    display.innerText = input;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", pushButton));

function pushButton() {
    displayValue = this.innerText;    
    updateDisplay(displayValue);
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