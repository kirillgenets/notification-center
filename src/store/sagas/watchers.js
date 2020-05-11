import { takeEvery } from 'redux-saga/effects';
import { REQUEST_TASKS, MARK_TASK_AS_READ } from '../constants';
import { fetchTasks, markTaskAsRead } from './workers';

export default function* rootSaga() {
  yield takeEvery(REQUEST_TASKS, fetchTasks);
  yield takeEvery(MARK_TASK_AS_READ, markTaskAsRead);
}
