import constants from './loginConstants';
import loginService from './loginService';

const login = (username, password) => ({
    type: constants.LOGIN,
    payload: loginService.login(username, password),
});

export default {
    login,
};
