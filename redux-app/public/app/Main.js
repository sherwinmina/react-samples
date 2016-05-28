import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTasks, getTasks } from './actions'


class Main extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
//	    const { dispatch } = this.props;
	    this.props.dispatch(getTasks());
	}

	render(){
//		const { dispatch, tasks } = this.props;
		console.log('RENDER: '+JSON.stringify(this.props.tasks));
		var tasks = this.props.tasks.map(function(task, i){
			return <li key={i}>{task.text}</li>
		});

		return (
			<div>
				This is the Main Component
				<ol>
					{tasks}
				</ol>

			</div>
		)
	}

}

function select(state){
	console.log('SELECT: '+JSON.stringify(state))
	return {
		tasks: state.tasks
	}
}

export default connect(select)(Main);