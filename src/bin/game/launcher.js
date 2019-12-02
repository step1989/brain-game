import evenGame from './game-even';
import calcGame from './game-calc';
import gcdGame from './game-gcd';
import { nameQuestion, welcome } from '../index';

const game = (gameNumber) => {
  welcome();

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
  // Спрашиваем и получаем имя игрока
  const namePlayer = nameQuestion();
  // что бы выиграть необходимо дать 3 верных ответа
  // используем рекурсивную функцию
  const step = (counter) => {
    if (counter === 3) return true;
    let resultGame;

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
    // если ответ верный повторяем игру
    if (resultGame) {
      console.log('Correct!');
      return step(counter + 1);
    }
    // если ответ неверный завершаем игру
    return false;
  };

  if (step(0)) console.log(`Congratulations, ${namePlayer}!`);
  else console.log(`Let's try again, ${namePlayer}!`);
};
export default game;
