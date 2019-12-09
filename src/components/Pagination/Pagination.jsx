import React from 'react';
import styles from './Pagination.css';

const Pagination = (props) => {
  return (
    <nav className={styles.pagination}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">{'<'}</a>
        </li>
        <li className={styles.item}>
          <a href="#">1</a>
        </li>
        <li className={styles.item}>
          <a href="#">2</a>
        </li>
        <li className={styles.item}>
          <a href="#">3</a>
        </li>
        <li className={styles.item}>
          <a href="#">4</a>
        </li>
        <li className={styles.item}>
          <a href="#">5</a>
        </li>
        <li className={styles.item}>
          <span>...</span>
        </li>
        <li className={styles.item}>
          <a href="#">100</a>
        </li>
        <li className={styles.item}>
          <a href="#">{'>'}</a>
        </li>
      </ul>
    </nav>
  )  
}

export default Pagination;