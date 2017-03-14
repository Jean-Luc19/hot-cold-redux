import React from 'react';

export default function GuessList(props) {
    return (
        <h2>{props.guessArray.join(', ')}</h2>
    )
}
