var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils =  require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import Messages from 'Messages';
import MessagesItem from 'MessagesItem';

describe('Messages component',() => {
    it('Should exist', () => {
        expect(Messages).toExist();
    });

    it('Should render one message component for each message', () => {
        var initMessages = [{
            user: {name: 'vadim', login: 'Lol'},
            time: 142342,
            body: 'Hello'
        }, {
            user: {name: 'vadim2', login: 'Lol2'},
            time: 142344,
            body: 'Hello'
        }];

        var store = configure({
            messages: initMessages
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <Messages/>
            </Provider>
        );

        var messages = TestUtils.scryRenderedComponentsWithType(provider, Messages)[0];
        var messageComponents = TestUtils.scryRenderedComponentsWithType(messages, MessagesItem);

        expect(messageComponents.length).toBe(initMessages.length);
    });
});
