var React = require('react');

import Messages from 'Messages';
import ChatInput from 'ChatInput';

var Main = React.createClass({
    render() {
        return (
            <div className="main">
                <div className="messages">
                    <Messages/>
                </div>
                <div className="chat-input">
                    <ChatInput/>
                </div>
            </div>
        );
    }
});

export default Main;
