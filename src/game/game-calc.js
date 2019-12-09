import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What is the result of the expression?';
const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multi = (a, b) => a * b;
const getResultOperation = (operation, numberOne, numberSecond) => {
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
    const operationList = '+-*';
    const startIndex = 0;
    const endIndex = operationList.length - 1;
    const indexOperation = random(startIndex, endIndex);
    const operation = operationList[indexOperation];

    const quastion = `${numberOne} ${operation} ${numberSecond}`;
    const answer = String(getResultOperation(operation, numberOne, numberSecond));
    const pairQA = cons(quastion, answer);
    return pairQA;
  };

  runGame(description, game);
};

export default gameCalc;
