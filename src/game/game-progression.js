import { cons, car, cdr } from '@hexlet/pairs';
import runGame from '../launcher';
import random from '../lib/secondary-function';

const description = 'What number is missing in the progression?';
// параметры:
// start - первое число
// length - количество сгенерированных чисел в прогресии
// sub - разность арифмитической прогрессии
// pass - позиция числа которое будет пропушено
// возвращает пару - вопрос - ответ
// первый элемент - строка для вывода на экран
// второй элемент - число которое пропустили
const arihmProgress = (start, length, sub, pass) => {
  const end = start + sub * (length - 1);
  const answerMinusSub = start + sub * (pass - 1);

  const iter = (counter, acc) => {
    if (counter === end) {
      return acc;
    }
    if (counter === answerMinusSub) {
      const pair = cons(`${car(acc)} ..`, String(cdr(acc) + sub));
      return iter(counter + sub, pair);
    }
    const pair = cons(`${car(acc)} ${counter + sub}`, cdr(acc));
    return iter(counter + sub, pair);
  };

  const pair = iter(start, cons(String(start), answerMinusSub));
  return pair;
};

const gameProgression = () => {
  const game = () => {
    // подготавливаем параметры для получения пары - ответ, прогрессия
    const start = random(1, 20);
    const length = 10;
    const sub = random(1, length);
    const pass = random(1, length);

    // получаем пару вопрос, ответ
    const pairQA = arihmProgress(start, length, sub, pass);
    return pairQA;
  };
  runGame(description, game);
};


export default gameProgression;
