var ws;
var token;
module.exports = {
    initWebSockets(data) {
        return new Promise(function(resolve, reject) {
            var req = {
                op: 'reg',
            	data
            };
            ws = new WebSocket('ws://127.0.0.1:5000');

            ws.onopen = function(data) {
                ws.send(JSON.stringify(req));
            };

            ws.onerror = function() {
                reject();
            };

            ws.onmessage = function(res) {
                console.log('res',res);
                token = JSON.parse(res.data).token;
                resolve(res);
            };
        });
    },
    request(type, data) {
        var reqData;

        switch (type) {
            case 'sentMessage':
                reqData = {
                	op: 'message',
                	token,
                	data
                }
                break;

        }
        return new Promise(function(resolve, reject) {
            ws.send(JSON.stringify(reqData));
            //
            // ws.onmessage = function(answer) {
            //     debugger;
            //     resolve(JSON.parse(answer.data));
            // };
            //
            // ws.onerror = function(e) {
            //     console.log(e);
            //     reject();
            // };
        });

    },

    getWebSocket() {
        return ws;
    },

    getToken() {
        return token;
    }
}
