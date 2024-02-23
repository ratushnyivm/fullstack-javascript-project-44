import { getRandomArbitrary } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMin = 0;
const numberMax = 100;

const even = () => {
  const question = getRandomArbitrary(numberMin, numberMax);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  const output = [description, question, rightAnswer];

  return output;
};

export default even;
