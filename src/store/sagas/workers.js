import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import putData from '../../API/putData';
import { NOTIFICATIONS_PER_PAGE } from '../constants';
import receiveNotifications from '../actions/receiveNotifications';
import requestNotifications from '../actions/requestNotifications';

export function* fetchNotifications(action) {
  try {
    const response = yield call(
      fetchData,
      `http://192.168.99.100:3000/api/v1/notifications/?page=${action.payload}&perPage=${NOTIFICATIONS_PER_PAGE}`,
    );

    yield put(receiveNotifications(response.data.notifications));
  } catch (error) {
    throw new Error(error);
  }
}

export function* markAllNotificationsAsRead(action) {
  try {
    yield call(
      putData,
      'http://192.168.99.100:3000/api/v1/notifications/',
    );

    yield put(requestNotifications(action.page));
  } catch (error) {
    throw new Error(error);
  }
}

export function* markNotificationAsRead(action) {
  try {
    yield call(
      putData,
      `http://192.168.99.100:3000/api/v1/notifications/${action.id}`,
    );

    yield put(requestNotifications(action.page));
  } catch (error) {
    throw new Error(error);
  }
}
