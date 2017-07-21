import {Router} from 'express';
import {updateFixtureController} from './controllers/update';

export const fixtureRoutes = () => {
    const router = new Router();

    router.put('/:id/update', updateFixtureController);

    return router;
};