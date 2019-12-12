import { MARK_ALL_NOTIFICATIONS_AS_READ } from '../constants/constants';

const markAllNotificationsAsRead = notifications => ({
    type: MARK_ALL_NOTIFICATIONS_AS_READ,
    payload: notifications.map(notification => {
        notification.isRead = true;
        notification.readOn = notification.readOn ? notification.readOn : new Date();

        return notification;
    })
})

export default markAllNotificationsAsRead;