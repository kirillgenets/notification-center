import React, { useState } from 'react';
import styles from './Notification.css';

const Notification = (props) => {
  return (
    <tr className={[styles.notification, styles[props.readStatus]].join(' ')}>
      <td className={[styles.category, styles[props.category]].join(' ')}>{props.category}</td>
      <td className={styles.message}>{props.message}</td>
      <td className={styles.date}>{props.date}</td>
    </tr>
  )
}

export default Notification;