import { MARK_NOTIFICATION_AS_READ } from '../constants';

const markNotificationAsRead = (notification, page, category, isRead) => ({
  type: MARK_NOTIFICATION_AS_READ,
  id: notification,
  page,
  category,
  isRead,
});

export default markNotificationAsRead;
