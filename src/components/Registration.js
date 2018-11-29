import React from 'react';
import WelcomeHeader from './WelcomeHeader';

class RegistrationView extends React.Component{
    state = {
        firstname: {
            value: '',
            isValid: true,
        },
        lastname: {
            value: '',
            isValid: true,
        },
        email: {
            value: '',
            isValid: true,
        },
        password: {
            value: '',
            isValid: true,
        },
    };

    handleInput = (event) => {
        event.persist();

        const { name, value } = event.target;

        this.setState(prevState => ({
            [name]: {
                ...prevState[name],
                value,
            },
        }));
    };

    handleSubmit(event) {
        event.preventDefault();

        const { firstName, lastName, email, password } = this.state;

        this.props.onSignUp(firstName.value, lastName.value, email.value, password.value);
    }

    render(){
        return(
            <React.Fragment>
                <WelcomeHeader/>
                <form>
                    <div>
                        <label>
                            First Name:
                            <input type="text" name="firstname" onChange={this.handleInput} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Last Name:
                            <input type="text" name="lastname"  onChange={this.handleInput}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input type="text" name="email"  onChange={this.handleInput}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" name="password" onChange={this.handleInput}/>
                        </label>
                    </div>
                    <input type="submit" value="Create Account" onClick={this.handleSubmit}/>
                </form>
            </React.Fragment>
        )
    }
}

export default RegistrationView;
