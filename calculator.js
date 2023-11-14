let calculation = '';

function addToCalculator(value) {
calculation += value;

document.querySelector('.js-result')
.innerHTML = calculation;
}


function equalTo() {
    let result = eval(calculation);
    document.querySelector('.js-result').innerHTML = result

    
}

function clearAll() {
    calculation = '';
    document.querySelector('.js-result').innerHTML = '';

    
}

