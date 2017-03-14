import React from 'react';

import {connect} from 'react-redux';

import CloseModal from './close-modal';

export function ModalContent(props) {
  const hide = props.modalState ? '' : 'hidden';
    return (
      <div className = {`modal-container ${hide}`}>
        <h3>Play Hot Or Cold</h3>
        <p>This is the Best Game Since HoppingScotch!</p>
        <CloseModal />
      </div>
    )
}

const mapStateToProps = (state, props)=>({
  modalState: state.modal
});
export default connect(mapStateToProps)(ModalContent);
