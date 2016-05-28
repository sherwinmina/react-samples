var PhotostreamDispatcher = require('../dispatcher/PhotostreamDispatcher');
var PhotostreamServerActionCreators = require('../actions/PhotostreamServerActionCreators');
var APIUtils = require('../utils/APIUtils');


module.exports = {

	fetchImages: function(username){
		console.log('PhotostreamActionCreators: fetchImages for '+username);
		var path = '/api/media?username='+username;
		APIUtils.getRequest(path);

	}


};