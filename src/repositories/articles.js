const fetchArticles = () => {
    return (
        window.fetch('http://localhost:9000/api/articles')
            .then(response => response.json())
    );

};

export default fetchArticles;