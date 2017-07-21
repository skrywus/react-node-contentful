import {apiFetch} from '../utils/fetch'
import {API_URL} from '../config/index';

export const updateFixture = (data) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(data.payload)
    };
    return apiFetch(API_URL + '/fixture/' + data.payload.fixtureId + '/update', options);
};