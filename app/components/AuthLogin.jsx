var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import socket from 'wsAPI';

var AuthLogin = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var req = {
            name: this.name.value,
            login: this.nickname.value
        }
        console.log(req);

        socket.initWebSockets(req).then(function (data) {
            console.log(data);
            dispatch(actions.login());
        });

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
                            ref={(input) => {this.nickname = input}} />
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
