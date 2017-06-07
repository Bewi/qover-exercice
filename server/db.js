const mongoose = require('mongoose');
const config = require('./config');

const connect = () => {
    mongoose.connect(config.mongo, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('mongo\'s running');
        }
    });
};

module.exports = { connect };
