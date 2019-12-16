import { MARK_ALL_NOTIFICATIONS_AS_READ } from '../constants/constants';

const markAllNotificationsAsRead = (page) => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ,
  page,
});

export default markAllNotificationsAsRead;
