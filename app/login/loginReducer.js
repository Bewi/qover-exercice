import constants from './loginConstants';

const login = (state = { pending: false, loggedIn: false, error: false }, action) => {
    switch (action.type) {
        case constants.LOGIN_PENDING:
            return { pending: true };
        case constants.LOGIN_FULFILLED:
            return { pending: false, loggedIn: true };
        case constants.LOGIN_ERROR:
            return { pending: false, loggedIn: false, error: true };
        default:
            return state;
    }
};

export default login;
