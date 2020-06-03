import React from 'react';
import Table from './../Table';
import PaginationContainer from '../../../../containers/PaginationContainer';

const Board = () => {
	return (
		<React.Fragment>
			<Table />
			<PaginationContainer />
		</React.Fragment>
	);
};

export default Board;
