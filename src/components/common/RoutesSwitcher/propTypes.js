import PropTypes from 'prop-types';

export default {
	routesData: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
			exact: PropTypes.bool,
		})
	).isRequired,
};
