import React from 'react';
import {connect} from 'react-redux';

import Feedback from './feedback';

import userGuess from './user-guess';

import guessList from './guess-list';

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  makeGuess(e) {
      const guessNum = e.target.value;
  }

  render() {

    return (
        <section id="container">
            <Feedback temp={this.props.currentTemp} />
            <UserGuess onSubmit={this.makeGuess} />
            <GuessList />
        </section>
    );
  }
}

//connect to state
