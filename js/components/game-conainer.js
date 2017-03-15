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
    this.handleModalClick = this.handleModalClick.bind(this);
  };

  handleModalClick() {
      this.props.dispatch(actions.toggleModal());
  }

  render() {

    return (
        <section id="container">
            <UserGuess />
            <ModalContent />
            <GuessList />
            <Feedback />
            <ModalButton onClick={this.handleModalClick} />
        </section>
    );
  }
}
export default connect()(GameContainer);
