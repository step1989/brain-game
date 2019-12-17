import { cons } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What is the result of the expression?';
const min = 1;
const max = 20;
const operations = '+-*';
const startIndex = 0;
const endIndex = operations.length - 1;

const addition = (a, b) => a + b;

const substraction = (a, b) => a - b;

const multi = (a, b) => a * b;

const getAnswer = (operation, a, b) => {
  switch (operation) {
    case '+':
      return addition(a, b);
    case '-':
      return substraction(a, b);
    case '*':
      return multi(a, b);
    default:
      return false;
  }
};

const getQuastionAndAnswer = () => {
  const a = random(min, max);
  const b = random(min, max);
  const operation = operations[random(startIndex, endIndex)];

  const question = `${a} ${operation} ${b}`;
  const answer = String(getAnswer(operation, a, b));
  const pairQuestionAndAnswer = cons(question, answer);
  return pairQuestionAndAnswer;
};

runGame(description, getQuastionAndAnswer);

export default getQuastionAndAnswer;
