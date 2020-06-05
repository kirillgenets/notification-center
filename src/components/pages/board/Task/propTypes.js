import PropTypes from 'prop-types';

export default {
	id: PropTypes.number.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool,
	date: PropTypes.string,
};
