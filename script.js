function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    console.log(typeof(display.value))
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
    console.log('Original expression:', expression);
    
    // Replace division and multiplication symbols with JavaScript operators
    expression = expression.replace(/÷/g, '/').replace(/x/g, '*');
    console.log('Processed expression:', expression);
    
    try {
        // we're using eval to reduce complexity 
        // but it shouldn't be used without sanitizing the input
        // Evaluate the expression and update the display
        display.value = eval(expression);
    } catch (error) {
        console.error('Error evaluating expression:', error);
        display.value = 'Error';
    }
}
