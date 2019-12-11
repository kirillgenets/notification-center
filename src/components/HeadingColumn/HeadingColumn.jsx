import React from 'react';
import styles from './HeadingColumn.css';

const HeadingColumn = (props) => {
  return (
    <td className={styles.column}>
      <span className={styles.text}>{props.name}</span>
    </td>
  )
}

export default HeadingColumn;