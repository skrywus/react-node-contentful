/* global process */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ROUTER_STATE_CHANGE } from '../state/actions';
import * as reducers from '../state/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga'
import runWatcher from '../state/saga';

export function createRedux(initialState) {
    const reducer = combineReducers(reducers);
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            collapsed: true,
            predicate: (getState, action) => !(action.type === ROUTER_STATE_CHANGE)
        }));
        middleware.push(sagaMiddleware);
    }

    const store = createStore(reducer, composeWithDevTools(
        applyMiddleware(...middleware),
    ));

    sagaMiddleware.run(runWatcher);

    return store;
}