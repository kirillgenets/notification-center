import PropTypes from 'prop-types';

export default {
	teamName: PropTypes.string.isRequired,
	userLogin: PropTypes.string.isRequired,
	tasks: PropTypes.array.isRequired,
};
