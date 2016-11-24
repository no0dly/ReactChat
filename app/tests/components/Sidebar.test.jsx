var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');

import Sidebar from 'Sidebar';

describe('Sidebar component',() => {
    it('Should exist', () => {
        expect(Sidebar).toExist();
    });
});
