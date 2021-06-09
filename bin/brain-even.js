#!/usr/bin/env node

import gameEngine from '../helpers/game-engine.js';
import { getRandomNumber, greetPlayerAndGetPlayerName } from '../helpers/helpers.js';
import { printText } from './cli.js';

const isEven = (num) => num % 2 === 0;

const getRightAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const userName = greetPlayerAndGetPlayerName();
printText('Answer "yes" if the number is even, otherwise answer "no".');

gameEngine({
  userName,
  gameLogic: {
    generateQuestion: () => getRandomNumber(),
    printQuestion: (question) => printText(`Question: ${question}`),
    getCorrectAnswer: (question) => getRightAnswer(question),
  },
});
