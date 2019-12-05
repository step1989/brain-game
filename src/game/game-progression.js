import run from '../launcher';
import { cons, car, cdr } from '@hexlet/pairs';

const gameProgression = () => {
  const description = 'What number is missing in the progression?';
  const game = () => {
    // подготавливаем параметры для получения пары - ответ, прогрессия
    const start = getRandomInt(1, 20);
    const length = 10;
    const sub = getRandomInt(1, 11);
    const pass = getRandomInt(1, length);

    // получаем пару вопрос, ответ
    const pairQA = arihmProgress(start, length, sub, pass);
    return pairQA;
  };
  run(description, game);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// параметры:
// start - первое число
// length - последние число в прогрессии
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

export default gameProgression;
