import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import Articles from './modules/articles/components/Articles';
import { Router, Route } from 'react-router'
import {createRedux} from './utils/store';
import initArticlesModule from './modules/articles'

const store = createRedux((process.env.NODE_ENV === 'production')
    ? window.__INITIAL_STATE__
    : {'default': {}} );

const Root = (props) => {

    return(
        <Provider store={store}>
            <Router
                history={props.history}>
                <Route path="/" component={App}/>
                <Route path="/articles" component={Articles} onEnter={() => initArticlesModule(store)}/>
            </Router>
        </Provider>
    );
};


export default Root;