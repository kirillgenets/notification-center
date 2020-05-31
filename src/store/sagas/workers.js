import { call, put, cancel } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import postData from './../../API/postData';
import receiveTask from '../actions/receiveTasks';
import { API_URL } from '../constants';
import registerUser from './../actions/registerUser';

export function* fetchTasks(action) {
	try {
		const response = yield call(fetchData, `${API_URL}/Tasks`, action);

		yield put(receiveTask(response.data));
	} catch (error) {
		throw new Error(error);
	}
}

export function* postUserData(action) {
	try {
		console.log('yo');
		const response = yield call(postData, `${API_URL}/Users`, action.payload);

		yield put(registerUser(response.data));
	} catch (error) {
		throw new Error(error);
	}
}
