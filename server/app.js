const express = require('express');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const middlewares = require('./middlewares');
const controllers = require('./controllers');
const db = require('./db');

db.connect();

const app = express();

passport.use(new BasicStrategy(middlewares.authenticationMiddleware));

app.use(middlewares.corsMiddleware());

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.use(controllers);

module.exports = app;
