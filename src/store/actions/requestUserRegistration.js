import { REQUEST_USER_REGISTRATION } from '../constants';

const requestUserRegistration = ({ login, password, teamName, teamPassword }) => ({
	type: REQUEST_USER_REGISTRATION,
	payload: { login, password, teamName, teamPassword },
});

export default requestUserRegistration;
