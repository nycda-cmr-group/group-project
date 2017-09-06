const Sequelize = require('sequelize');
const sequelize = require('../db');

const Posts = sequelize.define('posts', {
  image_url: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.STRING
  },
  user_id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
});

Posts.sync();

module.exports = Posts;
