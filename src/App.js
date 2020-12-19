import React from 'react';
// styles
import './styles/App.scss';
// components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div className='App'>
      <h1>Music App</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
