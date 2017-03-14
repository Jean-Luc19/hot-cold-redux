import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class CloseModal extends React.Component {
    constructor (props) {
        super(props);
    };

    handleCloseClick() {
        this.props.dispatch(actions.toggleModal());
    }

    render() {
        const hide = this.props.modalState ? '' : 'hidden';
        return (
            <button onClick={this.handleCloseClick} className={`close-button ${hide}`}>
                BackToGame
            </button>
        )
    }
}

const mapStateToProps = (state, props) => ({
    modalState: state.modal
});
