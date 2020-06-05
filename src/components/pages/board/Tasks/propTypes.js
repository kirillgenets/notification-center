import PropTypes from 'prop-types';

export default {
	requestTasks: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired,
	team: PropTypes.object.isRequired,
	markTaskAsCompleted: PropTypes.func,
	categoryFilter: PropTypes.string,
	completionStatusFilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
