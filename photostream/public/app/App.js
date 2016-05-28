var React = require('react');
var ReactDOM = require('react-dom');
var Stream = require('./components/Stream');

var App = React.createClass({

	render: function(){

		return (
			<div>
				<h1>Hello!!</h1>
				<Stream />
			</div>
		);
	}

});

ReactDOM.render(<App />, document.getElementById('app'));