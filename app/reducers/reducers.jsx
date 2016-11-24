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
