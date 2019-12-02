import readlinesync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getRandomInt, arihmProgress } from '../index';

const gameProgression = () => {
  // подготавливаем параметры для получения пары - ответ, прогрессия
  const start = getRandomInt(1, 20);
  const length = 10;
  const sub = getRandomInt(1, 11);
  const pass = getRandomInt(1, length);

  // получаем пару
  const pairResult = arihmProgress(start, length, sub, pass);
  // получаем строку для вывода на экран
  const questionParam = cdr(pairResult);
  // получаем верный ответ
  const result = car(pairResult);

  const answer = Number(readlinesync.question(`Question: ${questionParam}\n`));

  if (answer === result) return true;
  if (Number.isNaN(answer)) {
    console.log('You must enter a number');
    return false;
  }

  console.log(`'${answer}' is wrong answer ;( Correct answer was '${result}'`);
  return false;
};
export default gameProgression;
