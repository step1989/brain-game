import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;
const confirmation = 'yes';
const negation = 'no';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }

  const limiter = a / 2;

  for (let i = 2; i <= limiter; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = random(min, max);
  const answer = isPrime(question) ? confirmation : negation;
  return cons(question, answer);
};

runGame(description, getQuestionAndAnswer);

export default getQuestionAndAnswer;
