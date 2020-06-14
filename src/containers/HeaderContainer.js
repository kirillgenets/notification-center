import { connect } from 'react-redux';
import Header from '../components/common/Header';
import logoutUser from './../store/actions/logoutUser';

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
