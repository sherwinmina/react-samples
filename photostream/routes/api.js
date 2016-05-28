var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET users listing. */
router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;

	if (resource == 'media'){
		var username = req.query.username;

		request
		.get('https://www.instagram.com/juicecrawl/media/')
		.end(function(err, response){
		    res.json({'confirmation':'success', 'media':JSON.parse(response.text)});
		    return;

		});

	    return;
	}

	next();

});

module.exports = router;
