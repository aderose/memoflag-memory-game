import React, { useState } from 'react';
import Header from './Header';
import Instructions from './Instructions';
import CardBoard from './CardBoard';
import Utils from './Utils';

import countries from './countries';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const generateCards = (num) =>
    Utils.generateRandomNumbers([], countries.length, num).map(
      (index) => countries[index],
    );

  const [cards, setCards] = useState(generateCards(12));

  const handleClick = (index) => () => {
    const selectedCard = cards[index];

    if (selectedCards.indexOf(selectedCard) < 0) {
      setSelectedCards([...selectedCards, selectedCard]);
      setCards(Utils.shuffle(cards));
      setScore(() => score + 1);
    } else {
      setTopScore(() => (topScore < score ? score : topScore));
      setScore(0);
      setCards(generateCards(12));
      setSelectedCards([]);
    }
  };

  return (
    <div>
      <Header title="MemoFlag" score={score} topScore={topScore} />
      <Instructions />
      <CardBoard cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
