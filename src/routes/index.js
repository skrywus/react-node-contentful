import React from 'react';
import {Provider} from 'react-redux';
import ActiveLeagues from './../modules/leagues/components/Leagues/activeLeagues';
import LeagueDetails from './../modules/leagues/components/Leagues/leagueDetails';
import LeaguesArchive from './../modules/leagues/components/Leagues/archiveLeagues';
import ArchiveLeagueDetails from './../modules/leagues/components/Leagues/archiveLeagueDetails';
import { Router, Route } from 'react-router';
import {createRedux} from './../utils/store';

const store = createRedux({
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
});

export default (props) => {
    return (
        <Provider store={store}>
            <Router history={props.history}>
                <Route path="/" component={ActiveLeagues}/>
                <Route path="/leagues/:leagueId" component={LeagueDetails}/>
                <Route path="/archive" component={LeaguesArchive}/>
                <Route path="/archive/:leagueId" component={ArchiveLeagueDetails}/>
            </Router>
        </Provider>
    );
};