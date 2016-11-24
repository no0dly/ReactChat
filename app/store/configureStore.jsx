var redux = require('redux');
var { loginReducer } = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        logged: loginReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}
