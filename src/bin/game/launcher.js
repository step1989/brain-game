import evenGame from './game-even';
import calcGame from './game-calc';
import { nameQuestion, welcome } from '../index';

const game = (gameNumber) => {
  welcome();

  let counter = 0;

  switch (gameNumber) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
      break;
    case 2:
      console.log('What is the result of the expression?');
      break;
    default:
  }
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
