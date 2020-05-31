import initialState from '../initialState';
import { REGISTER_USER } from '../constants';

const tasks = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return action.payload;
		default:
			return state;
	}
};

export default tasks;
