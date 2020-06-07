import PropTypes from 'prop-types';

export default {
	teamId: PropTypes.number.isRequired,
	teamName: PropTypes.string.isRequired,
	userLogin: PropTypes.string.isRequired,
	tasks: PropTypes.array.isRequired,
};
