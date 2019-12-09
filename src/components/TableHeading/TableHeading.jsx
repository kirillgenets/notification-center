import React from 'react';
import HeadingColumn from '../HeadingColumn/HeadingColumn';
import styles from './TableHeading.css';

const TableHeading = () => {
  return (
    <thead>
      <tr className={styles.row}>
        <HeadingColumn
          isSubmenu={true}
          name="Category"
        />
        <HeadingColumn
          isSubmenu={false}
          name="Message"
        />
        <HeadingColumn
          isSubmenu={false}
          name="Date"
        />
      </tr>
    </thead>
  )
}

export default TableHeading;