import React from 'react';
import { connect } from 'react-redux';

export function GuessList(props) {
    return (
        <h2>{props.guessArray.join(', ')}</h2>
    )
}

const mapStateToProps = (state, props)=>({
  guessArray: state.guessArray
});
export default connect(mapStateToProps)(GuessList);
