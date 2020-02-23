import {applyMiddleware, createStore} from 'redux'
import rootSaga from './saga'

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export function initialStore(){
    const middleware = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, composedEnhancers);

    sagaMiddleware.run(rootSaga);

    return store;
}
