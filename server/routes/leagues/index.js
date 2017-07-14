import {Router} from 'express';
import {listAllController} from './controllers/listAll';
import {listActiveController} from './controllers/listActive';
import {listPastController} from './controllers/listPast';

export const leaguesRoutes = () => {
    const router = new Router();

    router.get('/all', listAllController);
    router.get('/active', listActiveController);
    router.get('/past', listPastController);

    return router;
};