import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import putData from '../../API/putData';
import getURL from '../../API/getURL';
import { API_URL } from '../constants';
import receiveNotifications from '../actions/receiveNotifications';
import requestNotifications from '../actions/requestNotifications';

export function* fetchNotifications(action) {
  try {
    const URL = getURL(action.page, action.category, action.isRead);

    const response = yield call(
      fetchData,
      URL,
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

    yield put(requestNotifications(action.page, action.category, action.isRead));
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

    yield put(requestNotifications(action.page, action.category, action.isRead));
  } catch (error) {
    throw new Error(error);
  }
}
