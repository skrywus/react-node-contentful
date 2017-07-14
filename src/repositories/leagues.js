import {apiFetch} from '../utils/fetch'
import {API_URL} from '../config/index';

export const fetchAllLeagues = () => {
    return apiFetch(API_URL + '/leagues/all');
};

export const fetchActiveLeagues = () => {
    return apiFetch(API_URL + '/leagues/active');
};

export const fetchPastLeagues = () => {
    return apiFetch(API_URL + '/leagues/past');
};