import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import Notification from '../Notification/Notification';

const Notifications = props => {
    useEffect(() => {
        props.receiveNotifications();
    }, []);

    return (
        <tbody>
            {props.notifications.map(item => (
                <Notification
                    key={uuid()}
                    isRead={item.isRead}
                    category={item.category}
                    text={item.text}
                    date={item.readOn ? item.readOn.toString() : ''}
                />
            ))}            
        </tbody>
    );
};

Notifications.propTypes = {
    receiveNotifications: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired
}

export default Notifications;
