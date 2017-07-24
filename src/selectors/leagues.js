import {fetchAllLeagues, fetchActiveLeagues, fetchPastLeagues} from '../repositories/leagues';

export const getAllLeagues = () => {
    return fetchAllLeagues()
        .then(leagues => leagues)
        .catch(error => {
            throw new Error(error)
        });
};

export const getActiveLeagues = () => {
    return fetchActiveLeagues()
        .then(leagues => leagues)
        .catch(error => {
            throw new Error(error)
        });
};

export const getPastLeagues = () => {
    return fetchPastLeagues()
        .then(leagues => leagues)
        .catch(error => {
            throw new Error(error)
        });
};