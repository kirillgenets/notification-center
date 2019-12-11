import React from 'react';
import TableHeading from '../TableHeading/TableHeading';
import Notifications from '../Notificatons/Notifications';
import styles from './Table.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <TableHeading />
      <Notifications />
    </table>
  )
}

export default Table;