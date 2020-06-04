import { connect } from 'react-redux';
import Title from '../components/common/Title';

const mapStateToProps = (state) => ({
	teamName: state.team.title,
});

export default connect(mapStateToProps)(Title);
