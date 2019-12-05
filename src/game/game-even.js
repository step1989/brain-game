import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

// функция проверки числа на четность
const isEven = (number) => number % 2 === 0;
// функция игры четное\ нечетное
const gameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game = () => {
    // числа для диапозона выбора случайного числа
    const min = 1;
    const max = 101;
    // константы ответов
    const isYes = 'yes'; //
    const isNo = 'no';

    const question = random(min, max);
    const answer = isEven(question) ? isYes : isNo;
    // пара вопрос ответ
    const pairQA = cons(question, answer);
    return pairQA;
  };
  runGame(description, game);
};
export default gameEven;
