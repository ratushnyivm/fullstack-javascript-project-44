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

export { getRandomArbitrary, greatestCommonDivisor, randomChoice };
