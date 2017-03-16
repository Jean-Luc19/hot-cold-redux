import * as actions from '../actions/index';

const initialState = {
    target: Math.floor(Math.random() * 100),
    match: false,
    temps: ['frigid', 'nippy', 'tepid', 'smoldering', 'scortching', 'en-freaking-fuego' ],
    currentTemp: '',
    guessArray: [],
    modal: false,
    guessTotal: null
}

export const gameReducer = (state=initialState, action) => {
    if (action.type === actions.NEW_GAME) {
        const newGuessArray = [];

        return Object.assign({}, state, {guessArray: [], currentTemp: '', match: false, target: Math.floor(Math.random() * 100)});
    }
    else if (action.type === actions.GUESS){
        const guessDiff = (Math.abs(action.guessNumber - state.target));
        const newGuessArray = [...state.guessArray, action.guessNumber];
        state.input = ''

        if (guessDiff === 0) {
            return Object.assign({}, state, {guessArray: newGuessArray}, {match: true})
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

    else if (action.type === actions.FETCH_GUESSES_SUCCESS) {
        return {...state, guessTotal: action.guessTotal}
    }

    else if (action.type === actions.FETCH_GUESSES_FAILURE) {
        return {...state, guessTotal: action.error}
    }

    return state;


};
