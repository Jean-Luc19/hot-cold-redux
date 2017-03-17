const mongoose = require('mongoose');

const guessSchema = mongoose.Schema({
    fewestGuess: Number
})

const Guess = mongoose.model('Guess', guessSchema);
module.exports = {Guess};
