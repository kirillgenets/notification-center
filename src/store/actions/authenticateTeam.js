import { AUTHENTICATE_TEAM } from '../constants';

const authenticateTeam = (team) => ({
	type: AUTHENTICATE_TEAM,
	payload: team,
});

export default authenticateTeam;
