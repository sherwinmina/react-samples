var React = require('react');
var PhotoStreamActionCreators = require('../actions/PhotostreamActionCreators');
var MediaStore = require('../stores/MediaStore');

var Stream = React.createClass({
	getInitialState: function(){
		return {
			items: MediaStore.getCurrentItems()
		};
	},

	componentDidMount: function(){
		console.log('Stream: componentDidMount');
	    MediaStore.addChangeListener(this.onChange);
		PhotoStreamActionCreators.fetchImages('juicecrawl');

	},

	onChange: function(){
		console.log('STREAM - onChange');
		this.setState({items: MediaStore.getCurrentItems() });

	},

	render: function(){
		var list = this.state.items.map(function(item){
			return <li><img src={item.images.standard_resolution.url} /></li>;
		});

		return (
			<div>
				SHOW ME SOME PICTURES!
				<ol>
					{list}

				</ol>
			</div>

		);

	}

});

module.exports = Stream;