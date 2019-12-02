import evenGame from './game-even';
import calcGame from './game-calc';
import gcdGame from './game-gcd';
import { nameQuestion, welcome } from '../index';

const game = (gameNumber) => {
  welcome();

  let counter = 0;

  switch (gameNumber) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    default:
  }
  console.log('\n');
  // Спрашиваем и получаем имя игрока
  const namePlayer = nameQuestion();

  while (true) {
    let resultGame;

    // игра прекращается если были даны 3 верных ответа
    if (counter === 3) return console.log(`Congratulations, ${namePlayer}!`);

    switch (gameNumber) {
      case 'brain-even':
        resultGame = evenGame();
        break;
      case 'brain-calc':
        resultGame = calcGame();
        break;
      case 'brain-gcd':
        resultGame = gcdGame();
        break;
      default:
    }

    if (resultGame) {
      console.log('Correct!');
      counter += 1;
    } else {
      return console.log(`Let's try again, ${namePlayer}!`);
    }
  }
};
export default game;
