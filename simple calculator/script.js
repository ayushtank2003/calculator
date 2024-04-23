let expression = '';

function appendToOutput(value) {
    expression += value;
    document.getElementById('output').innerHTML = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('output').innerHTML = result;
        expression = '';
        // document.getElementById('output').innerHTML = '';
    } catch (error) {
        document.getElementById('output').innerHTML = 'Error';
        expression = '';
        // document.getElementById('output').innerHTML = '';
    }
}

