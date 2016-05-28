var React = require('react');

var List = React.createClass({

	render: function(){

		return (
			<ol>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ol>
		);
	}

});

module.exports = List;
