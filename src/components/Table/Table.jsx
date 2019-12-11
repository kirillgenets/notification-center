import React from 'react';
import TableHeading from '../TableHeading/TableHeading';
import NotificationsContainer from '../../containers/NotificationsContainer';
import styles from './Table.css';

const Table = () => {
    return (
        <table className={styles.table}>
            <TableHeading />
            <NotificationsContainer />
        </table>
    );
};

export default Table;
