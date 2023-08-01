// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
	render() {
		const { score, onNextQuestion } = this.props;
		if (score < 5) {
			return <p><h4>Your score was: {score}</h4>Oops! Your password is vulnerable to attackers.</p>;
		  } else {
			return <p><h4>Your score: {score}</h4>Thumbs up. Attackers are going to have a hard time cracking your password</p>;
		  }
		  

		  	}
}

export default Score;
