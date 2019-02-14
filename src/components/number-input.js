import React, {Component} from 'react';

import './number-input.css';

export default class NumberInput extends Component {

 	onSubmit(event) {
		event.preventDefault();
    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

 render() {
	return(
		<form onSubmit={event => this.onSubmit(event)} className='form-group'>
			<input
				className='number-input'
				type='text'
				id='number'
				placeholder='Enter your guess'
				min="1"
				max="99"
				maxLength='2'
				autoComplete="off"
				ref={input => (this.input = input)}
				required
			/>
			<button
				type='submit'
				name='submit'
				className='submit-button'
			>
				Guess
			</button>
		</form>
	);
}
}
