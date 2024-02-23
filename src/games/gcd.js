import { getRandomArbitrary, greatestCommonDivisor } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const firstNumberMin = 0;
const firstNumberMax = 100;

const secondNumberMin = 0;
const secondNumberMax = 100;

const gcd = () => {
  const firstNumber = getRandomArbitrary(firstNumberMin, firstNumberMax);
  const secondNumber = getRandomArbitrary(secondNumberMin, secondNumberMax);

  const question = `${firstNumber} ${secondNumber}`;

  const rightAnswer = String(greatestCommonDivisor(firstNumber, secondNumber));

  const output = [description, question, rightAnswer];

  return output;
};

export default gcd;
