const Sequelize = require('sequelize');
const sequelize = require('../db');

const Tags = sequelize.define('tags', {
  tags: {
    type: Sequelize.STRING
  },
  post_id: {
    type: Sequelize.INTEGER
  }
});

Tags.sync();

module.exports = Tags;
