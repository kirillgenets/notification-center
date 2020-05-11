import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Task.css';

const Task = (props) => {
  const readStatus = props.isRead ? 'read' : 'unread';

  return (
    <tr className={classNames(styles.task, styles[readStatus])} onClick={props.onTaskClick}>
      <td className={classNames(styles.category, styles[props.category.toLowerCase()])}>
        {props.category}
      </td>
      <td className={styles.text}>{props.description}</td>
      <td className={styles.date}>{props.date}</td>
    </tr>
  );
};

Task.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isRead: PropTypes.bool,
  date: PropTypes.string,
  onTaskClick: PropTypes.func,
};

Task.defaultProps = {
  readStatus: 'unread',
};

export default Task;
