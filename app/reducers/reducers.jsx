var moment = require('moment');
var uuid = require('uuid');

export var loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        default:
            return state;
    }
};

export var messageReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'GET_INITIAL_MESSAGES':
            return [
                ...action.messages
            ]
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    user: action.user,
                    body: action.body,
                    time: action.time
                }
            ]
        default:
            return state;
    }
}

export var userReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                name: action.name,
                login: action.login,
                token: action.token
            };
        default:
            return state;
    }
}
