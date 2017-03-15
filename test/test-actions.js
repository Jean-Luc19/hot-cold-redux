import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();

import * as actions from '../js/actions/index';


describe('Should return objects with type and payload', function() {
    it('Should return an object with type NEW_GAME', function() {
        const newGameTest = actions.newGame();
        newGameTest.should.be.a('object');
        newGameTest.type.should.equal('NEW_GAME');
    });

    it('Should return an object with type GUESS', function(){
        const testNum = 5;
        const guessTest = actions.guess(testNum);
        guessTest.guessNumber.should.equal(5);
        console.log(guessTest);
    })
    it('Should return an object with type TOGGLE_MODAL', function(){
        const modaltest = actions.toggleModal();
        modaltest.type.should.equal('TOGGLE_MODAL');
    })
});
