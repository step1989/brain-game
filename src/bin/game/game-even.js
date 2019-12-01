import readlinesync from 'readline-sync';
import { getRandomInt, isEven } from '../index';
// функция игры четное\ нечетное
export const evenGame = (namePlayer) => {

  const min = 1;
  const max = 100;
  const isYes = 'yes'; //
  const isNo = 'no';

  const number = getRandomInt(min, max);
  const answer = readlinesync.question(`Question: ${number}\n`);
  console.log(`Your answer: ${answer}`);

  if (isEven(number) && answer === isYes) {
    return true;
  } else if (!isEven(number) && answer === isNo) {
    return true;
  } else if (isEven(number) && answer !== isYes) {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${isYes}'`);
    return false;
  } else {
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${isNo}'`);
    return false;
  }
};