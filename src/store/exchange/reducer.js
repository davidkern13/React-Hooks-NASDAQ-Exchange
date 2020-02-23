import * as actions from './types.js';

const initialState = { data: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.CALL_EXCHANGE_DATA:
            return {
                ...state,
                data: [],
                status: 'calling'
            };
        case actions.GET_EXCHANGE_DATA:
            return {
                ...state,
                data: action.payload,
                status: 'success'
            };
        case actions.ERROR_EXCHANGE_DATA:
            return {
                 ...state,
                 data: [],
                 status: action.payload
            };

        default:
            return state;
    }
}