const getRandomArbitrary = (min = 0, max = 10) => (Math.floor(Math.random() * (max - min) + min));

const randomChoice = (arr) => (arr[Math.floor(arr.length * Math.random())]);

export { getRandomArbitrary, randomChoice };
