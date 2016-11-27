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

    it('Should generate initial messages', () => {
        var messages = [{
            user: {name: 'vadim', login: 'Lol'},
            time: 142342,
            body: 'Hello'
        }, {
            user: {name: 'vadim2', login: 'Lol2'},
            time: 142344,
            body: 'Hello'
        }];

        var action = {
            type: 'GET_INITIAL_MESSAGES',
            messages
        };

        var res = reducers.messageReducer(df([]), df(action));

        expect(res).toEqual(messages);
        expect(res[0].time).toEqual(messages[0].time);
    });

    it('Should add message to exist array of messages', () => {
        var initMessages = [{
            user: {name: 'vadim', login: 'Lol'},
            time: 142342,
            body: 'Hello'
        }, {
            user: {name: 'vadim2', login: 'Lol2'},
            time: 142344,
            body: 'Hello'
        }];

        var action = {
            type: 'ADD_MESSAGE',
            user: {name: 'vadim3', login: 'Lol4'},
            time: 142345,
            body: 'Hello22'
        };

        var res = reducers.messageReducer(df(initMessages), df(action));

        expect(res.length).toBe(3);
    });

    it('Should generate user info', () => {
        var action = {
            type: 'SET_USER',
            name: 'Bla',
            login: 'Blu',
            token: 'Ble'
        };
        var res = reducers.userReducer(df([]), df(action));

        expect(res.name).toEqual(action.name);
    });
});
