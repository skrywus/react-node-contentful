import {Router} from 'express';
import {leaguesRoutes} from './leagues/index';

export const rootRoutes = () => {
    const router = new Router();

    router.use('/leagues', leaguesRoutes());

    return router;
};