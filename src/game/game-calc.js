import { getRandomInt } from '../index';
import run from '../game/launcher';
import { cons, car, cdr } from '@hexlet/pairs';

// игра четное\ нечетное
const gameCalc = () => {

  const description = 'What is the result of the expression?';
  
  const game = () => {

    const min = 1;
    const max = 20;

    const numberOne = getRandomInt(min, max);
    const numberSecond = getRandomInt(min, max);
    // операция
    const operationList = '+-*';
    const indexOperation = getRandomInt(0, 3);
    const operation = operationList[indexOperation];

    const quastion = `${numberOne} ${operation} ${numberSecond}`;
    const answer = String(resultOperation(operation, numberOne, numberSecond));
    const pairQA = cons(quastion, answer);
    return pairQA;
  };

  run(description, game);
};
const resultOperation = (operation, numberOne, numberSecond) => {
  switch (operation) {
    case '+':
      return addition(numberOne, numberSecond);
    case '-':
      return substraction(numberOne, numberSecond);
    case '*':
      return multi(numberOne, numberSecond);
    default:
      break;
    }  
};
const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multi = (a, b) => a * b;
export default gameCalc;
