// Get references to elements
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let currentExpression = "";
let result = 0;

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Handle button click event
function handleClick(e) {
  const buttonText = e.target.innerHTML;
  handleInput(buttonText);
}

// Handle input based on the button pressed
function handleInput(value) {
  switch (value) {
    case '=':
      result = evaluateExpression();
      displayResult(result);
      break;
    case 'Ac':
      clearCalculator();
      break;
    case 'DEL':
      deleteLastCharacter();
      break;
    default:
      appendToExpression(value);
      break;
  }
}

// Append value to the current expression
function appendToExpression(value) {
  currentExpression += value;
  input.value = currentExpression;
}

// Evaluate the current expression
function evaluateExpression() {
  try {
    return eval(currentExpression);
  } catch (error) {
    return 'Error';
  }
}

// Display the result in the input box
function displayResult(value) {
  input.value = value;
  currentExpression = value.toString();
}

// Clear the calculator
function clearCalculator() {
  currentExpression = "";
  result = 0;
  input.value = "0";
}

// Delete the last character from the expression
function deleteLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  input.value = currentExpression;
}
