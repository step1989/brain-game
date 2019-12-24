import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What number is missing in the progression?';
const passSymbol = '..';
const length = 10;

const getArithmeticProgression = (start, lengthProgression, diff) => {
  const iter = (index, acc) => {
    if (index === lengthProgression) {
      return acc;
    }
    const nextElement = start + diff * index;
    return iter(index + 1, `${acc} ${nextElement}`);
  };
  return iter(0, '');
};

const getQuestionAndAnswer = () => {
  const start = random(1, 20);
  const diff = random(1, 15);
  const missedItemIndex = random(1, length - 1);
  const arithmeticProgression = getArithmeticProgression(start, length, diff);
  const answer = String(start + diff * missedItemIndex);
  const question = arithmeticProgression.replace(answer, passSymbol);
  return cons(question, answer);
};

runGame(description, getQuestionAndAnswer);

export default getQuestionAndAnswer;
