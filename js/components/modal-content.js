import React from 'react';

import {connect} from 'react-redux';

import CloseModal from './close-modal';

export function ModalContent(props) {
  const hide = props.modalState ? '' : 'hidden';
    return (
      <div className = {`modal-container ${hide}`}>
        <div className ="innerModal">
          <h3>Play Hot Or Cold</h3>
          <p>This is the Best Game Since HoppingScotch!</p>
          <ul>
              <p>Simply Enter A Number</p>
              <p>Press Submit...</p>
              <p>And Let The Fun Begin!</p>
              <p>Once you HOT you can't STOP</p>
          </ul>
          <CloseModal />
        </div>
      </div>
    )
}

const mapStateToProps = (state, props)=>({
  modalState: state.modal
});
export default connect(mapStateToProps)(ModalContent);
