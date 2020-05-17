import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../common/Header';
import Table from '../board/Table';
import PaginationContainer from '../../../containers/PaginationContainer';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import Title from '../../common/Title';

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
							path: '/table',
							component: Title,
						},
						{
							path: '/header',
							component: PaginationContainer,
						},
					]}
				/>
				<PaginationContainer />
			</Router>
		</React.Fragment>
	);
};

export default App;
