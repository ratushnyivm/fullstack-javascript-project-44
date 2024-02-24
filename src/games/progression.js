import { getRandomArbitrary } from '../utils.js';

const description = 'What number is missing in the progression?';

const lengthMin = 6;
const lengthMax = 11;

const firstNumberMin = 0;
const firstNumberMax = 100;

const stepMin = 1;
const stepMax = 10;

const replacement = '..';

const progression = () => {
  const length = getRandomArbitrary(lengthMin, lengthMax);
  const step = getRandomArbitrary(stepMin, stepMax);
  const firstNumber = getRandomArbitrary(firstNumberMin, firstNumberMax);
  const lastNumber = firstNumber + length * step;

  const numberList = [];
  for (let i = firstNumber; i < lastNumber; i += step) {
    numberList.push(i);
  }

  const hiddenIndex = getRandomArbitrary(0, length);
  const rightAnswer = String(numberList[hiddenIndex]);

  numberList[hiddenIndex] = replacement;
  const question = numberList.join(' ');

  const output = [description, question, rightAnswer];

  return output;
};

export default progression;
