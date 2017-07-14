import {loadActiveLeagues, getLeagueRequest} from './../../state/league/actions';

export const initLeaguesModule = (store) => {
    store.dispatch(loadActiveLeagues());
};