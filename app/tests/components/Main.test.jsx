var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import Main from 'Main';

describe('Main component',() => {
    it('Should exist', () => {
        expect(Main).toExist();
    });
});
