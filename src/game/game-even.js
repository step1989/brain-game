import readlinesync from 'readline-sync';
import { getRandomInt, isEven } from '../index';
// функция игры четное\ нечетное
const gameEven = () => {
  // числа для диапозона выбора случайного числа
  const min = 1;
  const max = 101;
  // константы ответов
  const isYes = 'yes'; //
  const isNo = 'no';

  const number = getRandomInt(min, max);
  const answer = readlinesync.question(`Question: ${number}\n`);
  console.log(`Your answer: ${answer}`);

  if (isEven(number) && answer === isYes) return true;
  if (!isEven(number) && answer === isNo) return true;
  if (isEven(number) && answer !== isYes) {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${isYes}'`);
    return false;
  }
  console.log(`'${answer}' is wrong answer ;( Correct answer was '${isNo}'`);
  return false;
};

export default gameEven;
