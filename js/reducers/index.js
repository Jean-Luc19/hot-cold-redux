import * as actions from '../actions/index';

const initialState = {
    target: Math.floor(Math.random() * 100),
    match: false,
    temps: ['frigid', 'nippy', 'tepid', 'smoldering', 'scortching', 'en-freaking-fuego' ],
    currentTemp: '',
    guessArray: [],
    modal: false,
}

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.NEW_GAME) {
        return initialState
    }
    else if (action.type === actions.GUESS){
        const guessDiff = (Math.abs(action.guessNumber - state.target));
        const newGuessArray = [...state.guessArray, action.guessNumber];
        state.input = ''

        if (guessDiff === 0) {
            return Object.assign({}, state, {match: true})
        }
        else if (guessDiff <= 5) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[5]})
        }
        else if (guessDiff <= 10) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[4]})
        }
        else if (guessDiff <= 25) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[3]})
        }
        else if (guessDiff <= 40) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[2]})
        }
        else if (guessDiff <= 60) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[1]})
        }
        else if (guessDiff > 60) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {currentTemp: state.temps[0]})
        }

    }

    else if (action.type === actions.TOGGLE_MODAL) {
        return {...state, modal: !state.modal}
    }
    return state;


};
