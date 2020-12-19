import React from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faForward,
  faBackward,
} from '@fortawesome/pro-duotone-svg-icons';

const Player = () => {
  return (
    <div className='player'>
      <div className='time-control'>
        <p>start time</p>
        <input type='range' name='' id='' />
        <p>end time</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon size='4x' className='skip-back' icon={faBackward} />
        <FontAwesomeIcon size='4x' className='play' icon={faPlayCircle} />
        <FontAwesomeIcon size='4x' className='skip-forward' icon={faForward} />
      </div>
    </div>
  );
};

export default Player;
