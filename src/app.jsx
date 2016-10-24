import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import {Root} from './components/root.jsx';
import {User} from './components/user.jsx';
import {Home} from './components/home.jsx';


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home} />
                    <Route path={"user"} component={User} />
                    <Route path={"home"} component={Home} />
                </Route>          
            </Router>
        );
    }
}

ReactDOM.render(<App />,window.document.getElementById("app"));

class App1 extends React.Component{
    render(){
        return(
           <h3>Routing Data</h3>
        );
    }
}

ReactDOM.render(<App1 />,window.document.getElementById("app1"));

class App12 extends React.Component{
    render(){
        return(
           <h3>Routing route</h3>
        );
    }
}

ReactDOM.render(<App12 />,window.document.getElementById("app12"));

