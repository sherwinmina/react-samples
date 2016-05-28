
var MessageAppDispatcher = require('../dispatcher/MessageAppDispatcher');

// var ChatConstants = require('../constants/ChatConstants');
// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
//    console.log('RECEIVE_RAW_MESSAGES: '+JSON.stringify(rawMessages));
    MessageAppDispatcher.dispatch({
      type: 'RECEIVE_RAW_MESSAGES',
      rawMessages: rawMessages
    });
  }

  // receiveCreatedMessage: function(createdMessage) {
  //   ChatAppDispatcher.dispatch({
  //     type: ActionTypes.RECEIVE_RAW_CREATED_MESSAGE,
  //     rawMessage: createdMessage
  //   });
  // }

};
