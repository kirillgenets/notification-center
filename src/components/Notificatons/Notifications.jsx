import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Notification from '../Notification';

const Notifications = (props) => {
  useEffect(() => {
    props.requestNotifications(props.currentPage);
  });

  const onNotificationClick = (notification) => () => {
    props.markNotificationAsRead(notification.ID);
  };

  const getPrettifiedDate = (date) => {
    return moment(date).format('MMM DD, YYYY, HH:mm');
  }

  return (
    <tbody>
      {props.notificationsToShow.map((item) => (
        <Notification
          key={item.ID}
          isRead={item.isRead}
          category={item.category}
          text={item.text}
          onNotificationClick={onNotificationClick(item)}
          date={item.readOn ? getPrettifiedDate(item.readOn) : ''}
        />
      ))}
    </tbody>
  );
};

Notifications.propTypes = {
  requestNotifications: PropTypes.func.isRequired,
  notificationsToShow: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  allNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
