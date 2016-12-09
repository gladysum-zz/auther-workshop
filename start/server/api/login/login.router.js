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
		if (!user) {res.sendStatus(401);}
		else {
			req.session.userId = user.id;
			console.log("This is the session: ", req.session);
			res.redirect(200, '../../');
		}
	})
	.catch(next);
})
