import { evenGame } from './game-even'
import { nameQuestion, welcome } from '../index';

export const game = (gameNumber) => {
	
	welcome();

	let counter = 0;

	switch (gameNumber) {
		case 1:
			console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
			break;
		default:
			break;
	}

	const namePlayer = nameQuestion();
	
	while (true) {

		let resultGame;

		if (counter === 3) return console.log(`Congratulations, ${namePlayer}!`);


		switch (gameNumber) {
			case 1:
				resultGame = evenGame();
				break;
			default:
				break
		}
		if (resultGame) {
			console.log('Correct!');
			counter += 1;
		} else {
			return console.log(`Let's try again, ${namePlayer}!`);
		}
	}
};