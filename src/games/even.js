import gameEngine from '../gameEngine.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (num) => num % 2 === 0;

const gameLogic = () => {
  const question = randomNum(100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => gameEngine(description, gameLogic);
