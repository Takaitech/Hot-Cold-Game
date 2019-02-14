import React from 'react';

import './game-data-tracker.css'
export default function GameData(props) {
const attempts = props.attempts.map((attempt, index) => (
    <li className='attempt' key={index}>
      {attempt}
    </li>
  ));

const numberOfAttempts = (props.attempts.length + 1);

  return(
    <div className='game-data' >
      <div className='guess-number'>
        <p>Guess # {numberOfAttempts}</p>
      </div>
      <div className='previous-attempts'>
        <ul>
          {attempts}
        </ul>
      </div>
    </div>
  )
}
