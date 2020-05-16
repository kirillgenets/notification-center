import React from 'react';
import Header from '../Header';
import Table from '../../board/Table';
import PaginationContainer from '../../../containers/PaginationContainer';

const App = () => (
	<React.Fragment>
		<Header />
		<Table />
		<PaginationContainer />
	</React.Fragment>
);

export default App;
