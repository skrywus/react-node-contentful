import fetchArticles from '../repositories/articles';

const getAll = () => {
    return fetchArticles();
};

export default getAll;