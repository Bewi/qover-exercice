import constants from './loginConstants';
import credentialsService from './credentialsService';

const initialState = {
    pending: false,
    error: false,
    loggedIn: credentialsService.get(),
};

const login = (state = initialState, action) => {
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
