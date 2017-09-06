const util = require('util');

//require the models
const posts = require('../models/posts');
const comments = require('../models/comments');
const images = require('../models/images');
const users = require('../models/users');
const tags = require('../models/tags');

const defaultMessage = 'Sorry having a problem finding those pesky articles.';
const defaultTitle = `Hipstergram`;

module.exports.get = function(request, response) {
    posts.get(function(err, list) {
        if (err) {
            const message = err.errno === -2 ? defaultMessage : 'Try again later';
            // make sure we only render once!!! so return
            return response.render('404', {message: message});
        }
        response.render('index', {articles: list, title: defaultTitle});
    })
}
