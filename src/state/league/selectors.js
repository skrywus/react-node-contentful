import {createSelector} from 'reselect';

export const getActiveLeagues = store => store.leagues.data.leagues;
export const isLoaderVisible = store => store.leagues.loading;
export const areLeaguesLoaded = state => state.leagues.loaded;
export const isLeagueLoaded = store => store.leagues.leagueLoaded;
export const isLeagueLoaderVisible = store => store.leagues.leagueLoading;
export const currentLeagueKey = store => store.leagues.data.current;
export const isAddScoreLoading = store => store.leagues.addScoreLoading;
export const isAddScoreLoaded = state => state.leagues.addScoreLoaded;

export const getLeagueById = (leagues, id) => {
    let selectedLeague = null;
    leagues.forEach((league, index) => {
        if(league.sys.id === id) {
            selectedLeague = index;
        }
    });
    return selectedLeague;
};

export const getLeagueDetails = createSelector(
    currentLeagueKey,
    getActiveLeagues,
    (key, leagues) => leagues[key]
);