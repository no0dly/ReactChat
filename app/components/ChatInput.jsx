var React = require('react');
import socket from 'wsAPI';

var ChatInput = React.createClass({
    onSubmit(e) {
        e.preventDefault();

        socket.request('sentMessage', {body: 'bla bla'}).then(function(data) {
            console.log(data);
        }, function(data) {
            console.log(data)
        });
    },
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="control is-grouped">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Enter text"/>
                    </div>
                    <div className="control">
                        <button className="button submit">
                            Submit
                        </button>
                    </div>


                </div>
            </form>
        );
    }
});

export default ChatInput;
