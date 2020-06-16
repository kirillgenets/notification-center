import initialState from '../initialState';
import { AUTHENTICATE_TEAM, LOGOUT_USER } from '../constants';

const team = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE_TEAM:
			return action.payload;
		case LOGOUT_USER:
			return action.payload;
		default:
			return state;
	}
};

export default team;
