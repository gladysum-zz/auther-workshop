'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
module.exports = router;

router.post('/', function (req, res, next) {
	User.findOne({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	})
	.then(function (user) {
		if (!user) {res.send(401);}
		else {res.send(200);}
	})
	.catch(next);


})