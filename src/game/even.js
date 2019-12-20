import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;
const yes = 'yes';
const no = 'no';
const isEven = (number) => number % 2 === 0;
const getQuastionAndAnswer = () => {
  const question = random(min, max);
  const answer = isEven(question) ? yes : no;
  const questionAndAnswer = cons(question, answer);
  return questionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
