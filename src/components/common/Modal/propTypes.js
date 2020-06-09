import PropTypes from 'prop-types';

export default {
	backgroundColor: PropTypes.string,
	boxShadow: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node])),
	]),
	isClosable: PropTypes.bool,
	onClose: PropTypes.func,
};
