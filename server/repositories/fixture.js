import {contentfulManager, space} from '../services/contentful';

export const addScore = (fixtureId, homeScore, awayScore, confirmed) => {
    return contentfulManager()
        .getSpace(space)
        .then((space) => space.getEntry(fixtureId))
        .then((entry) => {
            entry.fields.homeScore = {
                'en-US': homeScore
            };
            entry.fields.awayScore = {
                'en-US': awayScore
            };
            entry.fields.confirmed = {
                'en-US': confirmed?"Yes":"No"
            };
            return entry.update()

        })
        //.then(entry => entry.publish())
        .then(entry => entry)
        .catch(error => error);
};