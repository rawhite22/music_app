import React, { useRef, useState } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faForward,
  faBackward,
  faPauseCircle,
} from '@fortawesome/pro-duotone-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // state
  const [songInfo, setSongInfo] = useState({
    current: null,
    duration: null,
  });
  // refs
  const audioRef = useRef(null);
  // events
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ current, duration });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.current)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
          type='range'
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon size='3x' className='skip-back' icon={faBackward} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size='4x'
          className='play'
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon size='3x' className='skip-forward' icon={faForward} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
