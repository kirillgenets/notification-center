import { connect } from 'react-redux';
import setCategoryFilter from '../store/actions/setCategoryFilter';
import setReadStatusFilter from '../store/actions/setReadStatusFilter';
import setCurrentPage from '../store/actions/setCurrentPage';
import Filter from '../components/Filter';

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (filter) => dispatch(setCategoryFilter(filter)),
  setReadStatusFilter: (filter) => dispatch(setReadStatusFilter(filter)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(Filter);
