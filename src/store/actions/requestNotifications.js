import { REQUEST_NOTIFICATIONS } from '../constants';

const requestNotifications = (page, category, isRead) => ({
  type: REQUEST_NOTIFICATIONS,
  page,
  category,
  isRead,
});

export default requestNotifications;
