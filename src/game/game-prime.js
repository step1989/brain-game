import readlinesync from 'readline-sync';
import { getRandomInt, isPrime } from '../index';
// функция игры четное\ нечетное
const gamePrime = () => {
  // числа для диапозона выбора случайного числа
  const min = 2;
  const max = 101;
  // константы ответов
  const isYes = 'yes'; //
  const isNo = 'no';

  const number = getRandomInt(min, max);
  const answer = readlinesync.question(`Question: ${number}\n`);
  console.log(`Your answer: ${answer}`);

  if (isPrime(number) && answer === isYes) return true;
  if (!isPrime(number) && answer === isNo) return true;
  if (isPrime(number) && answer !== isYes) {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${isYes}'`);
    return false;
  }
  console.log(`'${answer}' is wrong answer ;( Correct answer was '${isNo}'`);
  return false;
};

export default gamePrime;
