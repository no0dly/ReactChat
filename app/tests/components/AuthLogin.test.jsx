var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import AuthLogin from 'AuthLogin';

describe('AuthLogin component',() => {
    it('Should exist', () => {
        expect(AuthLogin).toExist();
    });
});
