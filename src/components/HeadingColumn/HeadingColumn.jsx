import React from 'react';
import styles from './HeadingColumn.css';

const HeadingColumn = (props) => {
  return (
    <td className={styles.column}>
      {props.isSubmenu ? 
        <button className={styles.toggler}>{props.name}</button> :
        <span className={styles.usual}>{props.name}</span>
      }
    </td>
  )
}

export default HeadingColumn;