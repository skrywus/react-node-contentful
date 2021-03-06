import {handleActions} from 'redux-actions';

import {
    ACTIVE_LEAGUES_REQUEST_SEND,
    ACTIVE_LEAGUES_REQUEST_SUCCESS,
    ACTIVE_LEAGUES_REQUEST_FAILURE,
    SET_CURRENT_LEAGUE,
    SET_CURRENT_LEAGUE_SUCCESS,
    SET_CURRENT_LEAGUE_FAILURE,
    SET_FIXTURES_FILTER,
    ADD_SCORE_REQUEST_SEND,
    ADD_SCORE_REQUEST_SUCCESS,
    ADD_SCORE_REQUEST_FAILURE,
    ADD_SCORE_REQUEST_RESET,
    ARCHIVE_LEAGUES_REQUEST_SEND,
    ARCHIVE_LEAGUES_REQUEST_SUCCESS,
    ARCHIVE_LEAGUES_REQUEST_FAILURE,
} from './actions';

const initialState = {
    leagues:
        {
        loading: false,
        loaded: false,
        leagueLoading: false,
        leagueLoaded: false,
        data: {
            leagues: {},
            current: 0
        },
        fixtures: {
            filter: ''
        },
        addScoreLoading: false,
        addScoreLoaded: false,
        error: null
    }
};

const actionsHandlers = {
    [ACTIVE_LEAGUES_REQUEST_SEND]: (state) => ({
        ...state,
        loading: true
    }),
    [ACTIVE_LEAGUES_REQUEST_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        data: {
            ...state.data,
            leagues: action.payload
        }
    }),
    [ACTIVE_LEAGUES_REQUEST_FAILURE]: (state, action) => ({
        ...state,
        loading: false,
        loaded: false,
        error: action.error
    }),
    [SET_CURRENT_LEAGUE]: (state) => ({
        ...state,
        leagueLoading: true,
        leagueLoaded: false
    }),
    [SET_CURRENT_LEAGUE_SUCCESS]: (state, action) => ({
        ...state,
        leagueLoading: false,
        leagueLoaded: true,
        data: {
            ...state.data,
            current: action.payload
        }
    }),
    [SET_CURRENT_LEAGUE_FAILURE]: (state) => ({
        ...state,
        leagueLoading: false,
        leagueLoaded: false,
        error: true
    }),
    [SET_FIXTURES_FILTER]: (state, action) => ({
        ...state,
        fixtures: {
            filter: action.payload
        }
    }),
    [ADD_SCORE_REQUEST_SEND]: (state) => ({
        ...state,
        addScoreLoading: true,
        addScoreLoaded: false
    }),
    [ADD_SCORE_REQUEST_SUCCESS]: (state) => ({
        ...state,
        addScoreLoading: false,
        addScoreLoaded: true
    }),
    [ADD_SCORE_REQUEST_FAILURE]: (state) => ({
        ...state,
        addScoreLoading: false,
        addScoreLoaded: false,
        error: true
    }),
    [ADD_SCORE_REQUEST_RESET]: (state) => ({
        ...state,
        addScoreLoading: false,
        addScoreLoaded: false
    }),
    [ARCHIVE_LEAGUES_REQUEST_SEND]: (state) => ({
        ...state,
        loading: true
    }),
    [ARCHIVE_LEAGUES_REQUEST_SUCCESS]: (state, action) => ({
        ...state,
        loading: false,
        loaded: true,
        data: {
            ...state.data,
            leagues: action.payload
        }
    }),
    [ARCHIVE_LEAGUES_REQUEST_FAILURE]: (state) => ({
        ...state,
        loading: false,
        loaded: false,
        error: true
    }),
};

export default handleActions(actionsHandlers, initialState);
