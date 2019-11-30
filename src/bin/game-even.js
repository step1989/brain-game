import readlinesync from 'readline-sync';
import { getRandomInt, isEven } from './index';


// функция игры четное\ нечетное
export default (namePlayer) => {
  let counter = 0;// счетчик правильных ответов
  const checkCounter = 3;// константа для проверки количества верных ответов
  // две константы для рандомного числа
  const min = 1;
  const max = 100;
  const isYes = 'yes'; //
  const isNo = 'no';
  while (true) {
    if (counter === checkCounter) {
      console.log(`Congratulations, ${namePlayer}!`);
      break;
    }

    const number = getRandomInt(min, max);
    const answer = readlinesync.question(`Question: ${number}\n`);
    console.log(`Your answer: ${answer}`);

    if (isEven(number) && answer === isYes) {
      counter += 1;
      console.log('Correct!');
    } else if (!isEven(number) && answer === isNo) {
      counter += 1;
      console.log('Correct!');
    } else if (isEven(number) && answer !== isYes) {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${isYes}'`);
      console.log(`Let's try again, ${namePlayer}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer was '${isNo}'`);
      console.log(`Let's try again, ${namePlayer}!`);
      break;
    }
  }
};
