import { call, put, takeLatest } from 'redux-saga/effects'

import { CALL_EXCHANGE_DATA } from './types';
import { callRequestApi } from '../../request/api';
import { getExchangeData, exchangeErrorCall  } from './actions';

export default function* watchCallRequestApi() {
    yield takeLatest(CALL_EXCHANGE_DATA, exchangeRequest);
}

function* exchangeRequest({ payload }) {
        try {
            const data = yield call(() => {
                return callRequestApi(payload);
            }
        );
        yield put(getExchangeData(data));
    } catch (err) {
        yield put(exchangeErrorCall(err));
    }
}