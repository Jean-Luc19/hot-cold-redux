import React from 'react';
import {connect} from 'react-redux';

export function ModalButton (props) {
    const hide = props.modalState ? 'hidden' : '';
    return (
        <div>
            <button
                className={`what-button ${hide}`}
                onClick={props.onClick}>Click
            </button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    modalState: state.modal
})

export default connect(mapStateToProps)(ModalButton);
