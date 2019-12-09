import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
// функция игры четное\ нечетное
const gamePrime = () => {
  const game = () => {
    // числа для диапозона выбора случайного числа
    const min = 2;
    const max = 101;
    // константы ответов
    const isYes = 'yes'; //
    const isNo = 'no';

    const question = random(min, max);
    const answer = isPrime(question) ? isYes : isNo;
    // пара вопрос ответ
    const pairQA = cons(question, answer);
    return pairQA;
  };
  runGame(description, game);
};
export default gamePrime;
