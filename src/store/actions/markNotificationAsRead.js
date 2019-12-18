import { MARK_NOTIFICATION_AS_READ } from '../constants';

const markNotificationAsRead = (notification, page) => ({
  type: MARK_NOTIFICATION_AS_READ,
  id: notification,
  page,
});

export default markNotificationAsRead;
