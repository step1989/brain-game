#!/usr/bin/nodejs
import { nameQuestion, welcome } from './index';
import gameEven from './game-even';

welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEven(nameQuestion());
