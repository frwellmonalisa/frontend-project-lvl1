import readlineSync from 'readline-sync';

export const printText = (text) => console.log(text);

export const getUserInput = (text) => readlineSync.question(text);

const greetings = () => {
  printText('Welcome to the Brain Games!');
  const userName = getUserInput('May I have your name?');
  printText(`Hello, ${userName}!`);
};

export default greetings;
