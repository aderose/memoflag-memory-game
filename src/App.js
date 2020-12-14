import React from 'react';
import Header from './Header';
import CardBoard from './CardBoard';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header title="MemoFlag" score="0" topScore="0" />
      <CardBoard noOfCards={12} />
    </div>
  );
}

export default App;
