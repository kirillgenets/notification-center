import { takeEvery } from 'redux-saga/effects';
import { REQUEST_NOTIFICATIONS } from '../constants/constants';
import { fetchNotifications } from './workers';

export function* watchRequestNotifications() {
  yield takeEvery(REQUEST_NOTIFICATIONS, fetchNotifications);
}
