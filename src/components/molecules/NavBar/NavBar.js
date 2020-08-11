import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../../templates/Register';
import Login from '../../templates/Login';
import Dashboard from '../../templates/Dashboard';
import withAuthorization from '../../hoc/WithAuthorization';

const NavBar = () => {
    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Login">Logowanie</Link>
                        </li>
                        <li>
                            <Link to="/Register">Rejestracja</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/Register" component={Register} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Dashboard" component={withAuthorization(Dashboard)} />
                </Switch>
            </Router>
        </>
    );
}

export default NavBar;