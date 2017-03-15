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
        const testState = {
            target: 0,
            match: false,
            temps: ['frigid', 'nippy', 'tepid', 'smoldering', 'scortching', 'en-freaking-fuego' ],
            currentTemp: '',
            guessArray: [],
            modal: false,
        }

        const reducer = gameReducer(testState, actions.guess(0));
        reducer.match.should.equal(true);
        const reducer2 = gameReducer(testState, actions.guess(50));
        reducer2.match.should.equal(false);
        reducer2.guessArray.length.should.equal(1);
        reducer2.currentTemp.should.equal('nippy');




    })
})
