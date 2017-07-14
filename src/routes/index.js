import React from 'react';
import {Provider} from 'react-redux';
import ActiveLeagues from './../modules/leagues/components/Leagues/activeLeagues';
import LeagueDetails from './../modules/leagues/components/Leagues/leagueDetails';
import { Router, Route } from 'react-router'
import {createRedux} from './../utils/store';

const store = createRedux({
    leagues: {
        loading: false,
        loaded: false,
        data: {
            leagues: {}
        }
    }
});

export default (props) => {
    return (
        <Provider store={store}>
            <Router history={props.history}>
                <Route path="/" component={ActiveLeagues}/>
                <Route path="/leagues/:leagueId" component={LeagueDetails}/>
            </Router>
        </Provider>
    );
};