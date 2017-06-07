const express = require('express');

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

router.get('/', (req, res) => {
    const price = parseInt(req.query.price, 0);
    if (!validatePrice(price)) {
        res.send(422, { message: 'Price is out of my league, must be between 5.000 € and 75.000 €' });
    } else {
        res.send(200, { computedPrice: computePrice(price, req.query.car) });
    }
});

module.exports = router;

