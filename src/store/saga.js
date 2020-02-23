import { all, call  } from 'redux-saga/effects';

import exchange from './exchange/saga';
import quote from './quote/saga';

export default function* rootSaga() {

    yield all(
        [
            call(exchange),
            call(quote),
        ]
    );
}