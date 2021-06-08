#!/usr/bin/env node

import greetings, {printText, getUserInput} from './cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 101); 

const isEven = (num) => num % 2 === 0;

const isCorrectAnswer = (number, answer) => {
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  if (answer !== 'yes' || answer !== 'no') printText(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  return answer === rightAnswer ? 'Correct!' : printText(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
};

greetings();
printText('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = getRandomNumber();
printText(`Question: ${randomNumber}`);
const userAnswer = getUserInput('Your answer: ');

isCorrectAnswer(randomNumber, userAnswer);
