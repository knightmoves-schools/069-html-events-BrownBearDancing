function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
if(isNaN(value) || value === '') {
    result.innerHTML = 'Invalid, please enter a number';
}else {
        result.innerHTML = value * value;
    };
}
document.getElementById('caluculate').addEventListener('click', calculateSquare);

//should multiply the input with the id number with itself and display the squared value in the div with the id result
//should display 'Invalid, please enter a number' in the div with the id result when the input is not a number.





