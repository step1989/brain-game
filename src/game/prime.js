import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;
const yes = 'yes';
const no = 'no';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }

  const divisor = a / 2;

  for (let i = 2; i <= divisor; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};
const getQuastionAndAnswer = () => {
  const question = random(min, max);
  const answer = isPrime(question) ? yes : no;
  const pairQuestionAndAnswer = cons(question, answer);
  return pairQuestionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
