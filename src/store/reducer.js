import { combineReducers } from 'redux';

import exchange from './exchange/reducer';
import quote from './quote/reducer';

const rootReducer = combineReducers({
    exchange,
    quote,
});

export default rootReducer;
