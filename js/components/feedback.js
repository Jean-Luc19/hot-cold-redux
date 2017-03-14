import React from 'react';
import { connect } from 'react-redux';
export function Feedback (props) {
    const winner = props.match ? 'you win' : props.currentTemp;
    return (
        <h1>{winner}</h1>
    );
}
const mapStateToProps = (state, props)=>({
  currentTemp: state.currentTemp,
  match: state.match
});
export default connect(mapStateToProps)(Feedback);
