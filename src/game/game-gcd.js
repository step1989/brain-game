import readlinesync from 'readline-sync';
import { getRandomInt, nod } from '../index';

const gameGcd = () => {
  const min = 0;
  const max = 100;

  const numberOne = getRandomInt(min, max);
  const numberSecond = getRandomInt(min, max);

  const questionParam = `${numberOne} ${numberSecond}\n`;
  const result = nod(numberOne, numberSecond);

  const answer = Number(readlinesync.question(`Question: ${questionParam}`));

  if (answer === result) return true;
  if (Number.isNaN(answer)) {
    console.log('You must enter a number');
    return false;
  }

  console.log(`'${answer}' is wrong answer ;( Correct answer was '${result}'`);
  return false;
};
export default gameGcd;
