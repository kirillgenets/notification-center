import initialState from '../initialState';
import { REGISTER_USER, AUTHENTICATE_USER, LOGOUT_USER } from '../constants';

const user = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return action.payload;
		case AUTHENTICATE_USER:
			return action.payload;
		case LOGOUT_USER:
			return action.payload;
		default:
			return state;
	}
};

export default user;
