import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What number is missing in the progression?';
const passSymbol = '..';
const length = 10;

const getArithmeticProgression = (firstElement, amountElements, diffProgression) => {
  const lastElement = firstElement + diffProgression * (amountElements - 1);
  const iter = (counter, acc) => {
    if (counter === lastElement) {
      return acc;
    }
    const nextElement = counter + diffProgression;
    return iter(nextElement, `${acc} ${nextElement}`);
  };
  return iter(firstElement, String(firstElement));
};

const getQuastionAndAnswer = () => {
  const firstElement = random(1, 20);
  const diffProgression = random(1, length);
  const indexMissedItem = random(1, length) - 1;
  const arithmProgression = getArithmeticProgression(firstElement, length, diffProgression);
  const answer = String(firstElement + diffProgression * indexMissedItem);
  const question = arithmProgression.replace(answer, passSymbol);
  const pairQuestionAndAnswer = cons(question, answer);
  return pairQuestionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
