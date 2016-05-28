
var MessageServerActionCreators = require('../actions/MessageServerActionCreators');
var request = require('request');
var Promise = require('bluebird');

// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.

function urlRequest(url){
    return new Promise(function (resolve, reject){
        request.get(url, function (error, response, body) {

          if (error){
              reject(error);
          }
          else{
              var pkg = JSON.parse(body);
              resolve(pkg);

              // var messages = pkg.messages;
              // console.log('TEST 2: '+JSON.stringify(messages));
              // MessageServerActionCreators.receiveAll(messages);

          }
        });
    });
}


module.exports = {

  getAllMessages: function() {
    console.log('GET ALL MESSAGES');
    // simulate retrieving data from a database

    var url = 'http://localhost:3000/api/messages';
    urlRequest(url)
    .then(function(pkg){
        var messages = pkg.messages;
        console.log('TEST 1: '+JSON.stringify(messages));
        MessageServerActionCreators.receiveAll(messages);
    })
    .catch(function(error){
//        console.log('TEST 2: '+JSON.stringify(error));
        return;
    });



    // simulate success callback
   // MessageServerActionCreators.receiveAll(rawMessages);

  }


};
