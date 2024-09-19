

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/','%',].includes(lastChar) && operator !== '.') {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += ' ' + operator + ' ';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}