import { MARK_NOTIFICATION_AS_READ } from '../constants/constants';

const markNotificationAsRead = (notification) => ({
  type: MARK_NOTIFICATION_AS_READ,
  payload: notification,
});

export default markNotificationAsRead;
