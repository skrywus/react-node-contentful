import {addScore} from '../../../repositories/fixture'

export const updateFixtureController = (request, response) => {
    addScore(request.params.id, parseInt(request.body.homeScore), parseInt(request.body.awayScore), request.body.confirmed)
        .then(fixture => response.status(200).json(fixture))
        .catch(error => error)
};