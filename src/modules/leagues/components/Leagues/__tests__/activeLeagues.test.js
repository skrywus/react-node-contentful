import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import ActiveLeagues from './../activeLeagues';
const mockStore = configureStore();
const testStore = mockStore({
    leagues:
    {
        data: {
            leagues: {},
            current: 0
        },
    }
});

    test('render ActiveLeagues without crash', () => {
        const wrapper = shallow(<ActiveLeagues/>, {context: {store: testStore}});
        expect(wrapper.exists()).toEqual(true);
    });