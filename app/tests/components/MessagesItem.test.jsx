var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import MessagesItem from 'MessagesItem';

describe('MessagesItem component',() => {
    it('Should exist', () => {
        expect(MessagesItem).toExist();
    });
});
