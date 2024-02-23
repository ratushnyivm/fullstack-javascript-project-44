import { getRandomArbitrary, randomChoice } from '../utils.js';

const description = 'What is the result of the expression?';

const firstNumberMin = 0;
const firstNumberMax = 20;

const secondNumberMin = 0;
const secondNumberMax = 20;

const calc = () => {
  const firstNumber = getRandomArbitrary(firstNumberMin, firstNumberMax);
  const secondNumber = getRandomArbitrary(secondNumberMin, secondNumberMax);

  const operators = ['+', '-', '*'];
  const currentOperator = randomChoice(operators);

  const question = `${firstNumber} ${currentOperator} ${secondNumber}`;

  let rightAnswer;
  switch (currentOperator) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      rightAnswer = null;
  }

  rightAnswer = String(rightAnswer);

  const output = [description, question, rightAnswer];

  return output;
};

export default calc;
