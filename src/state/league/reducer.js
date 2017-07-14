import {handleActions} from 'redux-actions';

import {
    ACTIVE_LEAGUES_REQUEST_SEND,
    ACTIVE_LEAGUES_REQUEST_SUCCESS,
    ACTIVE_LEAGUES_REQUEST_FAILURE,
    SET_CURRENT_LEAGUE,
    SET_CURRENT_LEAGUE_SUCCESS,
    SET_CURRENT_LEAGUE_FAILURE,
    SET_FIXTURES_FILTER
} from './actions';

const initialState = {
    league:
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
        }
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
    [ACTIVE_LEAGUES_REQUEST_FAILURE]: (state) => ({
        ...state,
        loading: false,
        loaded: false
    }),
    [SET_CURRENT_LEAGUE]: (state) => ({
        ...state,
        leagueLoading: true
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
        leagueLoaded: false
    }),
    [SET_FIXTURES_FILTER]: (state, action) => ({
        ...state,
        fixtures: {
            filter: action.payload
        }
    })
};

export default handleActions(actionsHandlers, initialState);
