var React = require('react');

import UserInfo from 'UserInfo';

var Sidebar = React.createClass({
    render() {
        return (
            <div className="sidebar">
                <UserInfo/>
            </div>
        );
    }
});

export default Sidebar;
