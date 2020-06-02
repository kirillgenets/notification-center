import { takeEvery } from 'redux-saga/effects';
import { REQUEST_TASKS, REQUEST_USER_REGISTRATION, REQUEST_USER_SIGN_IN } from '../constants';
import { fetchTasks, postUserData, tryToSignIn } from './workers';

export default function* rootSaga() {
	yield takeEvery(REQUEST_TASKS, fetchTasks);
	yield takeEvery(REQUEST_USER_REGISTRATION, postUserData);
	yield takeEvery(REQUEST_USER_SIGN_IN, tryToSignIn);
}
