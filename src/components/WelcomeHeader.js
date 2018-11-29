import React from 'react';
import {withRouter} from "react-router-dom";

class WelcomeHeader extends React.Component{

    handleLogin = ()=>{
        this.props.history.push("login");
    };

    handleSignUp = ()=>{
        this.props.history.push("sign-up");
    };

    render(){
        return(
            <section style={{backgroundColor: "#4267B2", height: "42px"}}>
                <button onClick={this.handleLogin}>Log In</button>
                <button onClick={this.handleSignUp}>Sign Up</button>
            </section>
        )
    }
}

export default withRouter(WelcomeHeader);
