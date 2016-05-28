var PhotostreamServerActionCreators = require('../actions/PhotostreamServerActionCreators');
var request = require('superagent');


module.exports = {

	getRequest: function(path){
		request
		.get(path)
		.end(function(err, response){
			var results = JSON.parse(response.text); // this returns as a string - have to convert to JSON object
//			console.log('API UTILS: '+results);
			PhotostreamServerActionCreators.mediaReceived(results.media);
		    return;
		});

	}


};