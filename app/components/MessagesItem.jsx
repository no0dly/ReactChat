var React = require('react');
var moment = require('moment');

var MessagesItem = React.createClass({
    render() {
        var {user, body, time} = this.props;
        var formatedTime = moment.unix(time).format('MMM D, YY @ h:mm a');
        return (
            <li className="message">
                <div className="media">
                    <div className="media-content">
                      <div className="content">
                        <div className="message-title">
                            <strong>{user.name}</strong> <small>{formatedTime}</small>
                        </div>
                        <div className="message-content">
                            {body}
                        </div>
                      </div>
                    </div>
                </div>
            </li>
        );
    }
});

export default MessagesItem;
