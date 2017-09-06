const Sequelize = require('sequelize');
const sequelize = require('../db');

const Posts = sequelize.define('posts', {
  image_loc: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.STRING
  },
  user_id: {
  type: Sequelize.INTEGER
  }
});

Posts.sync();

module.exports = Posts;
