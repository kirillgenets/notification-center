import { call, put } from 'redux-saga/effects';
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
	} catch (error) {
		console.log('function*tryToSignIn -> error', error.response);
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
