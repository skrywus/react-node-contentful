var getEntries = require('../services/getEntries');

var CATEGORY_CONTENT_TYPE_ID = '6XwpTaSiiI2Ak2Ww0oi6qa';

module.exports = function(){
    return getEntries(CATEGORY_CONTENT_TYPE_ID);
};