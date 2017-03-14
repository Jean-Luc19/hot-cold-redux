import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessList from './guess-list';
import * as actions from '../actions/index';
import ModalButton from './modal-button';
import ModalContent from './modal-content';

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  };

  handleClick(input) {
      this.props.dispatch(actions.guess(input.value));
  }
  handleModalClick() {
      this.props.dispatch(actions.toggleModal());
  }

  render() {

    return (
        <section id="container">
            <UserGuess onClick={this.handleClick} />
            <GuessList guessArray={this.props.guessArray} />
            <Feedback currentTemp={this.props.currentTemp} match={this.props.match}/>
            <ModalButton onClick={this.handleModalClick} />
            <ModalContent modalState={this.props.modal} />
        </section>
    );
  }
}

const mapStateToProps = (state, props) => ({
    currentTemp: state.currentTemp,
    guessArray: state.guessArray,
    target: state.target,
    match: state.match,
    modal: state.modal
});

export default connect(mapStateToProps)(GameContainer);
