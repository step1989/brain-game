import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What is the result of the expression?';
const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multi = (a, b) => a * b;
const resultOperation = (operation, numberOne, numberSecond) => {
  switch (operation) {
    case '+':
      return addition(numberOne, numberSecond);
    case '-':
      return substraction(numberOne, numberSecond);
    case '*':
      return multi(numberOne, numberSecond);
    default:
      return false;
  }
};
// игра четное\ нечетное
const gameCalc = () => {
  const game = () => {
    const min = 1;
    const max = 20;

    const numberOne = random(min, max);
    const numberSecond = random(min, max);
    // операция
    const operationList = '+-*';
    const indexOperation = random(0, 3);
    const operation = operationList[indexOperation];

    const quastion = `${numberOne} ${operation} ${numberSecond}`;
    const answer = String(resultOperation(operation, numberOne, numberSecond));
    const pairQA = cons(quastion, answer);
    return pairQA;
  };

  runGame(description, game);
};

export default gameCalc;
