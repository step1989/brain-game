import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;
const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const getQuastionAndAnswer = () => {
  const a = random(min, max);
  const b = random(min, max);

  const quastion = `${a} ${b}`;
  const answer = String(getGcd(a, b));
  const questionAndAnswer = cons(quastion, answer);
  return questionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
