let currentInput = "";
let operator = "";
let secondInput = "";
let newInput = "";

let display = document.getElementById("result");

function displayValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearValue() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  display.value = "";
}

function operate(sign) {
  secondInput = currentInput;
  operator = sign;
  currentInput = "";
  display.value = secondInput + " " + operator;
}

function calcular() {
  if (secondInput === "" || currentInput === "" || operator === "") {
    return;
  }

  const result = eval(`${secondInput} ${operator} ${currentInput}`);
  display.value = result;
  currentInput = result.toString();
  secondInput = "";
  operator = "";
}

function sqrt() {
  const result = Math.sqrt(parseFloat(currentInput));
  display.value = result;
  currentInput = result.toString();
}

function changeSign() {
  if (currentInput === "") {
    return;
  }

  newInput = display.value = newInput;
  currentInput = newInput.toString();
}

function inverse() {
  const result = 1 / parseFloat(currentInput);
  display.value = result;
  currentInput = result.toString();
}

function quadrado() {
  const result = parseFloat(currentInput) * parseFloat(currentInput);
  display.value = result;
  currentInput = result.toString();
}

function current() {
  alert(currentInput);
  alert(typeof currentInput);
}
