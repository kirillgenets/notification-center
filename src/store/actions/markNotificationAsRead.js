import { MARK_NOTIFICATION_AS_READ } from '../constants/constants';

const markNotificationAsRead = (notification, page) => ({
  type: MARK_NOTIFICATION_AS_READ,
  id: notification,
  page,
});

export default markNotificationAsRead;
