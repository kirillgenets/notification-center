import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import putData from '../../API/putData';
import { NOTIFICATIONS_PER_PAGE, API_URL } from '../constants';
import receiveNotifications from '../actions/receiveNotifications';
import requestNotifications from '../actions/requestNotifications';

export function* fetchNotifications(action) {
  try {
    const response = yield call(
      fetchData,
      `${API_URL}/?page=${action.payload}&perPage=${NOTIFICATIONS_PER_PAGE}`,
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
      API_URL,
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
      `${API_URL}/${action.id}`,
    );

    yield put(requestNotifications(action.page));
  } catch (error) {
    throw new Error(error);
  }
}
