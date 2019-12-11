import React from 'react';
import HeadingColumn from '../HeadingColumn/HeadingColumn';
import Menu from '../Menu/Menu';
import styles from './TableHeading.css';

const TableHeading = () => {
  return (
    <thead>
      <tr className={styles.row}>
        <td className={styles.column}>
          <Menu />
        </td>
        <HeadingColumn name="Message" />
        <HeadingColumn name="Date" />
      </tr>
    </thead>
  )
}

export default TableHeading;