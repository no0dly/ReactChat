var React = require('react');
var {connect} = require('react-redux');

var UserInfo = React.createClass({
    render() {
        var {user} = this.props;
        var renderName = function() {
            if(user.name) {
                return user.name;
            } else {
                return 'Nothign here yet';
            }
        };
        return (
            <div className="media user-info">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        {renderName()}
                    </div>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            user: state.user
        }
    }
)(UserInfo);
