import { getRandomArbitrary, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numberMin = 0;
const numberMax = 100;

const prime = () => {
  const question = getRandomArbitrary(numberMin, numberMax);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const output = [description, question, rightAnswer];

  return output;
};

export default prime;
