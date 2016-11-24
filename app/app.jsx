var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');

var actions    = require('actions');
var store      = require('configureStore').configure();

import Chat from 'Chat';
import socket from 'wsAPI';

store.subscribe(()=> {
    var state = store.getState();
    console.log('NewState ', state);
});

require('style!css!sass!AppCss');

ReactDOM.render(
    <Provider store={store}>
        <Chat/>
    </Provider>,
    document.getElementById('app')
);
