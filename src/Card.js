import React from 'react';

import './styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.src} alt={props.alt} />
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
