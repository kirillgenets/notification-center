import { connect } from 'react-redux';
import AppRouter from '../components/pages/AppRouter';

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(AppRouter);
