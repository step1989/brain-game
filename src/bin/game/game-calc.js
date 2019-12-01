import readlinesync from 'readline-sync';
import {
  getRandomInt,
  addition,
  substraction,
  multi,
} from '../index';
// игра четное\ нечетное
const gameCalc = () => {
  const min = 1;
  const max = 20;

  const operationList = '+-*';

  const numberOne = getRandomInt(min, max);
  const numberSecond = getRandomInt(min, max);
  // операция
  const operation = operationList[getRandomInt(0, 3)];

  // результат операции
  let result;
  switch (operation) {
    case '+':
      result = addition(numberOne, numberSecond);
      break;
    case '-':
      result = substraction(numberOne, numberSecond);
      break;
    case '*':
      result = multi(numberOne, numberSecond);
      break;
    default:
      console.log('Не корректная работа программы. Обратитесь к разработчику');
  }

  const questionParam = `${numberOne} ${operation} ${numberSecond}\n`;

  const answer = Number(readlinesync.question(`Question: ${questionParam}`));

  if (answer === result) return true;
  if (Number.isNaN(answer)) {
    console.log('You must enter a number');
    return false;
  }

  console.log(`'${answer}' is wrong answer ;( Correct answer was '${result}'`);
  return false;
};
export default gameCalc;
