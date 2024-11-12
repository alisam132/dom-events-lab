/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/
let firstNumber = 0;
let secondNumber = 0;
let answerNumber = 0;
let operatorValue = '';

/*------------------------ Cached Element References ------------------------*/
const displayDiv = document.querySelector('.display');


/*----------------------------- Event Listeners -----------------------------*/

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...

//     });
//   });
  

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);

  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
      displayDiv.textContent += event.target.innerText;
      if (operatorValue === '*') {
        getSecondNumber(displayDiv.textContent.split('*').pop());
      }      if(operatorValue === '/') {
        getSecondNumber(displayDiv.textContent.split('/').pop());
      }if(operatorValue === '+') {
        getSecondNumber(displayDiv.textContent.split('+').pop());
      }
      if(operatorValue === '+') {
        getSecondNumber(displayDiv.textContent.split('-').pop());
      }
      
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
      getOpratorValue(event.target.innerText);
      getFirstNumber(displayDiv.textContent);
      displayDiv.textContent += event.target.innerText;
    }

    if (event.target.innerText === '+') {
      // Do something with this operator
      getOpratorValue(event.target.innerText);
      getFirstNumber(displayDiv.textContent);
      displayDiv.textContent += event.target.innerText;
    }
    if (event.target.innerText === '/') {
      // Do something with this operator
      getOpratorValue(event.target.innerText);
      getFirstNumber(displayDiv.textContent);
      displayDiv.textContent += event.target.innerText;
    }
    if (event.target.innerText === '-') {
      // Do something with this operator
      getOpratorValue(event.target.innerText);
      getFirstNumber(displayDiv.textContent);
      displayDiv.textContent += event.target.innerText;
    }

    if (event.target.innerText === 'C') {
      // Do something with this operator
      displayDiv.textContent = '';

    }
    if (event.target.innerText === '=') {
        console.log('firstNumberfirstNumberfirstNumber',firstNumber);
        console.log('secondNumbersecondNumbersecondNumber',secondNumber);
        console.log('operatorValueoperatorValueoperatorValue',operatorValue);
        console.log('answerNumberanswerNumber',answerNumber);
        console.log('answerNumberanswerNumber',getCalculationNumbers(firstNumber, secondNumber,operatorValue));
        answer = getCalculationNumbers(firstNumber, secondNumber,operatorValue)
        displayDiv.textContent = answer;     

    }


  });
  

/*-------------------------------- Functions --------------------------------*/
function getOpratorValue(operator) {
    return operatorValue = operator;
}
function getFirstNumber(number) {
    return firstNumber = number;
}
function getSecondNumber(number) {
    return secondNumber = number;
}
function getCalculationNumbers(num1,num2, operator) {
    if (operator === '*') {
        return answerNumber = num1 * num2;
    }
    if (operator === '+') {
        console.log(typeof(num1));
        console.log(typeof(operator));
        console.log(typeof(num2));
        
        return answerNumber = num1 + num2;
    }
    if (operator === '-') {
        return answerNumber = num1 - num2;
    }
    if (operator === '/') {
        return answerNumber = num1 / num2;
    }
    
}