

var MessageAppDispatcher = require('../dispatcher/MessageAppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _messages = {};

function _addMessages(rawMessages) {
  rawMessages.forEach(function(message) {
    if (!_messages[message.id]) {
//     _messages[message.id] = ChatMessageUtils.convertRawMessage(message, ThreadStore.getCurrentID());
       _messages[message.id] = message;

    }
  });

  console.log('_AddMessages: '+JSON.stringify(_messages));

}


var MessageStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _messages[id];
  },

  getAll: function() {
//    console.log('MESSAGE STORE: GetAll == '+JSON.stringify(_messages));
    return _messages;
  }


});

MessageStore.dispatchToken = MessageAppDispatcher.register(function(action) {

  switch(action.type) {

    case 'RECEIVE_RAW_MESSAGES':
//       console.log('ACTION TYPE: RECEIVE_RAW_MESSAGES == '+JSON.stringify(action.rawMessages));
      _addMessages(action.rawMessages);
      MessageStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = MessageStore;
