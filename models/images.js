const Sequelize = require('sequelize');
const sequelize = require('../db');

const Images = sequelize.define('images', {
  image_loc: {
    type: Sequelize.STRING, allowNull:false
  },
  user_id: {
    type: Sequelize.INTEGER, allowNull:false
  },
  desc: {
    type: Sequelize.STRING(150), allowNull:true
  }
});

Images.sync();

module.exports = Images;
