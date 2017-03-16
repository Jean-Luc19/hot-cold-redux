import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessList from './guess-list';
import ModalButton from './modal-button';
import ModalContent from './modal-content';
import NewGame from './new-game'
import * as actions from '../actions/index';

export class GameContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(
            actions.fetchGuesses()
        );
    }

    render() {
        let userGuess;
        let newGame;
        if (!this.props.match) {
            userGuess = (<UserGuess />)
        }
        else {
            newGame = (<NewGame />);
        }

        return (
          <div className="fullScreen">
            <ModalContent />
              <section id="container">
                <ModalButton />
                <div className="gameboard">
                  <h2>Thermodynamic Disambigualator</h2>
                  {userGuess}
                  <GuessList guessArray={this.props.guessArray}/>
                  <Feedback />
                  {newGame}
                </div>
                <NewGame />

            </section>
          </div>
        );
    }

}



// export function GameContainer (props) {
//     let userGuess;
//     let newGame;
//     if (!props.match) {
//         userGuess = (<UserGuess />)
//     }
//     else {
//         newGame = (<NewGame />);
//     }
//
//     return (
//       <div className="fullScreen">
//         <ModalContent />
//           <section id="container">
//             <ModalButton />
//             <div className="gameboard">
//               <h2>Thermodynamic Disambigualator</h2>
//               {userGuess}
//               <GuessList guessArray={props.guessArray}/>
//               <Feedback />
//               {newGame}
//             </div>
//             <NewGame />
//
//         </section>
//       </div>
//     );
// }

const mapStateToProps = (state, props) => ({
    match: state.match,
    guessArray: state.guessArray
})
export default connect(mapStateToProps)(GameContainer);
