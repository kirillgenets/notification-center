import { connect } from 'react-redux';
import FilterRadio from '../components/pages/board/FilterRadio';

const mapStateToProps = (state) => ({
	completionStatusFilter: state.completionStatusFilter,
	categoryFilter: state.categoryFilter,
});

export default connect(mapStateToProps)(FilterRadio);
