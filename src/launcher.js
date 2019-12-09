import { car, cdr } from '@hexlet/pairs';
import readlinesync from 'readline-sync';

export const run = (description, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const namePlayer = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!\n`);

  const gameCount = 3;
  const iter = (counter) => {
    if (counter === gameCount) {
      console.log(`Congratulations, ${namePlayer}`);
      return;
    }
    const resultFunc = func();
    const question = car(resultFunc);
    const answer = cdr(resultFunc);

    const answerPlayer = readlinesync.question(`Question: ${question}\n`);

    if (answer === answerPlayer) {
      console.log('Correct!');
    } else {
      console.log(`${answerPlayer} is wrong answer ;( Correct answer was '${answer}`);
      console.log(`Let's try again, ${namePlayer}!`);
      return;
    }

    iter(counter + 1);
  };
  iter(0);
};

export default run;
