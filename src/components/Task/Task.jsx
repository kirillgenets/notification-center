import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Task.css';

const Task = (props) => {
  const completionStatus = props.isCompleted ? 'complete' : 'incomplete';

  return (
    <tr className={classNames(styles.task, styles[completionStatus])}>
      <td className={classNames(styles.category, styles[props.category.toLowerCase()])}>
        {props.category.toUpperCase()}
      </td>
      <td className={styles.text}>{props.description}</td>
      <td className={styles.date}>{props.date}</td>
    </tr>
  );
};

Task.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  date: PropTypes.string,
};

Task.defaultProps = {
  completedStatus: 'incomplete',
};

export default Task;
