var contentful = require('contentful');

var contentfulClient = contentful.createClient({
    accessToken: '56aeefa6537d7b30d759027f721821c6cddf96d02d67a988af66e53cb435584f',
    space: 'c680wfvitajr'
});

module.exports = function() {
    return contentfulClient;
};