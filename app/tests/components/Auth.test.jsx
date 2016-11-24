var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import Auth from 'Auth';

describe('Auth component',() => {
    it('Should exist', () => {
        expect(Auth).toExist();
    });
});
