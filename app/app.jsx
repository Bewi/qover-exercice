import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';

import App from './AppComponent';

const renderMe = (
    <Router history={history} >
        <Route path="/" component={App} />
    </Router>
);

ReactDOM.render(renderMe, document.getElementById('app'));
