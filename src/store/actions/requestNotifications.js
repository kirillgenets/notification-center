import { REQUEST_NOTIFICATIONS } from '../constants';

const requestNotifications = (page) => ({
  type: REQUEST_NOTIFICATIONS,
  payload: page,
});

export default requestNotifications;
