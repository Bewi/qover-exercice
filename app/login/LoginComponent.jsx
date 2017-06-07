import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Segment, Form } from 'semantic-ui-react';

import actions from './loginActions';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    handleLogin(event) {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    updateUsername(event) {
        this.setState({ username: event.target.value });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <Segment>
                <Form loading={this.props.pending} onSubmit={e => this.handleLogin(e)}>
                    <Form.Field>
                        <label htmlFor="username">Log-in</label>
                        <input type="text" id="username" name="username" value={this.state.username} onChange={e => this.updateUsername(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={e => this.updatePassword(e)} />
                    </Form.Field>
                    <Button type="submit" color="green" fluid>Get me in</Button>
                </Form>
            </Segment>
        );
    }
}

LoginComponent.defaultProps = {
    pending: false,
    loggedIn: false,
    error: false,
};

LoginComponent.propTypes = {
    pending: PropTypes.bool,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    pending: state.login.pending,
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(actions.login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
