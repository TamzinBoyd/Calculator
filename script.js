let enteredValuesArr = [];
let enteredOperand = "";

const display = document.getElementById("total");
const equals = document.getElementById("equals");
const buttons = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operand");

// FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////////

// adds the button's value to the display box on click
const displayUsersNum = (event, testArr) => {
  enteredValuesArr.push(event.target.value);
  display.innerHTML = enteredValuesArr.join("");
};

const displayUsersOperand = (event) => {
  enteredValuesArr.push(event.target.value);
  display.innerHTML = enteredValuesArr.join("");

  // filters values entered to take the value of the operand
  enteredOperand = enteredValuesArr.filter((value) => {
    //  returns the operand clicked by the user
    return value === event.target.value;
  });
  enteredOperand = enteredOperand.toString();
};

const calculateTotal = (event) => {
  //  changes array to a new variable and joins it together
  const combinedValues = enteredValuesArr.join("");
  const getOperandPosition = combinedValues.indexOf(enteredOperand);
  //   creates substring of value upto enteredOperand
  const firstNum = combinedValues.substring(0, getOperandPosition);
  const secondNum = combinedValues.substring(getOperandPosition + 1);

  //   carry out the sum depending on final operand value
  if (enteredOperand === "+") {
    display.innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (enteredOperand === "-") {
    display.innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (enteredOperand === "x") {
    display.innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
  } else if (enteredOperand === "/") {
    display.innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
  }
};

const clear = (event) => {
  display.innerHTML = "0.00";
  enteredValuesArr = [];
};

//  EVENT LISTENERS ////////////////////////////////////////////////

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", displayUsersNum);
}

for (var i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", displayUsersOperand);
}

equals.addEventListener("click", calculateTotal);
document.querySelector(".clear").addEventListener("click", clear);
