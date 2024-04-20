const output = document.querySelector('.output');
const buttons = Array.from(document.getElementsByClassName('btn'));
const operators = ['/', '*', '-', '+'];

let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            output.innerText = prevNum + target.innerText + currentNum;
            return;
        }
        if(target.classList.contains('equal')) {
            handleEqual();
            return;
        }
        if(target.classList.contains('clear')) {
            handleClear();
            return;
        }
        currentNum += target.innerText;
        updateOutput();
    })
});

function handleOperator(operator) {
    if(currentOperator !== null) handleEqual();
    currentOperator = operator;
    prevNum = currentNum;
    currentNum = '';
}

function handleEqual() {
    if(prevNum === '' || currentNum === '') return;
    let computation;
    const prev = parseFloat(prevNum);
    const current = parseFloat(currentNum);
    switch(currentOperator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    result = computation;
    currentNum = computation.toString();
    currentOperator = null;
    prevNum = '';
    updateOutput();
}

function handleClear() {
    currentNum = '';
    prevNum = '';
    currentOperator = null;
    result = null;
    updateOutput();
}

function updateOutput() {
    output.innerText = currentNum;
}