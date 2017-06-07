import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const LOGIN = 'LOGIN';
const LOGIN_PENDING = `LOGIN_${PENDING}`;
const LOGIN_FULFILLED = `LOGIN_${FULFILLED}`;
const LOGIN_ERROR = `LOGIN_${REJECTED}`;

const LOGOUT = 'LOGOUT';

export default {
    LOGIN,
    LOGIN_PENDING,
    LOGIN_FULFILLED,
    LOGIN_ERROR,
    LOGOUT,
};
