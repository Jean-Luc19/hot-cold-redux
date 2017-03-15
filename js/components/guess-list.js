import React from 'react';
import { connect } from 'react-redux';

export function GuessList(props) {
    return (
        <div className="GuessList">
          <h4>{props.guessArray.join(', ')}</h4>
        </div>
    )
}

const mapStateToProps = (state, props)=>({
  guessArray: state.guessArray
});
export default connect(mapStateToProps)(GuessList);
