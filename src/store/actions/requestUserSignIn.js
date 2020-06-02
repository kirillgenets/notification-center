import { REQUEST_USER_SIGN_IN } from '../constants';

const requestUserSignIn = (userData) => ({
	type: REQUEST_USER_SIGN_IN,
	payload: userData,
});

export default requestUserSignIn;
