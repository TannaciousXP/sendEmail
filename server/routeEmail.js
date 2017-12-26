const express = require('express');
const router = express.Router();
const emailController = require('./controllerEmail');

router.route('/')
  .get((req, res) => res.render('instructions.ejs'));

router.route('/sendEmail')
  .post(emailController);

module.exports = router;