import {updateFixture} from '../repositories/fixture';

export const addScore = (data) => {
    return updateFixture(data)
        .then(fixture => fixture)
        .catch(error => {
            throw new Error(error)
        });
}