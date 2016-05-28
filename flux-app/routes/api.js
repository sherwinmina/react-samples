var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource;
	if (resource == 'messages'){
		var messages = [
			{'id':'1', 'text':'this is the first comment'},
			{'id':'2', 'text':'this is the second comment'},
			{'id':'3', 'text':'this is the third comment'},
			{'id':'4', 'text':'this is the fourth comment'}
		];

		res.json({'confirmation':'success', 'messages':messages});
		return;
	}

	res.json({'resource':resource});

});

module.exports = router;
