import React from 'react';
import Card from './Card';

import './styles/CardBoard.css';

function CardBoard({ cards, handleClick }) {
  return (
    <div className="card-board container">
      {cards.map(({ code, name }, index) => (
        <Card
          code={code}
          name={name}
          handleClick={handleClick(index)}
          key={name}
        />
      ))}
    </div>
  );
}

export default CardBoard;
