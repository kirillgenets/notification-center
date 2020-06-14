import { SET_CREATE_TEAM_ERROR } from '../constants';

const setCreateTeamError = (error) => ({
	type: SET_CREATE_TEAM_ERROR,
	payload: error,
});

export default setCreateTeamError;
