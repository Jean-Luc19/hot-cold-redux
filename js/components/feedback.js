import React from 'react';

export default function Feedback (props) {
    const winner = props.match ? 'you win' : props.currentTemp;
    return (
        <h1>{winner}</h1>
    )
}
