import { connect } from 'react-redux';
import setCurrentPage from '../store/actions/setCurrentPage';
import Pagination from '../components/Pagination';

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
	categoryFilter: state.categoryFilter,
	completionStatusFilter: state.completionStatusFilter,
	tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
