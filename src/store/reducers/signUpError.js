import initialState from '../initialState';
import { SET_SIGN_UP_ERROR, REMOVE_SIGN_UP_ERROR } from '../constants';

const signUpError = (state = initialState, action) => {
	switch (action.type) {
		case SET_SIGN_UP_ERROR:
			return action.payload;
		case REMOVE_SIGN_UP_ERROR:
			return action.payload;
		default:
			return state;
	}
};

export default signUpError;
