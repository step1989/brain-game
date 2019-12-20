import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What number is missing in the progression?';
const passSymbol = '..';
const length = 10;

const getArithmeticProgression = (start, length, diff) => {
  const iter = (index, acc) => {
    if (index === length) {
      return acc;
    }
    const nextElement = start + diff * index;
    return iter(index + 1, `${acc} ${nextElement}`);
  };
  return iter(0, '');
};

const getQuastionAndAnswer = () => {
  const start = random(1, 20);
  const diff = random(1, 15);
  const missedItemIndex = random(1, length-1);
  const arithmeticProgression = getArithmeticProgression(start, length, diff);
  const answer = String(start + diff * missedItemIndex);
  const question = arithmeticProgression.replace(answer, passSymbol);
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
