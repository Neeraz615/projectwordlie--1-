import React from 'react';

const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export default function Keyboard({ onKeyPress }) {
  return (
    <div className="keyboard">
      {rows.map((row, idx) => (
        <div key={idx} className="keyboard-row">
          {row.split('').map(letter => (
            <button
              key={letter}
              onClick={() => onKeyPress(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <button onClick={() => onKeyPress('ENTER')}>ENTER</button>
        <button onClick={() => onKeyPress('DEL')}>DEL</button>
      </div>
    </div>
  );
}
