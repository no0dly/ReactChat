var React = require('react');
var {connect} = require('react-redux');
import MessagesItem from 'MessagesItem';

var Messages = React.createClass({
    render() {
        var {messages} = this.props;
        var renderMessames = () => {
            return messages.map( (message, index) => {
                return <MessagesItem key={index} {...message}/>
            });
        };
        return (
            <ul className="messages__list">
                {renderMessames()}
            </ul>
        );
    }
});

export default connect(
    (state) => {
        return {
            messages: state.messages
        }
    }
)(Messages);
