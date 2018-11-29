import LoginView from "../components/Login";
import { bindActionCreators } from 'redux';
import { login } from '../actions/authenticationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            login,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginView);
