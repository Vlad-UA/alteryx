import RegistrationView from "../components/Registration";
import { bindActionCreators } from 'redux';
import { signup } from '../actions/authenticationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            signup,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegistrationView);
