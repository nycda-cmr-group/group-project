const Sequelize = require('sequelize');
const config = require('dotenv').config();

var sequelize;

sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect:  'postgres',
  protocol: 'postgres'
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
