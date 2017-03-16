/*
Actions for hot cold game:
    new game: sets new random number target, sets new empty array of guesses
    guess actions: button. Adds a selected number to a guesses array, compares that number to the target number. If guess number === target number
*/

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
});

export const GUESS = 'GUESS';
export const guess = guessNumber => ({
    type: GUESS,
    guessNumber
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
    type: TOGGLE_MODAL
});

export const FETCH_GUESSES_SUCCESS = 'FETCH_GUESS_SUCCESS';
export const fetchGuessesSuccess = (guessTotal)  => ({
    type: FETCH_GUESSES_SUCCESS,
    guessTotal
});

export const FETCH_GUESSES_FAILURE = 'FETCH_GUESS_FAILURE';
export const fetchGuessesFailure = (error)  => ({
    type: FETCH_GUESSES_FAILURE,
    error
});

export const fetchGuesses = () => dispatch => {
    const url = `http://localhost:8081/api/guesses`
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                const error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(response => response.json())
        .then(data =>
            dispatch(fetchGuessesSuccess(data.guesses))
        )
        .catch(err =>
            dispatch(fetchGuessesFailure(err))
        );
};
