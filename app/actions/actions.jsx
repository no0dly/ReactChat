//actions
export var login = () => {
    return {
        type: 'LOGIN'
    }
}

export var getInitialMessages = (messages) => {
    return {
        type: 'GET_INITIAL_MESSAGES',
        messages
    }
}

export var addMessage = (user, body, time) => {
    return {
        type: 'ADD_MESSAGE',
        user,
        body,
        time
    }
}

export var setUser = ( name, login, token ) => {
    return {
        type: 'SET_USER',
        name,
        login,
        token
    }
}
