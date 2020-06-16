import PropTypes from 'prop-types';

export default {
	requestTeamCreation: PropTypes.func.isRequired,
	removeCreateTeamError: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};
