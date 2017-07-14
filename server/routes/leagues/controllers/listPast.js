import {getPastLeagues} from '../../../repositories/leagues'

export const listPastController = (request, response) => {
     getPastLeagues()
         .then(leagues => {
             return leagues.items.map(item => item.fields);
         })
         .then(leagues => response.status(200).json(leagues))
         .catch(error => error)
};