import { getRandomInt } from '../index';
import run from '../game/launcher';
import { cons, car, cdr } from '@hexlet/pairs';
// функция игры четное\ нечетное

const gamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const game = () => {
    // числа для диапозона выбора случайного числа
    const min = 2;
    const max = 101;
    // константы ответов
    const isYes = 'yes'; //
    const isNo = 'no';

    const question = getRandomInt(min, max);
    const answer = isPrime(question) ? isYes : isNo;
    // пара вопрос ответ
    const pairQA = cons(question, answer);
    return pairQA;
  };
  run(description, game);
};

const isPrime = (number) => {
  if (number < 2) {
    console.log('number must be greater 1');
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};


export default gamePrime;
