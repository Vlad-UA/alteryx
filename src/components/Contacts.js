import React from 'react';
import WelcomeHeader from './WelcomeHeader';

class ContactsView extends React.Component{

    render(){
        return(
            <React.Fragment>
                <WelcomeHeader />
                <form>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Log In" />
                </form>
            </React.Fragment>
        )
    }
}

export default ContactsView;
