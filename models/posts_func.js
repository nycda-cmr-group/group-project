const del = require('delete');
const Posts = require('./posts')

//get all posts from posts table
const get = function(callback) {
  Posts.findAll().then(posts => {
    callback(null, posts);
  }, err => {
    callback(err);
  });
}


module.exports.get = get;
