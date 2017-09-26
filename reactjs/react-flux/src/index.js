import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Layout from './pages/layout';
import Favorites from './pages/favorites';
import Settings from './pages/settings';
import Navb from './components/nav';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <div className="container">
                <Navb />
                <Switch>
                    <Route exact path="/" component={ Layout }></Route>
                    <Route path="/favorites" component={Favorites}></Route>
                    <Route path="/settings" component={Settings}></Route>
                </Switch>
                <Footer />
            </div>
        </div>
    </Router>,
root);
registerServiceWorker();
