import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessList from './guess-list';
import * as actions from '../actions/index';

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(input) {
      this.props.dispatch(actions.guess(input.value));
  }

  render() {

    return (
        <section id="container">
            <UserGuess onClick={this.handleClick} />
            <GuessList guessArray={this.props.guessArray} />
            <Feedback currentTemp={this.props.currentTemp} match={this.props.match}/>
        </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
    currentTemp: state.currentTemp,
    guessArray: state.guessArray,
    target: state.target,
    match: state.match
});

export default connect(mapStateToProps)(GameContainer);
