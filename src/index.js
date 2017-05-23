import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import Root from './Root';
import './index.css';

ReactDOM.render(
    <Root history={hashHistory}/>,
    document.getElementById('root')
);
