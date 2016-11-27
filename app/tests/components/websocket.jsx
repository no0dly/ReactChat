var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Websocket = React.createClass({
    var ws;
    var token;
    initWebSockets(data) {
        var req = {
            op: 'reg',
            data
        };
        var {dispatch} = this.props;

        ws = new WebSocket('ws://127.0.0.1:5000');

        ws.onopen = function(data) {
            ws.send(JSON.stringify(req));
        };

        ws.onerror = function() {
            reject();
        };

        ws.onmessage = function(res) {
            var response = JSON.parse(res);
            switch (response.op) {
                case 'token':
                    token = response.token;
                    dispatch(actions.login());
                    debugger;
                    break;
                default:
                    return;
            }
        };
    }
    render() {
        return (
            <div></div>
        );
    }
});

export default connect()(Websocket);
