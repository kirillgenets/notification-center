import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouterContainer from '../../../containers/AppRouterContainer';
import HeaderContainer from '../../../containers/HeaderContainer';

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<HeaderContainer />
				<AppRouterContainer />
			</Router>
		</React.Fragment>
	);
};

export default App;
