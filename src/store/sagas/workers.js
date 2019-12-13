import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import { NOTIFICATIONS_PER_PAGE } from '../constants/constants';
import receiveNotifications from '../actions/receiveNotifications';

export function* fetchNotifications(action) {
  try {
    const response = yield call(
      fetchData, 
      `http://192.168.99.100:3000/api/v1/notifications/?page=${action.payload}&perPage=${NOTIFICATIONS_PER_PAGE}`
    );

    yield put(receiveNotifications(response.data.notifications));
  } catch(error) {
    throw new Error(error);
  }
}
