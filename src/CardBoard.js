import React from 'react';
import Card from './Card';
import './styles/CardBoard.css';

function CardBoard(props) {
  return (
    <div className="card-board container">
      <Card
        src="http://www.geognos.com/api/en/countries/flag/IT.png"
        alt="Italy Flag"
        description="Italy"
      />
      <Card
        src="http://www.geognos.com/api/en/countries/flag/GB.png"
        alt="Great Britain Flag"
        description="Great Britain"
      />
      <Card
        src="http://www.geognos.com/api/en/countries/flag/DE.png"
        alt="Germany Flag"
        description="Germany"
      />
    </div>
  );
}

export default CardBoard;
