import { connect } from 'react-redux';
import requestNotifications from '../store/actions/requestNotifications';
import setCurrentPage from '../store/actions/setCurrentPage';
import Pagination from '../components/Pagination';

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(Pagination);