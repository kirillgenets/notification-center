import { connect } from 'react-redux';
import FilterRadio from '../components/FilterRadio';

const mapStateToProps = (state) => ({
  completionStatusFilter: state.completionStatusFilter,
  categoryFilter: state.categoryFilter,
});

export default connect(mapStateToProps)(FilterRadio);
