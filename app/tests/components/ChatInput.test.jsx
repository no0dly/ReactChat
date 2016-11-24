var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import ChatInput from 'ChatInput';

describe('ChatInput component',() => {
    it('Should exist', () => {
        expect(ChatInput).toExist();
    });
});
