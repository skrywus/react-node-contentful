import {call, put, takeEvery} from 'redux-saga/effects';
import {ARTICLES_REQUEST_SEND, loadArticlesSuccess, loadArticlesFailure} from './actions';
import getAll from '../selectors/articles';

function* fetchArticles() {
    //api call
    try {
        const articles = yield call(getAll);
        console.log(articles);
        yield put(loadArticlesSuccess(articles.message));
    } catch(error) {
        yield put(loadArticlesFailure(error));
    }
}

function* runWatcher() {
    yield takeEvery(ARTICLES_REQUEST_SEND, fetchArticles);
}

export default runWatcher;