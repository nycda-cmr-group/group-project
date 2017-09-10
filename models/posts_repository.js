const Posts = require('./index').Posts

//get all posts from posts table
const get = function(callback) {
  Posts.findAll().then(posts => {
    callback(null, posts);
  }, err => {
    callback(err);
  });
}

// get 1 post by ID
const getPostById = function(id, callback) {
  Posts.query('select * from posts where id = $1 limit 1', [id], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows[0])
    }
  })
}

module.exports.get = get;
module.exports.getPostById = getPostById;
