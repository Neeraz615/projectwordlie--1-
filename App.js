import React, { useState, useEffect } from 'react';
import Board from './Board';
import Keyboard from './Keyboard';
import { checkGuess, getWordOfTheDay } from './utils';

const App = () => {
  const [word] = useState(getWordOfTheDay()); // Fix the answer once
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [status, setStatus] = useState('playing');

  const handleKey = (key) => {
    if (status !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length === 5) {
        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        checkGameStatus(newGuesses);
        setCurrentGuess('');
      }
    } else if (key === 'DEL') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key);
    }
  };

  const checkGameStatus = (newGuesses) => {
    const last = newGuesses[newGuesses.length - 1];
    if (last === word) {
      setStatus('won');
    } else if (newGuesses.length === 6) {
      setStatus('lost');
    }
  };

  // Keyboard Events
  useEffect(() => {
    const handleKeyDown = (e) => {
      let k = e.key.toUpperCase();
      if (k === 'BACKSPACE') k = 'DEL';
      handleKey(k);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, guesses, status]);

  return (
    <div className="app">
      <h1>React Wordle</h1>
      <Board guesses={guesses} currentGuess={currentGuess} answer={word} />
      <Keyboard onKeyPress={handleKey} guesses={guesses} answer={word} />
      {status !== 'playing' && (
        <div className="message">
          {status === 'won' ? '🎉 You Win!' : `😢 You lose. Word was: ${word}`}
        </div>
      )}
    </div>
  );
};

export default App;
