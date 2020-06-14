import { LOGOUT_USER } from '../constants';

const logoutUser = () => ({
	type: LOGOUT_USER,
	payload: {},
});

export default logoutUser;
