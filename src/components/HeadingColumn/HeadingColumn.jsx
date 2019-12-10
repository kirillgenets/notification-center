import React from 'react';
import Filter from '../Filter/Filter';
import styles from './HeadingColumn.css';

const HeadingColumn = (props) => {
  return (
    <td className={styles.column}>
      {props.isSubmenu ?
        <React.Fragment>
          <button className={styles.toggler}>{props.name}</button>
          <Filter isVisible={true} />
        </React.Fragment> :
        <span className={styles.usual}>{props.name}</span>
      }
    </td>
  )
}

export default HeadingColumn;