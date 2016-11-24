var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('Login', () => {
        var action = {
            type: 'LOGIN'
        }
        var res = actions.login();

        expect(res).toEqual(action);
    });
});
