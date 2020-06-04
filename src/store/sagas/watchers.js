import { takeEvery } from 'redux-saga/effects';
import {
	REQUEST_TASKS,
	REQUEST_USER_REGISTRATION,
	REQUEST_USER_SIGN_IN,
	REQUEST_TEAM_AUTHENTICATION,
} from '../constants';
import { fetchTasks, postUserData, tryToSignIn, tryToGetTeam } from './workers';

export default function* rootSaga() {
	yield takeEvery(REQUEST_TASKS, fetchTasks);
	yield takeEvery(REQUEST_USER_REGISTRATION, postUserData);
	yield takeEvery(REQUEST_USER_SIGN_IN, tryToSignIn);
	yield takeEvery(REQUEST_TEAM_AUTHENTICATION, tryToGetTeam);
}
