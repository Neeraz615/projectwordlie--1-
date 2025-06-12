import React from 'react';
import Tile from './Tile';
import { checkGuess } from './utils';

const Board = ({ guesses, currentGuess, answer }) => {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    let guess = '';
    let result = [];
    if (i < guesses.length) {
      guess = guesses[i];
      result = checkGuess(guess, answer);
    } else if (i === guesses.length) {
      guess = currentGuess;
      result = [];
    }
    const rowTiles = Array.from({ length: 5 }).map((_, j) => {
      const char = guess[j] || '';
      const status = result[j] || '';
      return <Tile key={j} value={char} status={status} />;
    });
    rows.push(<div className="row" key={i}>{rowTiles}</div>);
  }

  return <div className="board">{rows}</div>;
};

export default Board;
