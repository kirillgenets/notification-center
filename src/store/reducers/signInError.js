import initialState from '../initialState';
import { SET_SIGN_IN_ERROR, REMOVE_SIGN_IN_ERROR } from '../constants';

const signInError = (state = initialState, action) => {
	switch (action.type) {
		case SET_SIGN_IN_ERROR:
			return action.payload;
		case REMOVE_SIGN_IN_ERROR:
			return action.payload;
		default:
			return state;
	}
};

export default signInError;
