import React, { useState } from 'react';
import Card from './Card';

import countries from './countries';
import Utils from './Utils';

import './styles/CardBoard.css';

function CardBoard({ noOfCards }) {
  const [cards, setCards] = useState(
    Utils.generateRandomNumbers([], countries.length, noOfCards).map(
      (index) => countries[index],
    ),
  );

  return (
    <div className="card-board container">
      {cards.map(({ code, name }) => (
        <Card code={code} name={name} key={name} />
      ))}
    </div>
  );
}

export default CardBoard;
