var React = require('react');

Message = React.createClass({
	render: function(){
		return (

			<li>{this.props.text}</li>

		);

	}
});

module.exports = Message;