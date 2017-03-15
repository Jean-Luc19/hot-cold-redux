import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessList from './guess-list';
import ModalButton from './modal-button';
import ModalContent from './modal-content';
import NewGame from './new-game'

export function GameContainer (props) {
    return (
      <div className="fullScreen">
        <ModalContent />
          <section id="container">
            <ModalButton />
            <div className="gameboard">
              <h2>Themodynamic Disambigualator</h2>
              <UserGuess />
              <GuessList />
              <Feedback />
            </div>
            <NewGame />
        </section>
      </div>
    );
}
export default connect()(GameContainer);
