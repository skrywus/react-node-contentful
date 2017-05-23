import React from 'react';
import {connect} from 'react-redux';
import {getArticles, areArticlesLoaded, isLoadedVisible} from '../../../../state/selectors';

const Articles = ({areSettingsLoaded, isLoaderVisible, articles}) => {
  return(
      <div>
        <h1>Articles</h1>

        { areArticlesLoaded && !isLoaderVisible ?
          <div className="bottom-one">
              {
                articles.map((article, index) => {
                  return(
                    <div key={index}>
                      <h4>{article.title}</h4>
                      <p>{article.categoryDescription}</p>
                    </div>
                  )
                })
              }
          </div>
        :''}
      </div>
  )
};

const mapStateToProps = (state) => {
    return {
        articles:  getArticles(state),
        isLoaderVisible: isLoadedVisible(state),
        areArticlesLoaded: areArticlesLoaded(state)
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
