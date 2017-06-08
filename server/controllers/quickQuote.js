const express = require('express');
const passport = require('passport');
const repositories = require('../repositories');

const router = express.Router();

function validatePrice(price) {
    return price >= 5000 && price <= 7500;
}

const carComputingList = {
    audi: { fixed: 250, ratio: 0.3 },
    bmw: { fixed: 150, ratio: 0.4 },
    porsche: { fixed: 500, ratio: 0.7 },
};

function computePrice(price, car) {
    const carComputing = carComputingList[car];

    if (!carComputing) {
        return price;
    }

    return carComputing.fixed + (carComputing.ratio * price);
}

router.get('/',
    passport.authenticate('basic', { session: false }),
    (req, res, next) => {
        const price = parseInt(req.query.price, 0);
        res.locals.price = price;

        if (!validatePrice(price)) {
            res.locals.status = 422;
            res.locals.body = { message: 'Price is out of my league, must be between 5.000 € and 75.000 €' };
        } else {
            res.locals.status = 200;
            res.locals.body = { computedPrice: computePrice(price, req.query.car) };
        }

        next();
    },
    (req, res) => {
        const quickQuote = {
            userName: req.user,
            driverName: req.query.driverName,
            car: req.query.car,
            carValue: res.locals.price,
            status: res.locals.status === 200 ? 'OK' : 'NOK',
            price: res.locals.body.computedPrice,
        };

        repositories.quickQuoteRepository.saveQuickQuote(quickQuote).then(() => {
            res.send(res.locals.status, res.locals.body);
        });
    });

module.exports = router;

