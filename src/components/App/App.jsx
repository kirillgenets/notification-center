import React from 'react';
import Header from '../Header/Header';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import ReadAll from '../ReadAll/ReadAll';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Table />
            <Pagination />
            <ReadAll />
        </React.Fragment>
    );
};

export default App;
