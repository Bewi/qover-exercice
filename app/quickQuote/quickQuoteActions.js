import constants from './quickQuoteConstants';
import quickQuoteService from './quickQuoteService';

const computePrice = (driverName, car, price) => ({
    type: constants.COMPUTE_PRICE,
    payload: quickQuoteService.computePrice(driverName, car, price),
});

export default {
    computePrice,
};
