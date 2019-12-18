import { RECEIVE_NOTIFICATIONS } from '../constants';

const receiveNotifications = (notifications) => ({
  type: RECEIVE_NOTIFICATIONS,
  payload: notifications,
});

export default receiveNotifications;
