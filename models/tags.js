const Sequelize = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('tags', {
  tags: {
    type: Sequelize.STRING
  },
  post_id: {
    type: Sequelize.INTEGER,
    // references: {
    //   model: 'posts',
    //   key: 'id'
    // }
  }
});

Tags.sync();

module.exports = Tags;
