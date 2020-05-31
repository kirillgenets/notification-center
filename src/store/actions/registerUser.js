import { REGISTER_USER } from '../constants';

const registerUser = (user) => ({
	type: REGISTER_USER,
	payload: user,
});

export default registerUser;
