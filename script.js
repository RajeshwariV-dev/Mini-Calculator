
function calculate(operation) {
  const num1 = (document.getElementById("number1").value);
  const num2 = (document.getElementById("number2").value);
  let result;

  if (isNaN(num1)) {
    document.getElementById("result").textContent = "Please enter at least one valid number.";
    return;
  }

  switch(operation) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      if (num2 === 0) {
        result = "Cannot divide by zero.";
      } else {
        result = num1 / num2;
      }
      break;

    case 'square':
      result = num1 ** 2;
      break;

    case 'cube':
      result = num1 ** 3;
      break;

    default:
      result = "Invalid operation";
  }

  document.getElementById("result").textContent = "Result: " + result;
}
