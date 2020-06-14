import PropTypes from 'prop-types';

export default {
	routesData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			path: PropTypes.string,
			action: PropTypes.func,
		})
	).isRequired,
};
