var ws;

export var webSocketInit = (name, login) => {
    var data = {
        name,
        login
    };
    var req = {
        op: 'reg',
        data
    };

    ws = new WebSocket('ws://127.0.0.1:5000');
    ws.onopen = function(data) {
        ws.send(JSON.stringify(req));
    };

    ws.onerror = function(err) {
        throw new Error(err);
    };

}

var websocket = () => {
    return ws;
}

export default websocket;
