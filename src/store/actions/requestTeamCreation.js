import { REQUEST_TEAM_CREATION } from '../constants';

const requestTeamCreation = (team) => ({
	type: REQUEST_TEAM_CREATION,
	payload: team,
});

export default requestTeamCreation;
