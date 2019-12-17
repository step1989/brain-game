import { car, cdr } from '@hexlet/pairs';
import readlinesync from 'readline-sync';

const gamesCount = 3;

const run = (description, getQuastionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const namePlayer = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!\n`);

  const iter = (counter) => {
    if (counter === gamesCount) {
      console.log(`Congratulations, ${namePlayer}`);
      return;
    }
    const pairQuastionAndAnswer = getQuastionAndAnswer();
    const question = car(pairQuastionAndAnswer);
    const answer = cdr(pairQuastionAndAnswer);

    const answerPlayer = readlinesync.question(`Question: ${question}\n`);

    if (answer === answerPlayer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerPlayer}' is wrong answer ;( Correct answer was '${answer}'`);
      console.log(`Let's try again, ${namePlayer}!`);
      return;
    }

    iter(counter + 1);
  };
  iter(0);
};

export default run;
