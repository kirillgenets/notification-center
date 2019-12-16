import { takeEvery } from 'redux-saga/effects';
import { REQUEST_NOTIFICATIONS, MARK_ALL_NOTIFICATIONS_AS_READ, MARK_NOTIFICATION_AS_READ } from '../constants/constants';
import { fetchNotifications, markAllNotificationsAsRead, markNotificationAsRead }  from './workers';

export default function* rootSaga() {
  yield takeEvery(REQUEST_NOTIFICATIONS, fetchNotifications);
  yield takeEvery(MARK_ALL_NOTIFICATIONS_AS_READ, markAllNotificationsAsRead);
  yield takeEvery(MARK_NOTIFICATION_AS_READ, markNotificationAsRead);
}