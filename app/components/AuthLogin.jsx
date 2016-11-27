var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import socket from 'wsAPI';

var AuthLogin = React.createClass({
    onSubmit(e) {
        e.preventDefault();

        var data = {
            name: this.name.value,
            login: this.login.value
        };
        var req = {
            op: 'reg',
            data
        };
        var {dispatch} = this.props;

        window.ws = new WebSocket('ws://127.0.0.1:5000');

        ws.onopen = function(data) {
            ws.send(JSON.stringify(req));
        };

        ws.onerror = function(err) {
            throw new Error(err);
        };

        ws.onmessage = function(res) {
            var response = JSON.parse(res.data);

            switch (response.op) {
                case 'token':
                    dispatch(actions.login());
                    dispatch(actions.setUser(data.name, data.login, response.token));
                    dispatch(actions.getInitialMessages(response.messages));
                    document.querySelector('.message:last-child').scrollIntoView(true);
                    break;

                case 'message':

                    dispatch(actions.addMessage(response.user, response.body, response.time));
                    document.querySelector('.message:last-child').scrollIntoView(true);
                    break;

                default:
                    return;
            }
        };

    },
    render() {
        return (
            <form className="login" onSubmit={this.onSubmit}>
                <div className="login-title">
                    <h2 className="title is-3">Login</h2>
                </div>
                <div className="login__wrap">
                    <div className="control">
                        <input
                            className="input" type="text"
                            placeholder="Enter your name" required
                            ref={(input) => {this.name = input}} />
                    </div>
                    <div className="control">
                        <input
                            className="input" type="text"
                            placeholder="Enter your nickname" required
                            ref={(input) => {this.login = input}} />
                    </div>
                    <div className="control">
                        <button className="submit button">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
});

export default connect()(AuthLogin);
