import {createAction} from 'redux-actions';

export const ARTICLES_REQUEST_SEND = 'ARTICLES/REQUEST_SEND';
export const ARTICLES_REQUEST_SUCCESS = 'ARTICLES/REQUEST_SUCCESS';
export const ARTICLES_REQUEST_FAILURE = 'ARTICLES/REQUEST_FAILURE';
export const ROUTER_STATE_CHANGE = 'ROUTER/UPDATE';

export const loadArticles = createAction(ARTICLES_REQUEST_SEND);
export const loadArticlesSuccess = createAction(ARTICLES_REQUEST_SUCCESS);
export const loadArticlesFailure = createAction(ARTICLES_REQUEST_FAILURE);

export const routerStateChange = createAction(ROUTER_STATE_CHANGE);