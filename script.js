const displayElements = document.getElementsByName("display");

function displayValue(value) {
    
    if (displayElements.length > 0) {
        displayElements[0].value += value;
    }
}

function clearValue() {

    if (displayElements.length > 0) {
        displayElements[0].value = [];
    }

}



function operate() {

}