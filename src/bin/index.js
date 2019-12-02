import readlinesync from 'readline-sync';


export const welcome = () => console.log('Welcome to the Brain Games!');

export const nameQuestion = () => {
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

// функция получения случайного числа. Максимум не включается, минимум включается
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// функция проверки числа на четность
export const isEven = (number) => number % 2 === 0;

// 3 функции для мгры brain calc
export const addition = (a, b) => a + b;

export const substraction = (a, b) => a - b;

export const multi = (a, b) => a * b;

export const nod = (a, b) => {
  if (b === 0) return a;
  return nod(b, a % b);
};
