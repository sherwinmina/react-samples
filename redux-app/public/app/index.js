import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from './Main'
import RootReducer from './reducers'

let store = createStore(RootReducer)


render(	<Provider store={store}>
			<Main />
		</Provider>, document.getElementById('app')
);