import React from 'react';
import Header from './Header';
import Card from './Card';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header title="MemoFlag" score="0" topScore="0" />
      <div className="cards container">
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
    </div>
  );
}

export default App;
