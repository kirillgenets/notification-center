import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import './style/style.css';
import './style/normalize.css';

import getRandomNotifications from './data/generator';

console.log(getRandomNotifications(10));

const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
