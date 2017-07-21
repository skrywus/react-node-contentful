import {updateFixture} from '../repositories/fixture';

export const addScore = (data) => {
    return updateFixture(data)
        .then(fixture => fixture)
        .catch(error => console.log(error));
}