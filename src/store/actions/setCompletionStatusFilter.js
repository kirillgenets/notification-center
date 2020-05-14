import { SET_COMPLETION_STATUS_FILTER } from '../constants';

const setCompletionStatusFilter = (filter) => {
	console.log('filter', typeof filter);
	return {
		type: SET_COMPLETION_STATUS_FILTER,
		payload: filter,
	};
};

export default setCompletionStatusFilter;
