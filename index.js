const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const db = require('./db/index.js');

const postsController = require('./controller/posts.js')
const usersController = require('./controller/users.js')

const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', postsController.get);
app.get('/posts', postsController.get);
app.get('/posts/:id', postsController.show);

//users
// app.get('/user/signup', usersController.new);

const server = app.listen(port, () => {
  console.log(`started port ${port}`);
});
