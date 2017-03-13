import * as actions from '../actions/index';

const initialRepositoryState = {
    target: Math.floor(Math.random() * 100),
    match: false,
    temps: ['frigid', 'nippy', 'tepid', 'smoldering', 'scortching', 'en-freaking-fuego' ],
    currentTemp: '',
    guesses: [],
}

export const gameReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.NEW_GAME) {
        return initialRepositoryState
    }
    else if (action.type === actions.GUESS){
        const newGuessArray = [...state.guesses, action.guessNumber];

        if (action.guessNumber === state.target) {
            return Object.assign({}, state, {match: true})
        }
        else if (Math.abs(action.guessNumber - state.target) <= 5) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[5]})
        }
        else if (Math.abs(action.guessNumber - state.target) <= 10) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[4]})
        }
        else if (Math.abs(action.guessNumber - state.target) <= 25) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[3]})
        }
        else if (Math.abs(action.guessNumber - state.target) <= 40) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[2]})
        }
        else if (Math.abs(action.guessNumber - state.target) <= 60) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[1]})
        }
        else if (Math.abs(action.guessNumber - state.target) > 60) {
            return Object.assign({}, state, {guesses: newGuessArray}, {currentTemp: state.temps[0]})
        }
    }
    return state;


};
