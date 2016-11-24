var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers',() => {
    it('Should change logged to true', () => {
        var action = {
            type: 'LOGIN'
        };
        var res = reducers.loginReducer(df(false),df(action));

        expect(res).toEqual(true);
    });
});
