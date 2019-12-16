import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReadAll.css';

const ReadAll = (props) => {
  const handleButtonClick = () => {
    props.markAllNotificationsAsRead(props.notifications);
  };

  return (
    <button
      className={styles.button}
      onClick={handleButtonClick}
    >
        Mark all as read
    </button>
  );
};

ReadAll.propTypes = {
  markAllNotificationsAsRead: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

export default ReadAll;
