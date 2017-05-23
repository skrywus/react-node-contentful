import {loadArticles} from '../../state/actions';

export default (store) => {
    store.dispatch(loadArticles());
};

