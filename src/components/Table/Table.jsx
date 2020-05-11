import React from 'react';
import TableHeading from '../TableHeading';
import TasksContainer from '../../containers/TasksContainer';
import styles from './Table.css';

const Table = () => (
  <table className={styles.table}>
    <TableHeading />
    <TasksContainer />
  </table>
);

export default Table;
