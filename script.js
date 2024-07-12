let currentInput = "";
let operator = "";
let secondInput = "";
let newInput = "";
let display = document.getElementById("result");

document.addEventListener("keydown", e => {
    if (e.code === "Numpad0" || e.code === "Digit0") {
      displayValue(0);
    } else if (e.code === "Numpad1" || e.code === "Digit1") {
      displayValue(1);
    } else if (e.code === "Numpad2" || e.code === "Digit2") {
      displayValue(2);
    } else if (e.code === "Numpad3" || e.code === "Digit3") {
      displayValue(3);
    } else if (e.code === "Numpad4" || e.code === "Digit4") {
      displayValue(4);
    } else if (e.code === "Numpad5" || e.code === "Digit5") {
      displayValue(5);
    } else if (e.code === "Numpad6" || e.code === "Digit6") {
      displayValue(6);
    } else if (e.code === "Numpad7" || e.code === "Digit7") {
      displayValue(7);
    } else if (e.code === "Numpad8" || e.code === "Digit8") {
      displayValue(8);
    } else if (e.code === "Numpad9" || e.code === "Digit9") {
      displayValue(9);
    } else if (e.code === "Period") {
      
      if (!currentInput.includes(".")) {
        currentInput += ".";
        display.value = currentInput;
      }
    } else if (e.code === "Backspace") {
      clearValue();
    } else if (e.code === "Enter" || e.code === "NumpadEnter") {
      calcular();
    } else if (e.code === "NumpadAdd" || e.code === "Plus") {
      operate("+");
    } else if (e.code === "NumpadSubtract" || e.code === "Minus") {
      operate("-");
    } else if (e.code === "NumpadMultiply" || e.code === "Multiply") {
      operate("*");
    } else if (e.code === "NumpadDivide" || e.code === "Slash") {
      operate("/");
    }
  });
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

 currentInput = `- ${currentInput}`;
 display.value= currentInput;
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

function decimal() {

    currentInput += ".";
    

}