const displayHistoryEl = document.querySelector('.display-calc_history');
const displayResultEl = document.querySelector('.display-calc_result');
const displayTempResultEl = document.querySelector('.display-temp_calc_result');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEntityEl = document.querySelector('.last-entity-clear');
const numberEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

clearAllEl.addEventListener('click', (e) => {
    displayHistoryEl.innerText = '';
    displayResultEl.innerText = 0;
    displayTempResultEl.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
});

clearLastEntityEl.addEventListener('click', (e) => {
    displayResultEl.innerText = '';
    dis2Num = '';
});

operationEl.forEach(operation => {
    operation.addEventListener('click',(e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
});

numberEl.forEach( number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        displayResultEl.innerText = dis2Num;
    })
});

equalEl.addEventListener('click', () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayResultEl.innerText = result;
    displayTempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    displayHistoryEl.innerText = dis1Num;
    displayResultEl.innerText = '';
    dis2Num = '';
    displayTempResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}