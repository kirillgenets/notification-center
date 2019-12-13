import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeadingColumn.css';

const HeadingColumn = (props) => (
        <td className={styles.column}>
            <span className={styles.text}>
              {props.name}
            </span>
        </td>
);

HeadingColumn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeadingColumn;
