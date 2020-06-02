import { SET_SIGN_UP_ERROR } from '../constants';

const setSignUpError = (error) => ({
	type: SET_SIGN_UP_ERROR,
	payload: error,
});

export default setSignUpError;
