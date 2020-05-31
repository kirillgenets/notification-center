import { takeEvery } from 'redux-saga/effects';
import { REQUEST_TASKS, REQUEST_USER_REGISTRATION } from '../constants';
import { fetchTasks, postUserData } from './workers';

export default function* rootSaga() {
	yield takeEvery(REQUEST_TASKS, fetchTasks);
	yield takeEvery(REQUEST_USER_REGISTRATION, postUserData);
}
