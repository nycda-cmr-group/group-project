const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.DB_PORT || 8080;
const db = require('./db/index.js');
const postsController = require('./controller/posts.js')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', postsController.get);

const server = app.listen(port, () => {
  console.log(`started port ${port}`);
});
