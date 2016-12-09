'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');

module.exports = router;

router.post('/', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
    req.session.userId = user.id;
    res.redirect(201, '../../');
  })
  .catch(next);
});
