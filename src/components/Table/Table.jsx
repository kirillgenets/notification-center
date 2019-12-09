import React from 'react';
import TableHeading from '../TableHeading/TableHeading';
import TableBody from '../Notificatons/Notifications';
import styles from './Table.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <TableHeading />
      <TableBody />
    </table>
  )
}

export default Table;