import {Router} from 'express';
import {leaguesRoutes} from './leagues/index';
import {fixtureRoutes} from './fixture/index';

export const rootRoutes = () => {
    const router = new Router();

    router.use('/leagues', leaguesRoutes());
    router.use('/fixture', fixtureRoutes());

    return router;
};