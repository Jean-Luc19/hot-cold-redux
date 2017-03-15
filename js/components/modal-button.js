import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class ModalButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalClick = this.handleModalClick.bind(this);
    };

    handleModalClick() {
        this.props.dispatch(actions.toggleModal());
    }

    render() {
        const hide = this.props.modalState ? 'hidden' : '';
        return (
            <div>
                <button
                    onClick={this.handleModalClick}
                    className={`modal-button ${hide}`}>User Manual
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    modalState: state.modal
});

export default connect(mapStateToProps)(ModalButton);
