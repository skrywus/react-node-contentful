import {getAllLeagues} from '../../../repositories/leagues'

export const listAllController = (request, response) => {
     getAllLeagues()
         .then(leagues => {
             return leagues.items.map(item => item.fields);
         })
         .then(leagues => response.status(200).json(leagues))
         .catch(error => error)
};