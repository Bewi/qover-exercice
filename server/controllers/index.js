const express = require('express');

const login = require('./login');
const quickQuote = require('./quickQuote');

const router = express.Router();

router.use('/login', login);
router.use('/quickQuote', quickQuote);

module.exports = router;
