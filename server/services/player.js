import {getPlayerById} from '../repositories/leagues';

export const getPlayerHelper = (playerId, response) => {
    getPlayerById(playerId)
        .then(player => {
            return player.fields.name;
        })
        .then(player => response.json(player))
        .catch(error => error)
};