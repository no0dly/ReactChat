var React = require('react');
import MessagesItem from 'MessagesItem';

var Messages = React.createClass({
    render() {
        return (
            <ul className="messages__list">
                <MessagesItem/>                
            </ul>
        );
    }
});

export default Messages;
