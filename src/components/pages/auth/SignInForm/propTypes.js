import PropTypes from 'prop-types';

export default {
	requestUserSignIn: PropTypes.func.isRequired,
	removeSignInError: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
};
