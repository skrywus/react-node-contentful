import React from 'react';
import {shallow} from 'enzyme';
import LeagueTable from './../leagueTable';
const testStore = [
    {
        draws: 2,
        goalsConceded: 7,
        goalsDiff: 1,
        goalsScored: 8,
        losses: 0,
        played: 3,
        playerId: "LMKiMn8Vc4q4QwasYCsCu",
        playerName: "Kot F",
        points: 5,
        wins: 1
    }
];

    test('render LeagueTable without crash', () => {
        const wrapper = shallow(<LeagueTable leagueData={testStore}/>);
    });