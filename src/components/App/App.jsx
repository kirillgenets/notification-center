import React from 'react';
import Header from '../Header/Header';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import ReadAllContainer from '../../containers/ReadAllContainer';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Table />
            <Pagination />
            <ReadAllContainer />
        </React.Fragment>
    );
};

export default App;
