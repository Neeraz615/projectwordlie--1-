export const getWordOfTheDay = () => {
  return 'MOUSE'; // Replace with random selection if needed
};

export const checkGuess = (guess, answer) => {
  const result = Array(5).fill('grey'); // default to "red" for incorrect
  const answerArr = answer.split('');

  // First pass: green
  guess.split('').forEach((char, i) => {
    if (char === answer[i]) {
      result[i] = 'green';
      answerArr[i] = null;
    }
  });

  // Second pass: yellow
  guess.split('').forEach((char, i) => {
    if (result[i] === 'grey' && answerArr.includes(char)) {
      result[i] = 'yellow';
      answerArr[answerArr.indexOf(char)] = null;
    }
  });

  return result;
};
