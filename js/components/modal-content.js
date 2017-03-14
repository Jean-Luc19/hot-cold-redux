import React from 'react';

import {connect} from 'react-redux';


export default function ModalContent(props) {
    return (
        <div>
            The state of modal state is {props.modalState ? 'true' : 'false'}
        </div>
    )
}
