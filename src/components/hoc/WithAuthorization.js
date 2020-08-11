import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const withAuthorization = (WrappedComponentn) => {
    return class extends React.Component {
        state = {
            token: localStorage.getItem('TOKEN')
        }
        render() {
            return (
                <>
                    {this.state.token ? <WrappedComponentn /> : <Redirect to="/Login" />}
                </>
            )
        }
    }
}


export default withAuthorization;