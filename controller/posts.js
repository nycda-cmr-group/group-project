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

// (Show) 1 post by id and show that post
module.exports.show = function(request, response) {
	const id = request.params.id;

	if (!id) {
		return response.render('404', {message: defaultMessage, title: defaultTitle});
	}

	posts.getPostById(parseInt(id), function(err, post) {
		if (err) {
			const message = err.errno === -2 ? defaultMessage : 'Try again later';
			return response.render('404', {message: message, title: defaultTitle}) ;
		}

		if (!post || posts.length === 0) {
			return response.render('404', {message: defaultMessage, title: defaultTitle});
		}

		response.render('post', {
				posts: post,
		});
	})
}
