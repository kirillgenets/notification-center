import initialState from '../initialState';
import { SET_CREATE_TEAM_ERROR, REMOVE_CREATE_TEAM_ERROR } from '../constants';

const createTeamError = (state = initialState, action) => {
	switch (action.type) {
		case SET_CREATE_TEAM_ERROR:
			return action.payload;
		case REMOVE_CREATE_TEAM_ERROR:
			return action.payload;
		default:
			return state;
	}
};

export default createTeamError;
