var React = require('react');
var {connect} = require('react-redux');
import websockets from 'app/websockets';

var ChatInput = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var message = this.message.value;
        var {token} = this.props;

        var req = {
        	op: 'message',
        	token,
        	data: {
        		body: message
        	}
        };
        websockets().send(JSON.stringify(req));
        this.message.value = '';
    },
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="control is-grouped">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Enter text" ref={(input) => {this.message = input} }/>
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

export default connect(
    (state) => {
        return {
            token: state.user.token
        }
    }
)(ChatInput);
