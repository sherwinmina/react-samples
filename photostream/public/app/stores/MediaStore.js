var PhotostreamDispatcher = require('../dispatcher/PhotostreamDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _items = [];

function loadItems(media){
//    console.log('MediaStore: LOAD ITEMS - '+JSON.stringify(media.items));
    _items = media.items;
}


var MediaStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /** @param {function} callback  */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCurrentItems: function(){
    return _items;
  }


});


MediaStore.dispatchToken = PhotostreamDispatcher.register(function(action) {

  switch(action.type) {

    case 'RECEIVE_MEDIA':
      loadItems(action.rawMedia);
	    MediaStore.emitChange();
	    break;

    default:
      // do nothing
  }


});


module.exports = MediaStore;