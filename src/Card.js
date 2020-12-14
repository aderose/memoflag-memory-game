import React from 'react';

import './styles/Card.css';

function Card({ code, name }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={`http://www.geognos.com/api/en/countries/flag/${code}.png`}
          alt={name}
        />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
