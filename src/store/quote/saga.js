import { call, put, takeLatest } from 'redux-saga/effects'

import { CALL_QUOTE_DATA } from './types';
import { callRequestApi } from '../../request/api';
import { getQuoteData, quoteErrorCall  } from './actions';

export default function* watchCallRequestApi() {
    yield takeLatest(CALL_QUOTE_DATA, quoteRequest);
}

function* quoteRequest({ payload }) {
        try {
            const data = yield call(() => {
                return callRequestApi(payload);
            }
        );
        yield put(getQuoteData(data));
    } catch (err) {
        yield put(quoteErrorCall(err));
    }
}