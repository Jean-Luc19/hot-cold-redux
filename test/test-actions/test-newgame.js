import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai'

import * as actions from '../../js/actions';

describe('actions', function() {
    it('should create an action of type NEW_GAME', function() {
        const expectedAction = {
            type: actions.newGame.type
        }
        const newGameTest = actions.newGame();
        newGameTest.type.should.equal(expectedAction.type);

    });

})
