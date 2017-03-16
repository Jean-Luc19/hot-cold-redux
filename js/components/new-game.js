import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class NewGame extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewGameClick = this.handleNewGameClick.bind(this);
    };

    handleNewGameClick() {
        let guessNumber = this.props.guessArray.length;
        this.props.dispatch(actions.postNewGuessTotal(guessNumber));
        this.props.dispatch(actions.newGame());


    }

    render() {
        const hide = this.props.modalState ? 'hidden' : '';
        return (
            <div>
                <button
                    onClick={this.handleNewGameClick}
                    className={`modal-button ${hide}`}>New Game
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    guessArray: state.guessArray,
    guessTotal: state.guesttTotal
})
export default connect(mapStateToProps)(NewGame);
