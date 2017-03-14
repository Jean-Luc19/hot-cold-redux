import React from 'react';

export default class UserGuess extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    return (
            <div className="guess-input">
                <input type="text" placeholder="Take a Guess"
                    ref={ref => this.guessInput = ref}
                />
                <button onClick={() => this.props.onClick(this.guessInput)}>Submit
                </button>
            </div>


    );
  }
}
