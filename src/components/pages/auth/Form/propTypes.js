import { PropTypes } from 'prop-types';

export default {
	actionURL: PropTypes.string.isRequired,
	fieldsData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.string,
			placeholder: PropTypes.string,
		})
	).isRequired,
	method: PropTypes.oneOf(['get', 'post']).isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	subtitle: PropTypes.string,
	analogData: PropTypes.shape({
		text: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}),
};
