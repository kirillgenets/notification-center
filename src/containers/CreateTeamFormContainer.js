import { connect } from 'react-redux';
import CreateTeamForm from './../components/pages/auth/CreateTeamForm';
import removeCreateTeamError from './../store/actions/removeCreateTeamError';
import requestTeamCreation from './../store/actions/requestTeamCreation';

const mapStateToProps = (state) => ({
	error: state.createTeamError,
});

const mapDispatchToProps = (dispatch) => ({
	requestTeamCreation: (userData) => dispatch(requestTeamCreation(userData)),
	removeCreateTeamError: () => dispatch(removeCreateTeamError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamForm);
