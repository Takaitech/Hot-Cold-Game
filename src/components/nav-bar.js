import React from 'react';

import './nav-bar.css'
export default function NavigationBar(props) {

  return (
    <nav>
	   <h1 className='logo'>Hot / Cold </h1>
      <ul className='nav-bar-list'>
        <li className='info-link'>
          <a
            href='#info'
            className='info-link'
            onClick={() => props.onShowInfo()}
          >INFO</a>
        </li>
        <li className='new-game-link' >
          <a
            href='#game'
            className='new-game-link'
            onClick={() => props.onRestartGame()}
            >+ NEW GAME</a>
        </li>
      </ul>
    </nav>
  )
}
