var React = require('react');

var Comment = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
});

module.exports = Comment;