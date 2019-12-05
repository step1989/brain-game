import readlinesync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';




// функция получения случайного числа. Максимум не включается, минимум включается
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;








// функция проверки является ли число простым
