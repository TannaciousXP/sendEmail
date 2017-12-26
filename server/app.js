const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;