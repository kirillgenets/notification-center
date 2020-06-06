import PropTypes from 'prop-types';

export default {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
