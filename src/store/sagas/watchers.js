import { takeEvery } from 'redux-saga/effects';
import {
	REQUEST_TASKS,
	REQUEST_USER_REGISTRATION,
	REQUEST_USER_SIGN_IN,
	REQUEST_TEAM_AUTHENTICATION,
	REQUEST_TASK_EDIT,
	REQUEST_TASK_CREATION,
} from '../constants';
import { fetchTasks, postUserData, tryToSignIn, tryToGetTeam, putTask, postTask } from './workers';

export default function* rootSaga() {
	yield takeEvery(REQUEST_TASKS, fetchTasks);
	yield takeEvery(REQUEST_USER_REGISTRATION, postUserData);
	yield takeEvery(REQUEST_USER_SIGN_IN, tryToSignIn);
	yield takeEvery(REQUEST_TEAM_AUTHENTICATION, tryToGetTeam);
	yield takeEvery(REQUEST_TASK_EDIT, putTask);
	yield takeEvery(REQUEST_TASK_CREATION, postTask);
}
