const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.DB_PORT || 8080;
const db = require('./db/index.js');

app.use(express.static('public'));

app.set('view engine', 'ejs');





const server = app.listen(port, () => {
  console.log(`started port ${port}`);
});
