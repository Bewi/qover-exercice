import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import loginActions from '../login/loginActions';

class NavComponent extends Component {
    render() {
        return (
            <Menu pointing secondary>
                <Menu.Menu position="right">
                    <Menu.Item name="logout" onClick={this.props.logout} />
                </Menu.Menu>
            </Menu>
        );
    }

}

NavComponent.propTypes = {
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(loginActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
