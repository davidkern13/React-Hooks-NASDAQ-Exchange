import * as actions from './types';

export const callExchangeSaga = () => {
    return {
        type: actions.CALL_EXCHANGE_DATA,
        payload: {
            url: 'search?query=all&limit=10&exchange=NASDAQ',
            method: 'get'
        }
     }
};

export const getExchangeData = data => ({
    type: actions.GET_EXCHANGE_DATA,
    payload: data
})

export const exchangeErrorCall = err => ({
    type: actions.ERROR_EXCHANGE_DATA,
    payload: err
})