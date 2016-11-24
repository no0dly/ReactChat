var React = require('react');

var MessagesItem = React.createClass({
    render() {
        return (
            <li className="message">
                <div className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="message-title">
                            <strong>Vadim</strong> <small>2 January</small>
                        </div>
                        <div className="message-content">
                            Hi how are you
                        </div>
                      </div>
                    </div>
                </div>
            </li>
        );
    }
});

export default MessagesItem;
