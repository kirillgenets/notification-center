import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';

const Notification = (props) => {
    return (
        <tr className={[styles.notification, styles[props.readStatus]].join(' ')}>
            <td className={[styles.category, styles[props.category]].join(' ')}>{props.category}</td>
            <td className={styles.message}>{props.text}</td>
            <td className={styles.date}>{props.date}</td>
        </tr>
    );
};

Notification.propTypes = {
    readStatus: PropTypes.string,
    category: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

Notification.defaultProps = {
    readStatus: 'unread'
};

export default Notification;
