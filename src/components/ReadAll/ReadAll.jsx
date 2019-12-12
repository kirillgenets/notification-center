import React from 'react';
import styles from './ReadAll.css';

const ReadAll = props => {
    const handleButtonClick = () => {
        props.markAllNotificationsAsRead(props.notifications);
    }

    return (
        <button className={styles.button} onClick={handleButtonClick}>
            Mark all as read
        </button>
    );
};

export default ReadAll;
