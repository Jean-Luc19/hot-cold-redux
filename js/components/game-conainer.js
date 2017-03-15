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
        <section id="container">
            <ModalButton />
            <NewGame />
            <UserGuess />
            <Feedback />
        </section>
    );
}
export default connect()(GameContainer);
