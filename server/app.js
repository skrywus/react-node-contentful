import {rootRoutes} from './routes';
import cors from 'cors';

var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use('/api', cors(), rootRoutes());
module.exports = app;