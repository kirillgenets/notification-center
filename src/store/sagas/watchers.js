import { takeEvery } from 'redux-saga/effects';
import { REQUEST_TASKS } from '../constants';
import { fetchTasks } from './workers';

export default function* rootSaga() {
	yield takeEvery(REQUEST_TASKS, fetchTasks);
}
