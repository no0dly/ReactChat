var React = require('react');

import AuthLogin from 'AuthLogin';

var Auth = React.createClass({
    render() {
        return (
            <div className="auth">
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-content is-3">
                        <div className="box">
                            <AuthLogin/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

export default Auth;
