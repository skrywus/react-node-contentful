import {call, put, select, fork, takeEvery} from 'redux-saga/effects';
import { router, createHashHistory } from 'redux-saga-router';
import {getActiveLeagues as fetchActiveLeagues, getPastLeagues as fetchArchiveLeagues} from '../../selectors/leagues';
import {getLeagueById} from './selectors';
import {getActiveLeagues, getArchiveLeagues} from '../../state/league/selectors';
import { loadActiveLeaguesSuccess, loadActiveLeaguesFailure, setCurrentLeague,
    setCurrentLeagueSuccess, setCurrentLeagueFailure, loadActiveLeagues, ADD_SCORE_REQUEST_SEND,
    addScoreRequestSuccess, addScoreRequestFailure, addScoreRequestReset,
    loadArchiveLeagues, loadArchiveLeaguesSuccess, loadArchiveLeaguesFailure} from './actions';
import {addScore} from './../../selectors/fixture';

const history = createHashHistory();
let currentLeagueId = null;

const routes = {
    '/archive/:leagueId': function* leagueSaga({ leagueId }) {
        try {
            currentLeagueId = leagueId;
            yield put(setCurrentLeague());
            yield call(callArchive);
            const allLeagues = yield select(getArchiveLeagues);
            const leagueKey = yield call(getLeagueById, allLeagues, leagueId);
            yield put(setCurrentLeagueSuccess(leagueKey));
        } catch (error) {
            yield put(setCurrentLeagueFailure(error));
        }
    },
    '/archive': function* archiveSaga() {
        yield call(callArchive);
    },
    '/leagues/:leagueId': function* leagueSaga({ leagueId }) {
        try {
            currentLeagueId = leagueId;
            yield put(setCurrentLeague());
            yield call(callLeagues);
            const allLeagues = yield select(getActiveLeagues);
            const leagueKey = yield call(getLeagueById, allLeagues, leagueId);
            yield put(setCurrentLeagueSuccess(leagueKey));
        } catch (error) {
            yield put(setCurrentLeagueFailure(error));
        }
    },
    '/': function* leaguesSaga() {
        yield put(addScoreRequestReset());
        yield call(callLeagues);
    }
};

function* callArchive() {
    try {
        yield put(loadArchiveLeagues());
        const leagues = yield call(fetchArchiveLeagues);
        yield put(loadArchiveLeaguesSuccess(leagues));
    } catch(error) {
        yield put(loadArchiveLeaguesFailure(error));
    }
}

function* callLeagues() {
    try {
        yield put(loadActiveLeagues());
        const leagues = yield call(fetchActiveLeagues);
        yield put(loadActiveLeaguesSuccess(leagues));
    } catch(error) {
        yield put(loadActiveLeaguesFailure(error));
    }
}

function* addScoreSaga(values) {
    try {
        const updatedFixture = yield call(addScore, values);
        if(updatedFixture) {
            yield put(addScoreRequestSuccess());
        } else {
            yield put(addScoreRequestFailure())
        }
        yield put(setCurrentLeague());
        yield call(callLeagues);
        const allLeagues = yield select(getActiveLeagues);
        const leagueKey = yield call(getLeagueById, allLeagues, currentLeagueId);
        yield put(setCurrentLeagueSuccess(leagueKey));
    } catch(error) {
        yield put(loadActiveLeaguesFailure(error));
    }
}

function* runWatcher() {
    yield takeEvery(ADD_SCORE_REQUEST_SEND, addScoreSaga);
    yield fork(router, history, routes);
}

export default runWatcher;