#!/usr/bin/env node

import { printText, getUserInput } from './cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 101);

const isEven = (num) => num % 2 === 0;

const getRightAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

printText('Welcome to the Brain Games!');
const userName = getUserInput('May I have your name?');
printText(`Hello, ${userName}!`);
printText('Answer "yes" if the number is even, otherwise answer "no".');

const correctAnswersWinCount = 3;
let userCorrectAnswersCount = 0;

while (userCorrectAnswersCount !== correctAnswersWinCount) {
  const randomNumber = getRandomNumber();
  const correctAnswer = getRightAnswer(randomNumber);
  printText(`Question: ${randomNumber}`);
  const userAnswer = getUserInput('Your answer: ');
  if (isCorrectAnswer(correctAnswer, userAnswer)) {
    printText('Correct!');
    userCorrectAnswersCount += 1;
  } else {
    printText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    printText(`Let's try again, ${userName}!`);
    break;
  }
}

if (userCorrectAnswersCount === correctAnswersWinCount) printText(`Congratulations, ${userName}!`);
