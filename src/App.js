import React, { useState } from 'react';
// data
import data from './data';
// styles
import './styles/App.scss';
// components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
