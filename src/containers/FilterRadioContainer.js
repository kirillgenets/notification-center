import { connect } from 'react-redux';
import FilterRadio from '../components/FilterRadio/FilterRadio';

const mapStateToProps = state => ({
    readStatusFilter: state.readStatusFilter,
    categoryFilter: state.categoryFilter
})

export default connect(mapStateToProps)(FilterRadio);