import { MARK_NOTIFICATION_AS_READ } from '../constants/constants';

const markNotificationAsRead = (notification, notifications) => ({
    type: MARK_NOTIFICATION_AS_READ,
    payload: notifications.map(item => {
        if (item === notification && !notification.isRead) {
            item.isRead = true;
            item.readOn = new Date();
        }

        return item;
    })
})

export default markNotificationAsRead;