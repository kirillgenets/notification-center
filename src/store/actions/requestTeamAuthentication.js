import { REQUEST_TEAM_AUTHENTICATION } from '../constants';

const requestTeamAuthentication = (teamId) => ({
	type: REQUEST_TEAM_AUTHENTICATION,
	payload: teamId,
});

export default requestTeamAuthentication;
