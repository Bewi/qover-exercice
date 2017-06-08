const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const QuickQuote = require('../models/quickQuote');

function saveQuickQuote(quickQuote) {
    return QuickQuote.create(quickQuote);
}

module.exports = {
    saveQuickQuote,
};
