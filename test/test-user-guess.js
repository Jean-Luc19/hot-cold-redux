import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();

import {UserGuess} from '../js/components/user-guess';

describe('Component should return a number', function() {
    it('Returns a Number', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<UserGuess />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('guess-input');
        result.props.children.type.should.equal('form');
        const formKids = result.props.children.props.children;
        formKids.should.be.a('array');
        formKids.length.should.equal(2);
        formKids[0].type.should.equal('input');
        formKids[1].type.should.equal('input');
        result.props.children.props.onSubmit.should.not.be.empty;
        formKids[0].props.onChange.should.not.be.empty;
        formKids[0].props.value.should.be.equal('');
        
    });
});
