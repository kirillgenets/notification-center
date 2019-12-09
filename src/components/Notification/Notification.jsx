import React, { useState } from 'react';
import styles from './Notification.css';

const Notification = (props) => {
  const [readStatus, setReadStatus] = useState('unread');

  return (
    <tr className={[styles.notification, styles[readStatus]].join(' ')}>
      <td className={[styles.category, styles[props.category]].join(' ')}>{props.category}</td>
      <td className={styles.message}>{props.message}</td>
      <td className={styles.date}>{props.date}</td>
    </tr>
  )
}

export default Notification;