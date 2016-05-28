var React = require('react');
var Message = require('./Message.jsx');
var MessageStore = require('../stores/MessageStore');


function getStateFromStores() {
  return {
    messages: MessageStore.getAll()
//    thread: ThreadStore.getCurrent()
  };
}

function getMessageListItem(message) {
  return (
    <MessageListItem
      key={message.id}
      message={message} />
  );
}



var Messages = React.createClass({
	getInitialState: function() {
	    return getStateFromStores();
	},
	componentDidMount: function() {
//	    this._scrollToBottom();
	    MessageStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
	    MessageStore.removeChangeListener(this._onChange);
	},

	render: function(){
		var indexes = Object.keys(this.state.messages);

		var messageList = [];
		for (var i=0; i<indexes.length; i++){
			var index = indexes[i];
			var message = this.state.messages[index];
			messageList.push(message);
		}

		var list = messageList.map(function(message){
//			console.log('MESSAGE: '+JSON.stringify(message));
			return <Message key={message.id} text={message.text} />;
		});


		return (
			<div>
				<ol>{list}</ol>
			</div>
		);
	},

	  /**
	   * Event handler for 'change' events coming from the MessageStore */
	  _onChange: function() {
	    this.setState(getStateFromStores());
//	  	console.log('MESSAGES.JSX: Messages Changed == '+JSON.stringify(this.state.messages));
	  }
});

module.exports = Messages;