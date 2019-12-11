import { connect } from 'react-redux';
import setCategoryFilter from '../store/actions/setCategoryFilter';
import setReadStatusFilter from '../store/actions/setReadStatusFilter';
import Filter from '../components/Filter/Filter';

const mapDispatchToProps = dispatch => ({
    setCategoryFilter: filter => dispatch(setCategoryFilter(filter)),
    setReadStatusFilter: filter => dispatch(setReadStatusFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filter);