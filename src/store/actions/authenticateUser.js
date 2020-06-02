import { AUTHENTICATE_USER } from '../constants';

const authenticateUser = (user) => ({
	type: AUTHENTICATE_USER,
	payload: user,
});

export default authenticateUser;
