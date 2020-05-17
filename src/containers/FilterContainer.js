import { connect } from 'react-redux';
import setCategoryFilter from '../store/actions/setCategoryFilter';
import setCompletionStatusFilter from '../store/actions/setCompletionStatusFilter';
import setCurrentPage from '../store/actions/setCurrentPage';
import Filter from '../components/pages/board/Filter';

const mapDispatchToProps = (dispatch) => ({
	setCategoryFilter: (filter) => dispatch(setCategoryFilter(filter)),
	setCompletionStatusFilter: (filter) => dispatch(setCompletionStatusFilter(filter)),
	setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(Filter);
