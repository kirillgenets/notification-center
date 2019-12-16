import React from 'react';
import Header from '../Header';
import Table from '../Table';
import PaginationContainer from '../../containers/PaginationContainer';
import ReadAllContainer from '../../containers/ReadAllContainer';

const App = () => (
  <React.Fragment>
    <Header />
    <Table />
    <PaginationContainer />
    <ReadAllContainer />
  </React.Fragment>
);

export default App;
