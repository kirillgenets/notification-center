import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Notification from '../Notification';

const Notifications = (props) => {
  useEffect(() => {
    props.requestNotifications(props.currentPage, props.categoryFilter, props.readStatusFilter);
  }, [props.currentPage, props.categoryFilter, props.readStatusFilter]);

  const onNotificationClick = (notification) => () => {
    if (notification.isRead) return;

    props.markNotificationAsRead(
      notification.ID,
      props.currentPage,
      props.categoryFilter,
      props.readStatusFilter,
    );
  };

  const getPrettifiedDate = (date) => moment(date).format('MMM DD, YYYY, HH:mm');

  return (
    <tbody>
      {props.notifications.map((item) => (
        <Notification
          key={item.ID}
          isRead={item.isRead}
          category={item.category}
          text={item.text}
          onNotificationClick={onNotificationClick(item)}
          date={getPrettifiedDate(item.createdOn)}
        />
      ))}
    </tbody>
  );
};

Notifications.propTypes = {
  requestNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  markNotificationAsRead: PropTypes.func,
  categoryFilter: PropTypes.string,
  readStatusFilter: PropTypes.string,
};

export default Notifications;
