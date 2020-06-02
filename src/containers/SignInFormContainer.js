import { connect } from 'react-redux';
import SignInForm from './../components/pages/auth/SignInForm';
import requestUserSignIn from '../store/actions/requestUserSignIn';
import removeSignInError from './../store/actions/removeSignInError';

const mapStateToProps = (state) => ({
	error: state.signInError,
});

const mapDispatchToProps = (dispatch) => ({
	requestUserSignIn: (userData) => dispatch(requestUserSignIn(userData)),
	removeSignInError: () => dispatch(removeSignInError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
