import { connect } from 'react-redux';
import setCurrentPage from '../store/actions/setCurrentPage';
import Pagination from '../components/Pagination';

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  categoryFilter: state.categoryFilter,
  readStatusFilter: state.readStatusFilter,
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
