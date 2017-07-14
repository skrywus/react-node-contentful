import {contentfulClient} from '../services/contentful';
import moment from 'moment';

const LEAGUE_CONTENT_ID = 'league';

export const getActiveLeagues = () => {

    return contentfulClient()
        .getEntries({
            content_type: LEAGUE_CONTENT_ID,
            'fields.dateEnd[gte]': moment().format()
        })
        .then(entries => entries)
        .catch(error => error);
};

export const getPastLeagues = () => {

    return contentfulClient()
        .getEntries({
            content_type: LEAGUE_CONTENT_ID,
            'fields.dateEnd[lt]': moment().format()
        })
        .then(entries => entries)
        .catch(error => error);
};

export const getAllLeagues = () => {

    return contentfulClient()
        .getEntries({
            content_type: LEAGUE_CONTENT_ID
        })
        .then(entries => entries)
        .catch(error => error);
};

export const getPlayerById = (playerId) => {

    return contentfulClient()
        .getEntry(playerId)
        .then(entry => entry)
        .catch(error => error);
};