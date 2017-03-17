const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT, DATABASE_URL} = require('./config');

const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

const app = express();
const {Guess} = require('./model');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/api/guesses', (req, res) => {
    Guess
        .findOne()
        .sort("fewestGuess")
        .exec()
        .then(data => {
            res.json({
                fewestGuess: data.fewestGuess
            })
        });

});


app.post('/api/guesses', jsonParser, (req, res) => {

    Guess
        .create({fewestGuess: req.body.guesses})
        .then(data => {
            res.json({
                fewestGuess: data.fewestGuess
            })

        })

});

const runServer = function(callback) {
  mongoose.connect(DATABASE_URL, err => {
    if (err && callback) {
      return callback(err);
    }

    console.log(`Connected to db at ${DATABASE_URL}`);

    app.listen(PORT, () => {

      if (callback) {
        callback();
      }
    });
  });
};

// Check if server.js is being called directly or through ./require
if (require.main === module) {
  runServer(err => {
    if (err) {
      console.error(err);
    }
  });
}
