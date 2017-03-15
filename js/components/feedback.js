import React from 'react';
import { connect } from 'react-redux';
export function Feedback (props) {
    const winner = props.match ? 'you win' : props.currentTemp;
    return (
        <div className="Feedback"><p>{winner}</p></div>
    );
}
const mapStateToProps = (state, props)=>({
  currentTemp: state.currentTemp,
  match: state.match
});
export default connect(mapStateToProps)(Feedback);
