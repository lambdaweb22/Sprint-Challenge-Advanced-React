import React from 'react';
import './App.css';

import UsePlayerData from './hooks/UsePlayerData';

function App() {
  const playerData = UsePlayerData([]);

  return (
    <div className="App">
      <header className="App-header">
        Sprint Challenge
      </header>
      <div className="wrapper">
        {console.log(playerData)}
        {playerData.map(player => (
          <div className="player-wrapper">
            <div>Name: {player.name}</div>
            <div>Country: {player.country}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
