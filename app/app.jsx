var React      = require('react');
var ReactDOM   = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var actions    = require('actions');
var store      = require('configureStore').configure();

store.subscribe(()=> {
    var state = store.getState();
    console.log('NewState ', state);
});



require('style!css!sass!AppCss');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
                <Route path='/news' component={News}/>
                <Route path='/users' component={Users}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
