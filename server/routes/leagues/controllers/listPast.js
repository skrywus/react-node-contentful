import {getPastLeagues} from '../../../repositories/leagues'
import {League} from '../../../models/League';
import {getPlayerById} from '../../../repositories/leagues';

export const listPastController = (request, response) => {
    getPastLeagues()
        .then(leagues => {
            return leagues.items.map(item => {
                item.fields.players.forEach(player => {
                    getPlayerById(player.sys.id)
                        .then(player => {
                            item.fields.players.push({name: player.fields.name});
                        })
                        .catch(error => console.log(error))

                });
                return new League(item);
            });
        })
        .then(leagues => response.status(200).json(leagues))
        .catch(error => error)
};