import { REQUEST_NOTIFICATIONS } from '../constants/constants';

const requestNotifications = (page) => ({
  type: REQUEST_NOTIFICATIONS,
  payload: page,
});

export default requestNotifications;
