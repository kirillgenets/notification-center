import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';

const Notification = (props) => {
  const readStatus = props.isRead ? 'read' : 'unread';

  return (
    <tr
      className={[styles.notification, styles[readStatus]].join(' ')}
      onClick={props.onNotificationClick}
    >
      <td className={[styles.category, styles[props.category.toLowerCase()]].join(' ')}>
        {props.category}
      </td>
      <td className={styles.text}>
        {props.text}
      </td>
      <td className={styles.date}>
        {props.date}
      </td>
    </tr>
  );
};

Notification.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRead: PropTypes.bool,
  date: PropTypes.string,
  onNotificationClick: PropTypes.func,
};

Notification.defaultProps = {
  readStatus: 'unread',
};

export default Notification;
