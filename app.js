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

