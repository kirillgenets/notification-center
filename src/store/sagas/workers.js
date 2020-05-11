import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import putData from '../../API/putData';
import getURL from '../../API/getURL';
import { API_URL } from '../constants';
import receiveTask from '../actions/receiveTasks';
import requestTask from '../actions/requestTasks';

export function* fetchTasks(action) {
  try {
    const URL = getURL(action.page, action.category, action.isRead);

    const response = yield call(fetchData, URL);

    yield put(receiveTask(response.data));
  } catch (error) {
    throw new Error(error);
  }
}

export function* markTaskAsRead(action) {
  try {
    yield call(putData, `${API_URL}/${action.id}`);

    yield put(requestTask(action.page, action.category, action.isRead));
  } catch (error) {
    throw new Error(error);
  }
}
