import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Login from './login/LoginComponent';

class AppComponent extends Component {
    render() {
        return (
            <Container>
                <Login />
            </Container>
        );
    }
}

export default AppComponent;
