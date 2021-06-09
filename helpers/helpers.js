import { getUserInput, printText } from '../bin/cli.js';

export const getRandomNumber = () => Math.floor(Math.random() * 101);

export const isCorrectAnswer = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

export const greetPlayerAndGetPlayerName = () => {
  printText('Welcome to the Brain Games!');
  const userName = getUserInput('May I have your name?');
  printText(`Hello, ${userName}!`);
  return userName;
};
