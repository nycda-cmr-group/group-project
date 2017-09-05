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

//models
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

const Comments = sequelize.define('comments', {
  post_id: {
    type: Sequelize.INTEGER
  },
  comments: {
    type: Sequelize.STRING
  }
});

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

const Users = sequelize.define('users', {
  email_username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

const Tags = sequelize.define('tags', {
  tags: {
    type: Sequelize.STRING
  },
  post_id: {
    type: Sequelize.INTEGER
  }
});

//create models in db
sequelize.sync();

module.exports = sequelize;
