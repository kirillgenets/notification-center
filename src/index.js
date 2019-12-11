import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './style/style.css';
import './style/normalize.css';
import generateNotifications from './API/generator';

console.log(generateNotifications(10));

ReactDOM.render(<App />, document.querySelector('#root'));
