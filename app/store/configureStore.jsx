var redux = require('redux');
var { loginReducer, messageReducer, userReducer } = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        logged: loginReducer,
        messages: messageReducer,
        user: userReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}
