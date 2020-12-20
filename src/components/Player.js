import React, { useRef } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faForward,
  faBackward,
  faPauseCircle,
} from '@fortawesome/pro-duotone-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
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
  return (
    <div className='player'>
      <div className='time-control'>
        <p>start time</p>
        <input type='range' name='' id='' />
        <p>end time</p>
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
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
