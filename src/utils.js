const getRandomArbitrary = (min = 0, max = 10) => (Math.floor(Math.random() * (max - min) + min));

const randomChoice = (arr) => (arr[Math.floor(arr.length * Math.random())]);

const greatestCommonDivisor = (firstNumber, secondNumber) => {
  let a = Math.abs(firstNumber);
  let b = Math.abs(secondNumber);

  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }

  for (;;) {
    if (b === 0) {
      return a;
    }
    a %= b;
    if (a === 0) {
      return b;
    }
    b %= a;
  }
};

const isPrime = (number) => {
  if (number % 2 === 0 || number === 1) {
    return number === 2;
  }

  let divisor = 3;
  while (divisor * divisor <= number && number % divisor !== 0) {
    divisor += 2;
  }

  return divisor * divisor > number;
};

export {
  getRandomArbitrary, greatestCommonDivisor, isPrime, randomChoice,
};
