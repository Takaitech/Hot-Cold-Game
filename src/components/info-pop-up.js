import React from 'react';

import './info-pop-up.css';


export default function InfoPopUp (props) {

   return (
     <section className='font' id="info">
       <h2>What do I do?</h2>
       <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
       <ol className='directions'>
         <li>I pick a <strong>random secret number</strong> between 1 to 99 and keep it hidden.</li>
         <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
         <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
       </ol>
       <button className='close-button' type='button' onClick={() => props.onCloseInfo()} >CLOSE</button>
     </section>
   )
}
