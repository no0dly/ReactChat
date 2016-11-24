var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import Messages from 'Messages';

describe('Messages component',() => {
    it('Should exist', () => {
        expect(Messages).toExist();
    });
});
