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
      <div>
        {console.log(playerData)}
        {/* {console.log(result)} */}
      </div>
    </div>
  );
}

export default App;
