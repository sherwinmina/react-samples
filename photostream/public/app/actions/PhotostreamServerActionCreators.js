var PhotostreamDispatcher = require('../dispatcher/PhotostreamDispatcher');


module.exports = {

	mediaReceived: function(media){
//		console.log('PhotostreamServerActionCreators - mediaReceived: '+JSON.stringify(media));
	    PhotostreamDispatcher.dispatch({
	      type: 'RECEIVE_MEDIA',
	      rawMedia: media
	    });
	}


};