import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render(){
		return <div>THIS IS THE REACT APP!</div>
	}
}

ReactDOM.render(<App />, document.getElementById('app'))