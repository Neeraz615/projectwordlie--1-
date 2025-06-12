import React from 'react';

const Tile = ({ value, status }) => {
  return (
    <div className={`tile ${status || ''}`}>
      {value}
    </div>
  );
};

export default Tile;
