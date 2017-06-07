const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        res.sendStatus(200);
    });

module.exports = router;
