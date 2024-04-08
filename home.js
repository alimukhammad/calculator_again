
const calculator = document.querySelector('.calculator'); //first element that matches the selector element
const keys = calculator.querySelector('.calculator__key'); //first element with in calculator that matches the selector element
const display = calculator.querySelector('.calculator__display'); //first element with in calculator that matches the selector element

document.addEventListener('click', e => {
    const key = e.target; 
    const action = key.dataset.action; 
    
    if(e.target.matches('button')) {
        if(action){
            if(action === 'clear'){
                clearDisplay();
            }else if(action === 'calculate'){
                calculate();
            }else{
                displayValue(key.textContent);
            }
        }else{
            displayValue(key.textContent);
        }
        
    }
});

function displayValue(value){
    const displayField = document.getElementById('displayField');
    if (value === '*') {
        displayField.value += '*';
    } else if (value === '/') {
        displayField.value += '/';
    } else {
        displayField.value += value;
    }
}

function clearDisplay(){
    const displayField = document.getElementById('displayField');
    displayField.value = '';
}

function calculate(){
    const displayField = document.getElementById('displayField');
    displayField.value = eval(displayField.value);
}

