import React from 'react';
import WelcomeHeader from './WelcomeHeader';

class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rememberMeChecked: false,
            email: {
                value: '',
                isValid: true,
            },
            password: {
                value: '',
                isValid: true,
            },
        };

        this.toggleRememberMe = this.toggleRememberMe.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = (event) => {
        event.persist();

        const {name, value} = event.target;

        this.setState(prevState => ({
            [name]: {
                ...prevState[name],
                value,
            },
        }));
    };

    toggleRememberMe(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;

        this.setState({
            rememberMeChecked: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {email, password, rememberMeChecked } = this.state;

        this.props.login(email.value, password.value, rememberMeChecked);
    }

    render() {
        return (
            <React.Fragment>
                <WelcomeHeader/>
                <form>
                    <div>
                        <label>
                            Email:
                            <input type="text" name="email" onChange={this.handleInput}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" name="password" onChange={this.handleInput}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                name="rememberme"
                                type="checkbox"
                                onChange={this.toggleRememberMe}/>
                            Remember me?

                        </label>
                    </div>
                    <input type="submit" value="Log In"  onClick={this.handleSubmit} />
                </form>
            </React.Fragment>
        )
    }
}

export default LoginView;
