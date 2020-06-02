import { SET_SIGN_IN_ERROR } from '../constants';

const setSignInError = (error) => ({
	type: SET_SIGN_IN_ERROR,
	payload: error,
});

export default setSignInError;
