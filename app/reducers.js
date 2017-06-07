import { combineReducers } from 'redux';

import login from './login/loginReducer';
import quickQuote from './quickQuote/quickQuoteReducer';

export default combineReducers({
    login,
    quickQuote,
});
