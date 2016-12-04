var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import websockets, {webSocketInit} from 'app/websockets/';

var AuthLogin = React.createClass({
    onSubmit(e) {
        e.preventDefault();

        var {dispatch} = this.props;
        var name = this.name.value;
        var login = this.login.value

        webSocketInit(name, login);

        websockets().onmessage = function(res) {
            var response = JSON.parse(res.data);
            var lastMessage = document.querySelector('.message:last-child');

            switch (response.op) {
                case 'token':
                    dispatch(actions.login());
                    dispatch(actions.setUser( name,  login, response.token));
                    dispatch(actions.getInitialMessages(response.messages));

                    if(lastMessage) {
                        lastMessage.scrollIntoView(true);
                    }
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
