import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './AppComponent';

const renderMe = (
    <BrowserRouter >
        <Route path="/" component={App} />
    </BrowserRouter>
);

ReactDOM.render(renderMe, document.getElementById('app'));
