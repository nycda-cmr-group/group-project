const Sequelize = require('sequelize');
const sequelize = require('../db');

const Users = sequelize.define('users', {
  email_username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

Users.sync();

module.exports = Users;
