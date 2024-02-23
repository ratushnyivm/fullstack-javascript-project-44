import readlineSync from 'readline-sync';

const engine = (gameModule, numberOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameModule()[0]);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const outputOfGameModule = gameModule();
    const [, question, rightAnswer] = outputOfGameModule;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default engine;
