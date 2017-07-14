import {call, put, select, fork} from 'redux-saga/effects';
import { router, createHashHistory } from 'redux-saga-router';
import {getActiveLeagues as fetchLeagues} from '../../selectors/leagues';
import {getLeagueById} from './selectors';
import {getActiveLeagues} from '../../state/league/selectors';
import { loadActiveLeaguesSuccess, loadActiveLeaguesFailure,
    setCurrentLeagueSuccess, setCurrentLeagueFailure, loadActiveLeagues } from './actions';

const history = createHashHistory();

const routes = {
    '/leagues/:leagueId': function* leagueSaga({ leagueId }) {
        yield call(callLeagues);
        try {
            const allLeagues = yield select(getActiveLeagues);
            const leagueKey = yield call(getLeagueById, allLeagues, leagueId);
            yield put(setCurrentLeagueSuccess(leagueKey));
        } catch (error) {
            yield put(setCurrentLeagueFailure(error));
        }
    },
    '/': function* leaguesSaga() {
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

function* runWatcher() {
    //yield call(callLeagues);
    yield fork(router, history, routes);
}

export default runWatcher;