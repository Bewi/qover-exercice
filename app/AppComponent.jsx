import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

import Login from './login/LoginComponent';
import QuickQuote from './quickQuote/QuickQuoteComponent';

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

class AppComponent extends Component {

    static renderQuickQuote() {
        return store.getState().login.loggedIn ? <QuickQuote /> : <Redirect to="/login" />;
    }

    static renderLogin() {
        return store.getState().login.loggedIn ? <Redirect to="/" /> : <Login />;
    }

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Route path="/" render={AppComponent.renderQuickQuote} />
                    <Route path="/login" render={AppComponent.renderLogin} />
                </Container>
            </Provider>
        );
    }
}

export default AppComponent;
