import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signinActions } from '../../components/Forms/SignIn/actions';
import MainHeader from '../../components/Header';
import SearchResultsList from '../../components/SearchResultsList/SearchResultsList';
import Footer from '../../components/Footer/footer';
import pathOr from 'ramda/src/pathOr';
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';
require('./style.scss');

export default function SearchResults() {
    const [Navshow, setNavShow] = useState(false);
        // React redux hooks
        const dispatch = useDispatch();
        const history = useHistory();
    const handleNavModal = () => setNavShow(!Navshow);
    const background = {};
    const themes = useSelector(state => pathOr('', ['themes'])(state));
    
    // Sign In navigator or Sign out action
    const handleSignInClick = () => {
        if (isSignedIn) {
            dispatch(signinActions.signout());
            dispatch(signinActions.resetSignInParams());
            deleteCookie('signInStatus');
            deleteCookie('username');
            // window.location.pathname = '/';
        }
        dispatch(signinActions.resetSignInParams());
        history.push('./signIn')
    }
    return (
        <>
            <div className="search-background" style={background}>
                <MainHeader Navshow={Navshow}
                    handleNavModal={handleNavModal}
                    themes={themes}
                    handleSignInClick={handleSignInClick}
                    dispayBtn={isSignedIn ? false : true} />
                <SearchResultsList title="Movies" />
            </div>
            <Footer />
        </>
    )
}
