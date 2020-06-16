import PropTypes from 'prop-types';

export default {
	deleteTask: PropTypes.func.isRequired,
	teamId: PropTypes.number.isRequired,
	tasks: PropTypes.array.isRequired,
};
