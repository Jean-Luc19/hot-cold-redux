import React from 'react';


export default function GuessList(props) {
    return (
        <div className="GuessList">
          <h4>{props.guessArray.join(', ')}</h4>
        </div>
    )
}
