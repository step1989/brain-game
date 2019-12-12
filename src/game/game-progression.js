import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What number is missing in the progression?';
const passSymbol = '..';
const countElements = 10;

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

const game = () => {
  const firstElement = random(1, 20);
  const diffProgression = random(1, countElements);
  const arithmProgression = getArithmeticProgression(firstElement, countElements, diffProgression);
  const answer = String(firstElement + diffProgression * (random(1, countElements) - 1));
  const question = arithmProgression.replace(answer, passSymbol);
  const pairQuestionAnswer = cons(question, answer);
  return pairQuestionAnswer;
};

runGame(description, game);

export default game;
