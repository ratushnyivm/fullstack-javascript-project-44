const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberMax = 100;

const even = () => {
  const output = [description];

  const question = Math.floor(Math.random() * numberMax);
  output.push(question);

  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  output.push(rightAnswer);

  return output;
};

export default even;
