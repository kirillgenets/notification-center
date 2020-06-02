import PropTypes from 'prop-types';

export default {
	requestUserRegistration: PropTypes.func.isRequired,
	removeSignUpError: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};
