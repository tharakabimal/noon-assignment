import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route, 
    NavLink
} from 'react-router-dom';
import { Provider } from 'react-redux'

import store, { history } from './store';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Liked from './components/Liked';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="container">
                <NavBar />
                <Route exact path="/" component={Home}/>
                <Route path="/liked" component={Liked} history={history}/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
