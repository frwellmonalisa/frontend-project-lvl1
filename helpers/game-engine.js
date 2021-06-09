import { getUserInput, printText } from '../bin/cli.js';
import { isCorrectAnswer } from './helpers.js';

const gameEngine = (options) => {
  const { userName, gameLogic } = options;
  const { generateQuestion, printQuestion, getCorrectAnswer } = gameLogic;

  const correctAnswersWinCount = 3;
  let userCorrectAnswersCount = 0;

  while (userCorrectAnswersCount !== correctAnswersWinCount) {
    const question = generateQuestion();
    printQuestion(question);
    const correctAnswer = getCorrectAnswer(question);
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
};

export default gameEngine;
