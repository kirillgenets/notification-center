import PropTypes from 'prop-types';

export default {
	setCurrentPage: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	teamId: PropTypes.number.isRequired,
	categoryFilter: PropTypes.string,
	completionStatusFilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tasks: PropTypes.array,
};
