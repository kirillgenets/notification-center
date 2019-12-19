import { MARK_ALL_NOTIFICATIONS_AS_READ } from '../constants';

const markAllNotificationsAsRead = (page, category, isRead) => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ,
  page,
  category,
  isRead,
});

export default markAllNotificationsAsRead;
