import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Segment, Form, Message } from 'semantic-ui-react';

import actions from './loginActions';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            dirty: false,
        };
    }

    handleLogin(event) {
        event.preventDefault();
        this.setState({ dirty: true });
        if (this.state.username && this.state.password) {
            this.props.login(this.state.username, this.state.password);
        }
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
                <Form
                    loading={this.props.pending}
                    error={this.props.error}
                    onSubmit={e => this.handleLogin(e)}
                >
                    <Form.Field required error={this.state.dirty && !this.state.username}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.updateUsername(e)}
                        />
                    </Form.Field>
                    <Form.Field required error={this.state.dirty && !this.state.password}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={e => this.updatePassword(e)}
                        />
                    </Form.Field>
                    <Message error header="Invalid credentials" />
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
    error: PropTypes.bool,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    pending: state.login.pending,
    error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(actions.login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
