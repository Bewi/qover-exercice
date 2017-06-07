import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import App from './AppComponent';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

const renderMe = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(renderMe, document.getElementById('app'));
