import { connect } from 'react-redux';
import requestUserRegistration from '../store/actions/requestUserRegistration';
import SignUpForm from './../components/pages/auth/SignUpForm/SignUpForm';

const mapDispatchToProps = (dispatch) => ({
	requestUserRegistration: (userData) => dispatch(requestUserRegistration(userData)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
