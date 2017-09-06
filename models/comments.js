const Sequelize = require('sequelize');
const sequelize = require('../db');

const Comments = sequelize.define('comments', {
  post_id: {
    type: Sequelize.INTEGER
  },
  comments: {
    type: Sequelize.STRING
  }
});

Comments.sync();

module.exports = Comments;
