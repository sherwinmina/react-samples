import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTasks, getTasks} from './actions'
import TaskList from './taskList'

class App extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
	    const { dispatch } = this.props;
	    dispatch(getTasks());
	}

	handleCompleteTasks(task){
		const { dispatch } = this.props;
		dispatch(completeTask(task.id))

	}

	render(){
		const { dispatch, habits, dailies, todos } = this.props;
		return (


			<div>
				<section>
					<h3>Habits</h3>
					<TaskList
			            onCompleteTask={(task) => this.handleCompleteTask(task)}
			            tasks={habits} type="habit" />
				</section>

				<section>
					<h3>Dailies</h3>

				</section>

				<section>
					<h3>Todos</h3>

				</section>

			</div>
		)
	}

}

function select(state){
	return {
		habits: state.tasks.filter(task => task.type === 'habit'),
		dailies: state.tasks.filter(task => task.type === 'daily'),
		todos: state.tasks.filter(task => task.type === 'todo' && !task.completed)
	}
}

export default (select)(App);