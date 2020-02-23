import * as actions from './types.js';

const initialState = { data: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.CALL_QUOTE_DATA:
            return {
                ...state,
                data: [],
                status: 'calling'
            };
        case actions.GET_QUOTE_DATA:
            return {
                ...state,
                data: action.payload,
                status: 'success'
            };
        case actions.ERROR_QUOTE_DATA:
            return {
                ...state,
                data: [],
                status: action.payload
            };

        default:
            return state;
    }
}