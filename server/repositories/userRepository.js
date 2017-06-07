const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = require('../models/user');

function queryUser(userName) {
    return User.findOne({ userName: userName.toLowerCase() });
}

module.exports = {
    queryUser,
};
