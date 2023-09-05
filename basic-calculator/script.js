const firstInput = document.querySelector('.js-input-one');
const secondInput = document.querySelector('.js-input-two');
const totalElement = document.querySelector('.total');

function calculate(operator){
  const valueOne = Number(firstInput.value);
  const valueTwo = Number(secondInput.value);
  let total = 0;
  if (operator === 'add'){
    total = valueOne + valueTwo;
  } else if (operator === 'subtract'){
    total = valueOne - valueTwo;
  } else if (operator === 'multiplication'){
    total = valueOne * valueTwo;
  } else if (operator === 'division'){
    total = valueOne / valueTwo;
  }
  totalElement.innerText = `Total: ${total}`;
}