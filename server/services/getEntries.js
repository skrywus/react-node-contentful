var contentfulClient = require('../config/contentful');

module.exports = function(contentID) {
    var response = contentfulClient()
        .getEntries({
            content_type: contentID
        })
        .then(function (entries) {
            return entries;
        })
    return response;
}