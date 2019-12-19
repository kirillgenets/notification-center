import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReadAll.css';

const ReadAll = (props) => {
  const handleButtonClick = () => {
    props.markAllNotificationsAsRead(
      props.currentPage,
      props.categoryFilter,
      props.readStatusFilter,
    );
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
  currentPage: PropTypes.number,
  categoryFilter: PropTypes.string,
  readStatusFilter: PropTypes.string,
};

export default ReadAll;
