import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isSignedIn as auth } from '../Forms/SignIn/authentication';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                return auth ? <Component {...props} />
                    : <Redirect to={{ pathname: "/signIn", state: props.location }} />
            }
        } />
    )
};
