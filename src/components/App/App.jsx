import React from 'react';
import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';
import ReadAllContainer from '../../containers/ReadAllContainer';

const App = () => (
        <React.Fragment>
            <Header />
            <Table />
            <Pagination />
            <ReadAllContainer />
        </React.Fragment>
);

export default App;
