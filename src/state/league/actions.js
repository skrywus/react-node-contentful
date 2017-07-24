import {createAction} from 'redux-actions';

export const ACTIVE_LEAGUES_REQUEST_SEND = 'LEAGUES/ACTIVE/REQUEST_SEND';
export const ACTIVE_LEAGUES_REQUEST_SUCCESS = 'LEAGUES/ACTIVE/REQUEST_SUCCESS';
export const ACTIVE_LEAGUES_REQUEST_FAILURE = 'LEAGUES/ACTIVE/REQUEST_FAILURE';
export const SET_CURRENT_LEAGUE = 'LEAGUES/CURRENT/SET';
export const GET_LEAGUE_REQUEST = 'LEAGUES/CURRENT/DATA';
export const SET_CURRENT_LEAGUE_SUCCESS = 'LEAGUE/CURRENT/SET/SUCCESS';
export const SET_CURRENT_LEAGUE_FAILURE = 'LEAGUE/CURRENT/SET/FAILURE';
export const SET_FIXTURES_FILTER = 'FIXTURES/SET_FILTER';
export const ADD_SCORE_REQUEST_SEND = 'FIXTURES/ADD_RESULT/REQUEST_SEND';
export const ADD_SCORE_REQUEST_SUCCESS = 'FIXTURES/ADD_RESULT/REQUEST_SUCCESS';
export const ADD_SCORE_REQUEST_FAILURE = 'FIXTURES/ADD_RESULT/REQUEST_FAILURE';
export const ADD_SCORE_REQUEST_RESET = 'FIXTURES/ADD_RESULT/REQUEST_RESET';
export const ARCHIVE_LEAGUES_REQUEST_SEND = 'LEAGUES/ARCHIVE/REQUEST_SEND';
export const ARCHIVE_LEAGUES_REQUEST_SUCCESS = 'LEAGUES/ARCHIVE/REQUEST_SUCCESS';
export const ARCHIVE_LEAGUES_REQUEST_FAILURE = 'LEAGUES/ARCHIVE/REQUEST_FAILURE';

export const loadActiveLeagues = createAction(ACTIVE_LEAGUES_REQUEST_SEND);
export const loadActiveLeaguesSuccess = createAction(ACTIVE_LEAGUES_REQUEST_SUCCESS);
export const loadActiveLeaguesFailure = createAction(ACTIVE_LEAGUES_REQUEST_FAILURE);
export const setCurrentLeague = createAction(SET_CURRENT_LEAGUE);
export const getLeagueRequest = createAction(GET_LEAGUE_REQUEST);
export const setCurrentLeagueSuccess = createAction(SET_CURRENT_LEAGUE_SUCCESS);
export const setCurrentLeagueFailure = createAction(SET_CURRENT_LEAGUE_FAILURE);
export const setFixturesFilter = createAction(SET_FIXTURES_FILTER);
export const addScoreRequestSend = createAction(ADD_SCORE_REQUEST_SEND);
export const addScoreRequestSuccess = createAction(ADD_SCORE_REQUEST_SUCCESS);
export const addScoreRequestFailure = createAction(ADD_SCORE_REQUEST_FAILURE);
export const addScoreRequestReset = createAction(ADD_SCORE_REQUEST_RESET);
export const loadArchiveLeagues = createAction(ARCHIVE_LEAGUES_REQUEST_SEND);
export const loadArchiveLeaguesSuccess = createAction(ARCHIVE_LEAGUES_REQUEST_SUCCESS);
export const loadArchiveLeaguesFailure = createAction(ARCHIVE_LEAGUES_REQUEST_FAILURE);

export const addScoreRequest = (values) => {
  return function(dispatch) {
      dispatch(addScoreRequestSend(values));
  }
};

export const setFixturesFilterRequest = (value) => {
    return function(dispatch) {
     dispatch(setFixturesFilter(value));
    }
};