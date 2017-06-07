import React from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';

const LoginComponent = () => (
    <Segment>
        <h1>Login</h1>
        <Form>
            <Form.Field>
                <label htmlFor="login">Log-in</label>
                <input type="text" id="login" name="login" />
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </Form.Field>
            <Button type="submit" color="green" fluid>Get me in</Button>
        </Form>
    </Segment>
);

export default LoginComponent;
