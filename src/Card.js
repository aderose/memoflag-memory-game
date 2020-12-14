import React from 'react';

import './styles/Card.css';

function Card({ code, name, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <div className="img-container">
        <img
          src={`https://images.weserv.nl/?url=http://www.geognos.com/api/en/countries/flag/${code}.png&w=200`}
          alt={name}
        />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
