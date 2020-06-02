import { REQUEST_USER_REGISTRATION } from '../constants';

const requestUserRegistration = (userData) => ({
	type: REQUEST_USER_REGISTRATION,
	payload: userData,
});

export default requestUserRegistration;
