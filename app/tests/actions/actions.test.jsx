var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('Login', () => {
        var action = {
            type: 'LOGIN'
        };
        var res = actions.login();

        expect(res).toEqual(action);
    });

    it('GetInitialMessages', () => {
        var action = {
            type: 'GET_INITIAL_MESSAGES',
            messages: ['Bla', 'BLe']
        };
        var res = actions.getInitialMessages(action.messages);

        expect(res).toEqual(action);

    });

    it('Add message', () => {
        var action = {
            type: 'ADD_MESSAGE',
            user: {name: 'vadim', login: 'Lol'},
            body: 'Hello',
            time: 142342
        };

        var res = actions.addMessage(action.user, action.body, action.time);

        expect(res).toEqual(action);
    });

    it('SetUser', () => {
        var action = {
            type: 'SET_USER',
            name: 'Bla',
            login: 'Blu',
            token: 'Ble'
        };
        var res = actions.setUser(action.name, action.login, action.token);

        expect(res).toEqual(action);

    });
});
