"use strict";

// packages
var express = require("express");
var path = require('path');


var app = express();

app.use(express.static("server"));

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// intercept OPTIONS method
		if ('OPTIONS' == req.method) {
			res.sendStatus(200);
		} else {
			next();
		}
};

const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('App running on port ' + port);
});
