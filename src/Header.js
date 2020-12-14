import React from 'react';
import './styles/Header.css';

function Header(props) {
  return (
    <header>
      <div className="wrapper container text-center">
        <h1>{props.title}</h1>
        <div className="scores">
          <p>
            <strong>Score:</strong> {props.score}
          </p>
          <p>
            <strong>Top Score:</strong> {props.topScore}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
