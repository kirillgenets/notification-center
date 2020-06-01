import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../common/Header';
import AppRouterContainer from '../../../containers/AppRouterContainer';

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<AppRouterContainer />
			</Router>
		</React.Fragment>
	);
};

export default App;
