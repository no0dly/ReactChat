var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import Chat from 'Chat';

describe('Chat page',() => {
    it('Should exist', () => {
        expect(Chat).toExist();
    });
});
