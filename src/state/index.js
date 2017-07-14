import { injectReducer} from './../utils/reducer';

import leagueReducer from './league/reducer';

export const injectDataStateReducers = () => {
    injectReducer('leagues', leagueReducer);
};