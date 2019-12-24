import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;
const confirmation= 'yes';
const negation = 'no';
const isEven = (number) => number % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = random(min, max);
  const answer = isEven(question) ? confirmation : negation;
  return cons(question, answer);
};

runGame(description, getQuestionAndAnswer);

export default getQuestionAndAnswer;
