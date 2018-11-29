import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import '../App.css';

import Login from '../containers/Login';
import Registration from '../containers/Registration';
import Contacts from '../containers/Contacts';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';

const App = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Registration} />
            <PrivateRouteContainer path="/contacts" component={Contacts} />
            <Redirect to="/login" />
        </Switch>
    </Router>
);

export default App;
