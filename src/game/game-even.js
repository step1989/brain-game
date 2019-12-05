import readlinesync from 'readline-sync';
import run from '../launcher';
import { cons, car, cdr, toString } from '@hexlet/pairs';

// функция игры четное\ нечетное
const gameEven = () =>{
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  
  const runGame = () => {
    // числа для диапозона выбора случайного числа
    const min = 1;
    const max = 101;
    // константы ответов
    const isYes = 'yes'; //
    const isNo = 'no';

    const question = getRandomInt(min, max);
    const answer = isEven(question) ? isYes : isNo;
    // пара вопрос ответ
    const pairQA = cons(question, answer);
    return pairQA;
  };
  //const a = gameEven();
  run(description, runGame);
};

// функция проверки числа на четность
const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default gameEven;
