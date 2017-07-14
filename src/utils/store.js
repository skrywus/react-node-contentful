/* global process */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import leagues from '../state/league/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import runWatcher from '../state/league/saga';

export function createRedux(initialState) {
    const reducer = combineReducers({
        leagues
    });
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger({
            collapsed: true
        }));
        middleware.push(sagaMiddleware);
    }

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    sagaMiddleware.run(runWatcher);

    return store;
}