import ContactsView from '../components/Contacts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authentication.isAuthenticated,

        activeUser: {
            ...state.authentication.user,
        },
        // error: state.services.errors.chat,
        // isConnected: state.services.isConnected,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // editUserProfile,
            // onLogoutAction,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactsView);
