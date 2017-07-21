import {call, put, select, fork, takeEvery} from 'redux-saga/effects';
import { router, createHashHistory } from 'redux-saga-router';
import {getActiveLeagues as fetchLeagues} from '../../selectors/leagues';
import {getLeagueById} from './selectors';
import {getActiveLeagues} from '../../state/league/selectors';
import { loadActiveLeaguesSuccess, loadActiveLeaguesFailure, setCurrentLeague,
    setCurrentLeagueSuccess, setCurrentLeagueFailure, loadActiveLeagues, ADD_SCORE_REQUEST_SEND,
    addScoreRequestSuccess, addScoreRequestFailure, addScoreRequestReset} from './actions';
import {addScore} from './../../selectors/fixture';

const history = createHashHistory();
let currentLeagueId = null;

const routes = {
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

function* callLeagues() {
    try {
        yield put(loadActiveLeagues());
        const leagues = yield call(fetchLeagues);
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