import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Notification from '../Notification';

const Notifications = (props) => {
  useEffect(() => {
    props.requestNotifications(1);
  }, []);

  const onNotificationClick = (notification) => () => {
    props.markNotificationAsRead(notification, props.allNotifications);
  };

  return (
        <tbody>
            {props.notificationsToShow.map((item) => (
                <Notification
                    key={uuid()}
                    isRead={item.isRead}
                    category={item.category}
                    text={item.text}
                    onNotificationClick={onNotificationClick(item)}
                    date={item.readOn ? item.readOn.toString() : ''}
                />
            ))}
        </tbody>
  );
};

Notifications.propTypes = {
  requestNotifications: PropTypes.func.isRequired,
  notificationsToShow: PropTypes.array.isRequired,
  allNotifications: PropTypes.array,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
