import { call, put } from 'redux-saga/effects';
import fetchData from '../../API/fetchData';
import getURL from '../../API/getURL';
import receiveTask from '../actions/receiveTasks';

export function* fetchTasks(action) {
	try {
		const URL = getURL(action);

		const response = yield call(fetchData, URL);

		yield put(receiveTask(response.data));
	} catch (error) {
		throw new Error(error);
	}
}

export const a = {};
