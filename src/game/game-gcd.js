import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Find the greatest common divisor of given numbers.';
// функция для вычисления НОД
const nod = (a, b) => {
  if (b === 0) return a;
  return nod(b, a % b);
};
const gameGcd = () => {
  const game = () => {
    const min = 0;
    const max = 100;

    const numberOne = random(min, max);
    const numberSecond = random(min, max);

    const quastion = `${numberOne} ${numberSecond}`;
    const answer = String(nod(numberOne, numberSecond));
    const pairQA = cons(quastion, answer);
    return pairQA;
  };
  runGame(description, game);
};
export default gameGcd;
