const util = require('util');
const defaultMessage = 'Sorry having a problem finding those pesky articles.';
const defaultTitle = `Hipstergram`;
const tables = require('../models/index');
const posts = require('../models/posts_repository');

module.exports.get = function(request, response) {
    posts.get(function(err, list) {
        if (err) {
            const message = err.errno === -2 ? defaultMessage : 'Try again later';
            // make sure we only render once!!! so return
            return response.render('404', {message: message});
        }
        response.render('index', {posts: list});
    })
}
