import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();

import * as actions from '../js/actions/index';

import {gameReducer, initialState} from '../js/reducers/index';


describe('Reducer should return objects in response to different actions', function() {
    it ('should return the initial state with a newGame action', function() {
        const reducer = gameReducer(undefined, actions.newGame());
        reducer.should.be.a('object');
        reducer.modal.should.equal(false);
        reducer.match.should.equal(false);
        reducer.guessArray.should.be.a('array');
        reducer.guessArray.length.should.equal(0);
    })
    it('Should toggle the state of the modal', function() {
        const reducer = gameReducer(undefined, actions.toggleModal());
        reducer.should.be.a('object');
        reducer.modal.should.equal(true)
    })
    it('Should should return updated state objet based on guesses', function(){
    
        const newState = gameReducer(undefined, action.newGame());
        const targetNumber = newState.target;
        const wrongGuessState = gameReducer(newState, actions.guess(targetNumber + 1));
        wrongGuessState.match.should.equal(false);
        wrongGuessState.currentTemp.should.equal('en-freaking-fuego');

        const correctGuessState = gameReducer(wrongGuessState, actions.guess(targetNumber));
        correctGuessState.match.should.equal(true);
        correctGuessState.guessArray.length.should.equal(2);





    })
})
