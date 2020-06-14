import { CREATE_TEAM } from '../constants';

const createTeam = (team) => ({
	type: CREATE_TEAM,
	payload: team,
});

export default createTeam;
