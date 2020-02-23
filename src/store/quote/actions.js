import * as actions from './types';

export const callQuoteSaga = quotes => {
    return {
        type: actions.CALL_QUOTE_DATA,
        payload: {
            url: 'quote/' + quotes,
            method: 'get'
        }
     }
};

export const getQuoteData = data => ({
    type: actions.GET_QUOTE_DATA,
    payload: data
})

export const quoteErrorCall = err => ({
    type: actions.ERROR_QUOTE_DATA,
    payload: err
})