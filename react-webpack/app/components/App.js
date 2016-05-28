var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List.js');

var App = React.createClass({

	render: function(){

		return (
			<div>
				Hello
				<List />
			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('app'));