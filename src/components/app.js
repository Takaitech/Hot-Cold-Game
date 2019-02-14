import React, {Component} from 'react';

import NumberInput from './number-input';
import GameData from './game-data-tracker';
import NavigationBar from './nav-bar';
import Feedback from './feedback';
import InfoPopUp from './info-pop-up';


import './app.css'
export default class App extends Component {
	constructor(props) {
	       super(props);
	        this.state = {
						correctAnswer: Math.floor(Math.random() * 99) + 1,
						attempts: [],
						feedBack: "Make Your Guess!",
						showInfo: false
					}
	}

  restartGame() {
    this.setState({
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      attempts: [],
      feedBack: 'Make Your Guess!',
			showInfo: true
    });
  }

	showInfo() {
		this.setState({
			showInfo: true
		})
	}

	closeInfo() {
		this.setState({
			showInfo: false
		})
	}




	makeGuess(guess) {
		guess = parseInt(guess, 10);
	if (isNaN(guess)) {
		this.setState({ feedback: 'Please enter a valid number' });
		return;
	}

	const difference = Math.abs(guess - this.state.correctAnswer);

	let feedback;
	if (difference >= 50) {
		feedback = 'You\'re Ice Cold...';
	} else if (difference >= 30) {
		feedback = 'You\'re Cold...';
	} else if (difference >= 10) {
		feedback = 'You\'re Warm.';
	} else if (difference >= 5) {
		feedback = 'You\'re Hot!';
	} else if (difference >= 1) {
		feedback = 'You\'re On Fire!';
	} else {
		feedback = 'You got it!';
	}

	this.setState({
		feedBack: feedback,
		attempts: [...this.state.attempts, guess]
	})

	}


	render() {
		return (
			<div>
				<div>
					<NavigationBar
						onRestartGame={() => this.restartGame()}
						onShowInfo={() => this.showInfo()}
						 />
				</div>
				<main id='game-container' className='game-container'>
					<Feedback id="feedback" label={this.state.feedBack} />
					<NumberInput
						onClick={value => this.updateAnswer(value)}
						onMakeGuess={guess => this.makeGuess(guess)}
 					/>
					<GameData id='game-data' attempts={this.state.attempts} />
				</main>
				{
					this.state.showInfo?
						(<div className='info-container'>
							<InfoPopUp onCloseInfo={() => this.closeInfo()} appState={this.state.appState} />
						</div>)
						:(null)
					}
			</div>
		);
	}
}
