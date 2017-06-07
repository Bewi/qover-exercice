const express = require('express');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const middlewares = require('./middlewares');

const controllers = require('./controllers');

const app = express();



passport.use(new BasicStrategy((userId, password, done) => {
    if (userId === 'contact@qover.me' && password === 'guest') {
        return done(null, { userId });
    }

    return done(null, false);
}));

app.use(middlewares.corsMiddleware());

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.use(controllers);

module.exports = app;
