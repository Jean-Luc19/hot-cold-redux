import React from 'react';

import {connect} from 'react-redux';


export function ModalContent(props) {
  const hide = props.modalState ? '' : 'hidden';
    return (
      <div className = {`modal-container ${hide}`}>
        <h3>This is a Modal</h3>
        <p>Content, content, content.</p>
      </div>
    )
}

const mapStateToProps = (state, props)=>({
  modalState: state.modal
});
export default connect(mapStateToProps)(ModalContent);
