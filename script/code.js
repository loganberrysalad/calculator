let sum;
function clickValue(value) {
    let result = document.getElementById('answer');
    result.value += value;
}

function clearSum() {
    let result = document.getElementById('answer');
    result.value = '';
}

function equalSum() {
    let result = document.getElementById('answer');
    try {
    result.value = eval(result.value);
    } catch (error) {
    result.value = 'Try Again';
    }}

    function del() {
    let result = document.getElementById('answer');
    result.value = result.value.slice(0, -1);a
    }

    function clickValue(value) {
        let result = document.getElementById('answer');
        
        if (value === '.') {
            if (result.value.indexOf('.') === -1) {
                result.value += value;
            }
        } else {
            result.value += value;
        }
    }
   
    
    
    
    
    
    
    