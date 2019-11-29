import readlinesync from 'readline-sync';

export default () => {
  const name = readlinesync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
