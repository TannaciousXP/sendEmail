const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routeEmail = require('./routeEmail');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set routing
app.use('/', routeEmail)

module.exports = app;

