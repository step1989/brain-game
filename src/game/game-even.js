import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;
// константы ответов
const yes = 'yes'; //
const no = 'no';
// функция проверки числа на четность
const isEven = (number) => number % 2 === 0;
// функция игры четное\ нечетное
const game = () => {
  const question = random(min, max);
  const answer = isEven(question) ? yes : no;
  // пара вопрос ответ
  const pairQuestionAnswer = cons(question, answer);
  return pairQuestionAnswer;
};

runGame(description, game);

export default game;
