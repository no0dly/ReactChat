var React = require('react');
var {connect} = require('react-redux');

import Main from 'Main';
import Auth from 'Auth';
import Sidebar from 'Sidebar';

var Chat = React.createClass({
    render() {
        var {logged} = this.props;

        var renderAuth = () => {
            console.log(this.props);
            if(!logged) {
                return <Auth/>
            }
        }
        return (
            <div className="columns is-gapless">
                <div className="column is-3">
                    <Sidebar/>
                </div>
                <div className="column is-9">
                    <Main/>
                </div>
                {renderAuth()}
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            logged: state.logged
        }
    }
)(Chat);
