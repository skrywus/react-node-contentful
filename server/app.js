var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var Articles = require('./models/article');

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});
// middleware to use for all requests
router.route('/articles')
    .get(function (request, response) {
        Articles()
            .then(items => {
                return items.items.map(item => item.fields);
            })
            .then(results => response.json({message: results}))
    });


router.get('/', (req, res) => {
    res.json({ message: 'api!' });
});

app.use('/api', router);

module.exports = app;