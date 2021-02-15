import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import Footer from '../../components/Footer/footer';
import MainHeader from '../../components/Header';
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';
import Movie from '../../components/ContentDetails';
import { signinActions } from '../../components/Forms/SignIn/actions';
import './style.scss';

const ContentDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const apiToken = pathOr('', ['apiToken'])(localStorage);
    const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));
    const themes = useSelector(state => pathOr([null, 'ThemeReducer'])(state));
    // Sign In navigator or Sign out action
    const handleSignInClick = () => {
        if (isSignedIn) {
            dispatch(signinActions.signout());
            dispatch(signinActions.resetSignInParams());
            deleteCookie('signInStatus');
            deleteCookie('username');
            window.location.reload();
            if (reload) {
                dispatch({ type: "RESET_RELOAD_STATUS" })
            }
        }
        dispatch(signinActions.resetSignInParams());
        history.push('./signIn');
    }
    return (
        <>
            <main className={'contentpage-background'}>
                <header aria-label="main header section">
                    <MainHeader
                        themes={themes}
                        dispayBtn={false}
                        handleSignInClick={handleSignInClick}
                    />
                </header>
                <section>
                    <Movie api_key={'df1a8a2aad5fbba70d7851155c59e9f7'} />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default ContentDetails;
