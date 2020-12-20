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
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
