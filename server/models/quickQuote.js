const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quickQuoteSchema = new Schema({
    userName: {
        type: String,
        required: true,
        index: true,
    },
    dateOfQuote: {
        type: Date,
        required: false,
        index: false,
    },
    driverName: {
        type: String,
        required: true,
        index: false,
    },
    car: {
        type: String,
        required: true,
        index: false,
    },
    carValue: {
        type: Number,
        required: true,
        index: false,
    },
    status: {
        type: String,
        required: true,
        index: false,
    },
    price: {
        type: Number,
        required: false,
        index: false,
    },
});

quickQuoteSchema.pre('save', (next) => {
    this.dateOfQuote = new Date();
    next();
});

module.exports = mongoose.model('QuickQuote', quickQuoteSchema);
