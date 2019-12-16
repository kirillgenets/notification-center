import React from 'react';
import TableHeading from '../TableHeading';
import NotificationsContainer from '../../containers/NotificationsContainer';
import styles from './Table.css';

const Table = () => (
  <table className={styles.table}>
    <TableHeading />
    <NotificationsContainer />
  </table>
);

export default Table;
