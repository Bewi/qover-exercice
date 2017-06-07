const corsMiddleware = require('./corsMiddleware');
const authenticationMiddleware = require('./authenticationMiddleware');

module.exports = {
    corsMiddleware,
    authenticationMiddleware,
};
