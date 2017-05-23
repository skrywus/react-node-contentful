import {handleActions} from 'redux-actions';

import {
    ARTICLES_REQUEST_SEND,
    ARTICLES_REQUEST_SUCCESS,
    ARTICLES_REQUEST_FAILURE,
    ROUTER_STATE_CHANGE
} from './actions';

const initialState = {
    loading: false,
    loaded: false,
    data: {}
};

const actionsHandlers = {
    [ARTICLES_REQUEST_SEND]: (state) => ({
        ...state,
        loading: true
    }),
    [ARTICLES_REQUEST_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
    }),
    [ARTICLES_REQUEST_FAILURE]: (state) => ({
        ...state,
        loading: false,
        loaded: false
    }),
    [ROUTER_STATE_CHANGE]: (state, action) => ({
        ...state,
        data: action.payload
    }),
};

export default handleActions(actionsHandlers, initialState);
