import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();

import * as actions from '../js/actions/index';

import {gameReducer, initialState} from '../js/reducers/index';


describe('Reducer should return objects in response to different actions', function() {
    it ('should return the initial state with a newGame action', function() {
        const newGameTest = gameReducer(initialState, actions.newGame());

    })
    it('Should toggle the state of the modal', function() {
        const reducer = gameReducer(undefined, actions.toggleModal());
        reducer.should.be.a('object');
        console.log(reducer);

    })
})
