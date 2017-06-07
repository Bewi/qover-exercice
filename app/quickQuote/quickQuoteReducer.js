import constants from './quickQuoteConstants';

const quickQuote = (state = { pending: false, computedPrice: 0, error: false }, action) => {
    switch (action.type) {
        case constants.COMPUTE_PRICE_PENDING:
            return { pending: true, computedPrice: state.computedPrice, error: false };
        case constants.COMPUTE_PRICE_FULFILLED:
            return { pending: false, computedPrice: action.payload.computedPrice, error: false };
        case constants.COMPUTE_PRICE_ERROR:
            return { pending: false, computedPrice: 0, error: true };
        default:
            return state;
    }
};

export default quickQuote;
