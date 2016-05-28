var React = require('react');
var Comment = require('./Comment.jsx');
var AppActions = require('../actions/AppActions.jsx');
var AppStore = require('../stores/AppStore.jsx');


var comments = [
	{'id':'1', 'text':'this is the first comment'},
	{'id':'2', 'text':'this is the second comment'},
	{'id':'3', 'text':'this is the third comment'}
];

var CommentBox = React.createClass({
	buttonTapped: function(){
		console.log('BUTTON TAPPED!!');
		AppActions.addItem('this is the item');

	},
	render: function(){
		var commentList = comments.map(function(item){
			return <Comment key={item.id} text={item.text} />;

		});
		
		return (
			<div>
				<div>{commentList}</div>
				<button onClick={this.buttonTapped}>TAP ME!</button>

			</div>
		);
	}

});

module.exports = CommentBox;