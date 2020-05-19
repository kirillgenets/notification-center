import PropTypes from 'prop-types';

export default {
	backgroundColor: PropTypes.string,
	padding: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.shape({
			top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	]),
	boxShadow: PropTypes.string,
	borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node])),
	]),
};
