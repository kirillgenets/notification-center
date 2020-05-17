import React from 'react';
import Header from '../../../common/Header';
import Table from '../Table';
import PaginationContainer from '../../../../containers/PaginationContainer';
import Navigation from '../../../common/Navigation';

const App = () => (
	<React.Fragment>
		<Navigation
			routesData={[
				{
					title: 'title',
					path: '/table',
					component: Table,
				},
				{
					title: 'title1',
					path: '/header',
					component: Header,
				},
			]}
		/>
		<Header />
		<Table />
		<PaginationContainer />
	</React.Fragment>
);

export default App;
