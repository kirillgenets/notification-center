import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../common/Header';
import Table from '../board/Table';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp/SignUp';

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<RoutesSwitcher
					routesData={[
						{
							path: '/',
							component: Table,
							exact: true,
						},
						{
							path: '/sign-in',
							component: SignIn,
						},
						{
							path: '/sign-up',
							component: SignUp,
						},
					]}
				/>
			</Router>
		</React.Fragment>
	);
};

export default App;
