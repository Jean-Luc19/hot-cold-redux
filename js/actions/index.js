/*
Actions for hot cold game:
    new game: sets new random number target, sets new empty array of guesses
    guess actions: button. Adds a selected number to a guesses array, compares that number to the target number. If guess number === target number
*/

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
});

export const GUESS = 'GUESS';
export const guess = guessNumber => ({
    type: GUESS,
    guessNumber
});
