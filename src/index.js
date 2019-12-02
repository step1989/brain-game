import readlinesync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';


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

// функция для вычисления НОД
export const nod = (a, b) => {
  if (b === 0) return a;
  return nod(b, a % b);
};

// параметры:
// start - первое число
// length - последние число в прогрессии
// sub - разночть арифмитической прогресси
// pass - позиция числа которое будет пропушено
// возвращает пару -
// первый элемент - число которое пропустили
// второй элемент - строка для вывода на экран
export const arihmProgress = (start, length, sub, pass) => {
  const end = start + sub * (length - 1);
  const answerMinusSub = start + sub * (pass - 1);

  const iter = (counter, acc) => {
    if (counter === end) return acc;
    if (counter === answerMinusSub) {
      const pair = cons(car(acc) + sub, `${cdr(acc)} ..`); // в car лежит пропушенное число
      return iter(counter + sub, pair);
    }
    const pair = cons(car(acc), `${cdr(acc)} ${counter + sub}`);
    return iter(counter + sub, pair);
  };

  const pair = iter(start, cons(answerMinusSub, String(start)));
  return pair;
};
// функция проверки является ли число простым
export const isPrime = (number) => {
  if (number < 2) {
    console.log('number must be greater 1');
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
