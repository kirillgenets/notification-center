import { connect } from 'react-redux';
import SignUpForm from './../components/pages/auth/SignUpForm/SignUpForm';
import requestUserRegistration from '../store/actions/requestUserRegistration';
import removeSignUpError from './../store/actions/removeSignUpError';

const mapStateToProps = (state) => ({
	error: state.signUpError,
});

const mapDispatchToProps = (dispatch) => ({
	requestUserRegistration: (userData) => dispatch(requestUserRegistration(userData)),
	removeSignUpError: () => dispatch(removeSignUpError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
