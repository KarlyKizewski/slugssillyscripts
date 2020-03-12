const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //going to store data

function getUserNumberInput() {
  return parseInt(userInput.value); //parseInt to turn to integer
} //can call this function anywhere now

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //automatically a string
  outputResult(currentResult, calcDescription);
}
// create log object with dynamic data
// added to array and logged to console
function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
  ) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult, // safe to use same 
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType, ) {
  if (
    calculationType !== 'ADD' && 
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
    ) {
      return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add); //dot notation accessing function
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


