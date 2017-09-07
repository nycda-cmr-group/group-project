const Posts = require('./index').Posts

//get all posts from posts table
const get = function(callback) {
  Posts.findAll().then(posts => {
    callback(null, posts);
  }, err => {
    callback(err);
  });
}

module.exports.get = get;
