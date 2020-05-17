import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/pages/App';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import './style/style.css';
import 'normalize.css';

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
