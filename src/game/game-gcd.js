import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;
// функция для вычисления НОД
const nod = (a, b) => {
  if (b === 0) return a;
  return nod(b, a % b);
};

const game = () => {
  const a = random(min, max);
  const b = random(min, max);

  const quastion = `${a} ${b}`;
  const answer = String(nod(a, b));
  const pairQuastionAnswer = cons(quastion, answer);
  return pairQuastionAnswer;
};

runGame(description, game);

export default game;
