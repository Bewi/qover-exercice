import constants from './loginConstants';
import loginService from './loginService';

const login = (username, password) => ({
    type: constants.LOGIN,
    payload: loginService.login(username, password),
});

const logout = () => ({
    type: constants.LOGOUT,
    payload: loginService.logout(),
});

export default {
    login,
    logout,
};
