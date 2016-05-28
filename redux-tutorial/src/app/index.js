import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootReducer from './reducers'
import App from './app'


let store = createStore(RootReducer)


render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app-root')
);
