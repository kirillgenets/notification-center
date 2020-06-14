import { call, put, select } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import postData from './../../API/postData';
import receiveTasks from '../actions/receiveTasks';
import { API_URL } from '../constants';
import registerUser from './../actions/registerUser';
import setSignUpError from './../actions/setSignUpError';
import setSignInError from './../actions/setSignInError';
import authenticateUser from './../actions/authenticateUser';
import authenticateTeam from './../actions/authenticateTeam';
import requestTeamAuthentication from './../actions/requestTeamAuthentication';
import putData from './../../API/putData';
import requestTasks from './../actions/requestTasks';
import { getCurrentPage, getCategoryFilter, getCompletionStatusFilter, getTeam } from './selectors';
import createTask from './../actions/createTask';

export function* fetchTasks(action) {
	try {
		const response = yield call(fetchData, `${API_URL}/Tasks`, action.payload);
		yield put(receiveTasks(response.data));
	} catch (error) {
		throw new Error(error);
	}
}

export function* postUserData(action) {
	try {
		const response = yield call(postData, `${API_URL}/Users`, action.payload);
		yield put(registerUser(response.data));
		yield put(requestTeamAuthentication(response.data.teamId));
	} catch (error) {
		yield put(setSignUpError(error.response.data.detail));
	}
}

export function* tryToSignIn(action) {
	try {
		const response = yield call(postData, `${API_URL}/Users`, action.payload, { isSignIn: true });
		yield put(authenticateUser(response.data));
		yield put(requestTeamAuthentication(response.data.teamId));
	} catch (error) {
		yield put(setSignInError(error.response.data.detail));
	}
}

export function* tryToGetTeam(action) {
	try {
		const response = yield call(fetchData, `${API_URL}/Teams/${action.payload}`);
		yield put(authenticateTeam(response.data));
	} catch (error) {
		throw new Error(error);
	}
}

export function* putTask(action) {
	try {
		yield call(putData, `${API_URL}/Tasks/${action.payload.id}`, action.payload);
		const page = yield select(getCurrentPage);
		const category = yield select(getCategoryFilter);
		const isCompleted = yield select(getCompletionStatusFilter);
		const team = yield select(getTeam);
		yield put(requestTasks({ page, category, isCompleted, teamId: team.id }));
	} catch (error) {
		throw new Error(error);
	}
}

export function* postTask(action) {
	try {
		const response = yield call(postData, `${API_URL}/Tasks`, action.payload);
		yield put(createTask(response.data));
		const page = yield select(getCurrentPage);
		const category = yield select(getCategoryFilter);
		const isCompleted = yield select(getCompletionStatusFilter);
		const team = yield select(getTeam);
		yield put(requestTasks({ page, category, isCompleted, teamId: team.id }));
	} catch (error) {
		throw new Error(error);
	}
}
