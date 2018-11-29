import React from 'react';
import WelcomeHeader from './WelcomeHeader';

const LoginView = ({
                       signup, login, isAuthenticated, error,
                   }) => {
    return (
        <React.Fragment>
            <WelcomeHeader />
            {/*<WelcomeBody onSignup={signup} onLogin={login} />*/}
            <form>
                <label>
                    First Name:
                    <input type="text" name="firstname" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastname" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Sign In" />
            </form>
        </React.Fragment>
    );
};

export default LoginView;
